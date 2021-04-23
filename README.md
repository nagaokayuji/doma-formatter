# doma-sql-formatter README

Formats SQL files for [Doma](https://github.com/domaframework/doma).

## Features

Original file:

```sql
SELECT *
FROM employee
WHERE
  employee_id = /* employeeId */99
```

Other formatter (not works):

```sql
SELECT
  *
FROM
  employee
WHERE
  employee_id =
  /* employeeId */
  99
```

This extension:

```sql
SELECT
  *
FROM
  employee
WHERE
  employee_id = /* employeeId */99
```
