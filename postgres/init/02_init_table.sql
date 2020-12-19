\c vote

DROP TABLE IF EXISTS votes;

CREATE TABLE votes(
  id SERIAL NOT NULL,
  entry_no INT NOT NULL,
  ip TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);