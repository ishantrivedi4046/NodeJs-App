import mysql from "mysql2";

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "Astrocoder8046@786",
});

const db = mysqlPool.promise();
export default db;
