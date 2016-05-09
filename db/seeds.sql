CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean NOT NULL,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Mushroom', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Big Bang', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Top Gun', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Whiskey Deluxe', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Baconator', true);
