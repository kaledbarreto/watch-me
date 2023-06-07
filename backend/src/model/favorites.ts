import database from "../helpers/database";
import { getRandomUUID } from "../helpers/uuid";

const getByUser = async (id: string) => {
  const result = await database.query(
    "SELECT * FROM users_favorites WHERE user_id = ?",
    [id]
  );

  return result;
};

const addToUser = async (user_id: string, serie_id: string) => {
  const id = getRandomUUID();

  const result = await database.query(
    "INSERT INTO users_favorites (id, user_id, serie_id) VALUES (?, ?, ?) RETURNING *",
    [id, user_id, serie_id]
  );

  return result;
};

const removeFromUser = async (user_id: string, serie_id: string) => {
  const result = await database.query(
    "DELETE FROM users_favorites WHERE user_id = ? AND serie_id = ?",
    [user_id, serie_id]
  );

  return result;
};

export default { getByUser, addToUser, removeFromUser };
