CREATE DATABASE shortPost;

CREATE TABLE post (
  post_id BIGSERIAL NOT NULL PRIMARY KEY,
  post_title VARCHAR(200) NOT NULL,
  post_message VARCHAR(600) NOT NULL
)
