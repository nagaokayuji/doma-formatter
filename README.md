# Doma SQL Formatter ![license](https://img.shields.io/github/license/nagaokayuji/doma-sql-formatter-vscode) ![installs](https://img.shields.io/visual-studio-marketplace/i/nagaokayuji.doma-sql-formatter) ![version](https://img.shields.io/visual-studio-marketplace/v/nagaokayuji.doma-sql-formatter)

Formats SQL files for [Doma](https://github.com/domaframework/doma) framework.

## Features

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
