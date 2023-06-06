import database from "../helpers/database";
import { getRandomUUID } from "../helpers/uuid";

interface Series {
  name: string;
  description: string;
  image_url: string;
  platform_id: string;
}

const getAllByPlatform = async (platform_id: string) => {
  const result = await database.query(
    "SELECT * FROM series WHERE platform_id = ?",
    [platform_id]
  );

  return result;
};

const getById = async (id: string) => {
  const result = await database.query("SELECT * FROM series WHERE id = ?", [
    id,
  ]);

  return result;
};

const save = async (serie: Series) => {
  const id = getRandomUUID();

  const result = await database.query(
    "INSERT INTO series (id, name, description, image_url, platform_id) VALUES (?, ?, ?, ?, ?) RETURNING *",
    [id, serie.name, serie.description, serie.image_url, serie.platform_id]
  );

  return result;
};

const update = async (id: string, serie: Series) => {
  const result = await database.query(
    "UPDATE series SET name = ?,description = ?, image_url = ?, platform_id = ? WHERE id = ?",
    [serie.name, serie.description, serie.image_url, serie.platform_id, id]
  );

  return result;
};

const remove = async (id: string) => {
  const result = await database.query("DELETE FROM series WHERE id = ?", [id]);

  return result;
};

export default { getAllByPlatform, getById, save, update, remove };
