import database from "../helpers/database";
import { getRandomUUID } from "../helpers/uuid";

const getAll = async () => {
  const result = await database.query("SELECT * FROM platforms");

  return result;
};

const getById = async (id: string) => {
  const result = await database.query("SELECT * FROM platforms WHERE id = ?", [
    id,
  ]);

  return result[0];
};

const save = async (name: string) => {
  const id = getRandomUUID();

  const result = await database.query(
    "INSERT INTO platforms (id, name) VALUES (?, ?) RETURNING *",
    [id, name]
  );

  return result;
};

const update = async (id: string, name: string) => {
  const result = await database.query(
    "UPDATE platforms SET name = ? WHERE id = ?",
    [name, id]
  );

  return result;
};

const remove = async (id: string) => {
  const result = await database.query("DELETE FROM platforms WHERE id = ?", [
    id,
  ]);

  return result;
};

export default { getAll, getById, save, update, remove };
