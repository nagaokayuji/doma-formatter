import * as vscode from "vscode";
import * as sqlFormatter from "sql-formatter";

/** SQL dialect */
export type TLanguage =
  | "db2"
  | "mariadb"
  | "mysql"
  | "n1ql"
  | "plsql"
  | "postgresql"
  | "redshift"
  | "spark"
  | "sql"
  | "tsql"
  | undefined;

/** configuration oprions */
export type TConfig = {
  uppercase: boolean;
  indent: string;
  language: TLanguage;
};

/** formatter */
export const format = (text: string, options: TConfig): string => {
  let formattedText = sqlFormatter.format(text, {
    uppercase: options.uppercase,
    indent: options.indent,
    language: options.language,
    isDoma: true,
  });
  return formattedText;
};

/** for debug */
const puts = (value: string) => {
  vscode.window.showInformationMessage(value);
  console.log(value);
};
