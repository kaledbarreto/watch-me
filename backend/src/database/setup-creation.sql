CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS platforms (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS series (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url URL NOT NULL,
  platform_id UUID NOT NULL,
  FOREIGN KEY (platform_id) REFERENCES platforms (id) 
);

CREATE TABLE IF NOT EXISTS users_favorites (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL,
  serie_id UUID NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user (id) 
  FOREIGN KEY (serie_id) REFERENCES serie (id) 
);

INSERT INTO users (id, email, password) VALUES ('admin', 'admin@email.com', '$2b$10$4Y9I/CivMZ2O4aqvHz/R7uA3AKAPaOoA5q4jlD86Dgk7qH3EZRRnW'); -- 12345678

