CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE DATABASE bitnine;

CREATE TABLE users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE user_data (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid REFERENCES users(id),
    data TEXT
);

SELECT * FROM users;

INSERT INTO users (first_name, last_name, email, password) VALUES ('Mukarram', 'Ali', 'mukarram@email.com', 'mukarram');
