// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { format, TConfig, TLanguage } from "./formatter/format";

/** target file */
const sqlSelector: vscode.DocumentSelector = [
  { scheme: "file", language: "sql" },
];

type TFormattingOptions = {
  tabSize: number;
  insertSpaces: boolean;
};

/** configure format options */
const getSettings = (options: TFormattingOptions): TConfig => {
  const settings: vscode.WorkspaceConfiguration =
    vscode.workspace.getConfiguration("doma-sql-formatter");
  return {
    uppercase: settings.get("toUppercase") !== false,
    indent: options.insertSpaces ? " ".repeat(options.tabSize) : "\t",
    language: settings.get("dialect") as TLanguage,
    linesBetweenQueries: settings.get("linesBetweenQueries") || 1,
  };
};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  vscode.languages.registerDocumentRangeFormattingEditProvider(sqlSelector, {
    provideDocumentRangeFormattingEdits: (document, range, options) => [
      vscode.TextEdit.replace(
        range,
        format(document.getText(range), getSettings(options))
      ),
    ],
  });
  let disposable: vscode.Disposable = vscode.commands.registerCommand(
    "doma.forceFormat",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }
      const document = editor.document;
      const lastLine = document.lineCount - 1;

      const options = {
        tabSize: editor.options.tabSize as number, // always number
        insertSpaces: editor.options.insertSpaces as boolean, // always boolean
      };
      const range: vscode.Range = new vscode.Range(
        0,
        0,
        lastLine,
        document.lineAt(lastLine).text.length
      );
      // format
      const result: string = format(document.getText(), getSettings(options));
      editor.edit((builder) => builder.replace(range, result));
    }
  );
  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
