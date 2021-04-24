import * as vscode from "vscode";
import * as sqlFormatter from "sql-formatter";

/** configuration oprions */
export type TConfig = {
  uppercase: boolean;
  indent: string;
};

/** formatter */
export const format = (text: string, options: TConfig): string => {
  let formattedText = sqlFormatter.format(text, {
    uppercase: options.uppercase,
    indent: options.indent,
    isDoma: true,
  });
  return formattedText;
};

/** for debug */
const puts = (value: string) => {
  vscode.window.showInformationMessage(value);
  console.log(value);
};
