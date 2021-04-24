// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { format, TConfig } from "./formatter/format";

/** target file */
const sqlSelector: vscode.DocumentSelector = [
  { scheme: "file", language: "sql" },
];

/** configure format options */
const getSettings = (options: vscode.FormattingOptions): TConfig => {
  const settings: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration(
    "doma-sql-formatter"
  );
  return {
    uppercase: settings.get("toUppercase") !== false,
    indent: options.insertSpaces ? " ".repeat(options.tabSize) : "\t",
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
}

// this method is called when your extension is deactivated
export function deactivate() {}
