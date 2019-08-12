DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table actors.
CREATE TABLE burgers (
  id INT AUTO_INCREMENT,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY(id)
);