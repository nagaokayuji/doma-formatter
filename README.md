# doma-sql-formatter README

Formats SQL files for [Doma](https://github.com/domaframework/doma).

## Features

Original file:

```sql
SELECT * FROM employee
WHERE /*%for name : names */
  employee_name LIKE /* name */'hoge'
  /*%if name_has_next */
  /*# "or" */
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
    /*%end */
  /*%end*/
  OR salary > 1000
```
