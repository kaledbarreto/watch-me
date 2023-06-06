import database from "../helpers/database";
import { getRandomUUID } from "../helpers/uuid";

interface User {
  id: string;
  email: string;
  password: string;
}

const getByEmail = async (email: string): Promise<User | undefined> => {
  const result = await database.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  return result?.length ? result[0] : undefined;
};

const save = async (user: { email: string; passwordHash: string }) => {
  const userId = getRandomUUID();

  const result = await database.query(
    "INSERT INTO users (id, email, password) VALUES (?, ?, ?) RETURNING *",
    [userId, user.email, user.passwordHash]
  );

  return { id: result[0].id, email: result[0].email };
};

export default { getByEmail, save };
