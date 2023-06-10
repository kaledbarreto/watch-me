import database from "../helpers/database";
import { getRandomUUID } from "../helpers/uuid";

const getByUser = async (id: string) => {
  const result = await database.query(
    "SELECT serie_id AS id, name, description, image_url FROM users_favorites INNER JOIN series ON series.id = users_favorites.serie_id WHERE user_id = ?",
    [id]
  );

  return result;
};

const getByUserAndSerie = async (id: string, serie_id: string) => {
  const result = await database.query(
    "SELECT * FROM users_favorites WHERE user_id = ? AND serie_id = ?",
    [id, serie_id]
  );

  return result[0]?.id;
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

export default { getByUser, getByUserAndSerie, addToUser, removeFromUser };
