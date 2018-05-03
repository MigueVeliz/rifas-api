
DROP TABLE If EXISTS users;
DROP TABLE If EXISTS rifas;
DROP TABLE If EXISTS activeRifas;


CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  lastName VARCHAR NOT NULL,
  address VARCHAR,
  city VARCHAR,
  state VARCHAR,
  zipCode INTEGER,
  credits INTEGER
  /*password_digest VARCHAR NOT NULL,
  token VARCHAR NOT NULL*/
);

INSERT INTO users(name, email, lastName, address, city, state, zipCode, credits) VALUES
('Angel', 'lol@gmail.com', 'veliz', '5008 4th ave apt 3', 'Brooklyn', 'New York', 11220, 5);

CREATE TABLE rifas (
	id BIGSERIAL PRIMARY KEY,
	flyer VARCHAR,
	price INTEGER,
	finish_date VARCHAR,
	users TEXT[]
);

INSERT INTO rifas(flyer, price, finish_date, users) VALUES
('https://preview.ibb.co/hMsGKx/domingo_20_de_mayo_laboom_2018.jpg', 1, 'some date', '{ miguelveliz91@gmail.com, angelveliz91@gmail.com}');

CREATE TABLE activeRifas (
	id BIGSERIAL PRIMARY KEY,
	user_email VARCHAR,
	user_name VARCHAR,
	user_location VARCHAR,
	rifa_id INTEGER,
	rifa_name VARCHAR
);


INSERT INTO activeRifas(user_email, user_name, user_location, rifa_id, rifa_name) VALUES
('angelveliz@gmail.com', 'Angel', 'Brooklyn NY', 1, 'Raymix Laboom');


