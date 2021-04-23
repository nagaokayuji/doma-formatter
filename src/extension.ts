// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { format } from "./formatter/format";

const sqlSelector: vscode.DocumentSelector = [
  { scheme: "file", language: "sql" },
];
const getSettings = () => {
  const settings: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration(
    "doma-sql-formatter"
  );
  return { toUppercase: settings.get("toUppercase") != false };
};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  vscode.languages.registerDocumentFormattingEditProvider(sqlSelector, {
    provideDocumentFormattingEdits(
      document: vscode.TextDocument
    ): vscode.ProviderResult<vscode.TextEdit[]> {
      const text: string = document.getText();
      const lineEnd: number = document.lineCount - 1;
      const start: vscode.Position = new vscode.Position(0, 0);
      const end: vscode.Position = new vscode.Position(
        lineEnd,
        document.lineAt(lineEnd).text.length
      );
      const range: vscode.Range = new vscode.Range(start, end);
      return [
        vscode.TextEdit.replace(range, format(text, getSettings().toUppercase)),
      ];
    },
  });
}

// this method is called when your extension is deactivated
export function deactivate() {}
