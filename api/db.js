import mysql from "mysql"

const dbPool = mysql.createPool({
    connectionLimit: 10, // Adjust the limit as needed
    host: "sql9.freemysqlhosting.net",
    user: "sql9640005",
    password: "Dx5cDGQME3",
    database: "sql9640005",
});

function performQuery(query, values, callback) {
    dbPool.getConnection((error, connection) => {
        if (error) {
            console.error("Error getting connection from pool:", error);
            return callback(error, null);
        }

        connection.query(query, values, (queryError, results) => {
            connection.release(); // Release the connection back to the pool

            if (queryError) {
                console.error("Error executing query:", queryError);
                return callback(queryError, null);
            }

            callback(null, results);
        });
    });
}