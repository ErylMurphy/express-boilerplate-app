CREATE DATABASE quotestagram;

\c quotestagram

DROP TABLE IF EXISTS quotes;

DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE quotes (
  id SERIAL PRIMARY KEY,
  author TEXT,
  content TEXT,
  category_id INTEGER REFERENCES categories(id)
);

