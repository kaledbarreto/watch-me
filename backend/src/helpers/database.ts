import { Database } from "sqlite3";

const db = new Database("db.sqlite");

function query(sql: string, params?: any): Promise<Array<any>> {
  return new Promise(function (resolve, reject) {
    db.all(sql, params, function (error, result: any) {
      if (error) reject(error);
      else resolve(result);
    });
  });
}

export default { query };
