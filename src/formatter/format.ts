import * as vscode from "vscode";

/** formatter */
export const format = (text: string): string => {
  console.log("called format function");
  puts(text);
  return "formatted document hogehoge";
};

/** for debug */
const puts = (value: string) => {
  vscode.window.showInformationMessage(value);
  console.log(value);
};
