import fs from "fs";
import { Database } from "sqlite3";

const db = new Database("db.sqlite");

// Read and execute the SQL query in ./sql/articles.sql
db.exec(fs.readFileSync(__dirname + "/database/setup-creation.sql").toString());
