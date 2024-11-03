# This is for reproducing the mysql2 issue in deno2

## Description

This repo is for reproducing the [mysql2](https://github.com/sidorares/node-mysql2) issue in Deno, specifically focusing on database connection and query execution using the mysql2 library.

## Directory Structure

- `mysql2-3-4-0` is using the package `mysql2@3.4.0`
- `mysql2-3-4-1` is using the package `mysql2@3.4.1`
- `mysql2-3-11-3` is using the package `mysql2@3.11.3`

## Environment Dependencies

- [deno 2](https://deno.com/)

## Executing `deno check`

- mysql2@3.4.0

    ``` sh
    cd mysql2-3-4-0
    deno check main.ts
    ```

    Result is ok

- mysql2@3.4.1

    ``` sh
    cd mysql2-3-4-1
    deno check main.ts
    ```

    Result:

    ``` sh
    Check file:///Users/yimingzhi/Projects/deno2-mysql2-issues-reproduction/mysql2-3-4-1/main.ts
    error: TS2339 [ERROR]: Property 'query' does not exist on type 'Connection'.
            const [results, fields] = await connection.query(
                                                       ~~~~~
    at file:///Users/yimingzhi/Projects/deno2-mysql2-issues-reproduction/Database.ts:14:56

    TS2339 [ERROR]: Property 'execute' does not exist on type 'Connection'.
            const [result, fields] = await connection.execute(sql, values);
                                                      ~~~~~~~
    at file:///Users/yimingzhi/Projects/deno2-mysql2-issues-reproduction/Database.ts:30:55

    Found 2 errors.
    ```

- mysql2@3.11.3

    ``` sh
    cd mysql2-3-11-3
    deno check main.ts
    ```

    Result:

    ``` sh
    Check file:///Users/yimingzhi/Projects/deno2-mysql2-issues-reproduction/mysql2-3-11-3/main.ts
    error: TS2339 [ERROR]: Property 'query' does not exist on type 'Connection'.
            const [results, fields] = await connection.query(
                                                       ~~~~~
    at file:///Users/yimingzhi/Projects/deno2-mysql2-issues-reproduction/Database.ts:14:56

    TS2339 [ERROR]: Property 'execute' does not exist on type 'Connection'.
            const [result, fields] = await connection.execute(sql, values);
                                                      ~~~~~~~
    at file:///Users/yimingzhi/Projects/deno2-mysql2-issues-reproduction/Database.ts:30:55

    Found 2 errors.
    ```

> The result is the same when executing the `deno compile` command.
