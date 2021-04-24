# Doma SQL Formatter 
![license](https://img.shields.io/github/license/nagaokayuji/doma-sql-formatter-vscode) ![downloads](https://img.shields.io/visual-studio-marketplace/d/nagaokayuji.doma-sql-formatter) ![installs](https://img.shields.io/visual-studio-marketplace/i/nagaokayuji.doma-sql-formatter) ![version](https://img.shields.io/visual-studio-marketplace/v/nagaokayuji.doma-sql-formatter)

Formats SQL files for [Doma](https://github.com/domaframework/doma) framework.

## Links
- [Marketplace](https://marketplace.visualstudio.com/items?itemName=nagaokayuji.doma-sql-formatter)
- [Repository](https://github.com/nagaokayuji/doma-sql-formatter-vscode)
- [Formatter](https://github.com/nagaokayuji/sql-formatter-doma) forked from [zeroturnaround/sql-formatter](https://github.com/zeroturnaround/sql-formatter)

## Usage

Files can be formatted by the **Format Document** (or **Format Document With...** and then select **Doma SQL Formatter**) option or keyboard shortcuts.

Default keyboard shortcuts:

- MacOS: **⇧⌥F** or **Shift+Option+F**
- Windows: **Shift+Alt+F**
- Linux: **Ctrl+Shift+I**

## Features

### example
Original file:

```sql
SELECT * FROM employee
WHERE /*%for name : names */
  employee_name LIKE /* name */'hoge'
  /*%if name_has_next */
  /*# "or" */
  /*%elseif condition */
  /*# hogehoge */
  /*%end */
  /*%end*/
OR salary > 1000
```

Other formatter (not works):

```sql
SELECT
  *
FROM
  employee
WHERE
  /*%for name : names */
  employee_name LIKE
  /* name */
  'hoge'
  /*%if name_has_next */
  /*# "or" */
  /*%elseif condition */
  /*# hogehoge */
  /*%end */
  /*%end*/
  OR salary > 1000
```

This extension:

```sql
SELECT
  *
FROM
  employee
WHERE
  /*%for name : names */
    employee_name LIKE /* name */'hoge'
    /*%if name_has_next */
      /*# "or" */
    /*%elseif condition */
      /*# hogehoge */
    /*%end */
  /*%end*/
  OR salary > 1000
```
