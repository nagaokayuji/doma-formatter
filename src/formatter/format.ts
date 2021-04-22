import * as vscode from "vscode";
import * as sqlFormatter from "sql-formatter";

/** formatter */
export const format = (text: string): string => {
  let formattedText = sqlFormatter.format(text, { uppercase: true });
  console.log("called format function");
  puts(text);
  return formattedText;
};

/** for debug */
const puts = (value: string) => {
  vscode.window.showInformationMessage(value);
  console.log(value);
};
