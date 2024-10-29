import mysql from "mysql2/promise";

export class Database {
    async test(): Promise<void> {
        // Create the connection to database
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            database: "test",
        });

        // A simple SELECT query
        try {
            const [results, fields] = await connection.query(
                'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
            );

            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        } catch (err) {
            console.log(err);
        }

        // A simple INSERT execution
        try {
            const sql =
                "INSERT INTO `users`(`name`, `age`) VALUES (?, ?), (?,?)";
            const values = ["Josh", 19, "Page", 45];

            const [result, fields] = await connection.execute(sql, values);

            console.log(result);
            console.log(fields);
        } catch (err) {
            console.log(err);
        }
    }
}
