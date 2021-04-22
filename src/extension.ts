// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { format } from "./formatter/parser";

const sqlSelector: vscode.DocumentSelector = [
  { scheme: "file", language: "sql" },
];

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // formatter for .sql
  vscode.languages.registerDocumentFormattingEditProvider(sqlSelector, {
    provideDocumentFormattingEdits(
      document: vscode.TextDocument
    ): vscode.ProviderResult<vscode.TextEdit[]> {
      format(document);
      return;
    },
  });
}

// this method is called when your extension is deactivated
export function deactivate() {}
