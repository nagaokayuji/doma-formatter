import * as vscode from "vscode";

/** formatter */
export const format = (document: vscode.TextDocument) => {
  puts(document.getText());
};

/**
 * for debug
 */
const puts = (value: string) => {
  vscode.window.showInformationMessage(value);
  console.log(value);
};
