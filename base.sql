
CREATE DATABASE goticks;
CREATE TABLE "user" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "picture"       VARCHAR(255),
    "firstName"     VARCHAR(255) NOT NULL,
    "lastName"      VARCHAR(255) NOT NULL,
    "phoneNumber"   VARCHAR(255) NOT NULL,
    "email"         VARCHAR(255) NOT NULL,
    "password"      VARCHAR(255) NOT NULL,
    "createdAt"     TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "forgot" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "userId"        INT,
    "email"         VARCHAR(255)  NOT NULL,
    "code"          VARCHAR(255),
    "createdAt"     TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "movie" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "picture"       VARCHAR(255),
    "title"         VARCHAR(255) NOT NULL,
    "releaseDate"   TIMESTAMP NOT NULL,
    "director"      VARCHAR(255) NOT NULL,
    "duration"      TIME NOT NULL,
    "synopsis"      TEXT NOT NULL,
    "createdAt"     TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "genre" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name"          VARCHAR(255) NOT NULL,
    "createdAt"     TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "movieGenre" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "movieId"       INT,
    "genreId"       INT,
    "createdAt"     TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "casts" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name"          VARCHAR(255) NOT NULL,
    "createdAt"     TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "movieCast" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "movieId"       INT,
    "castId"        INT,
    "createdAt"     TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "subscribe" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "email"         VARCHAR(255) NOT NULL,
    "createdAt"     TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "cinema" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "picture"       VARCHAR(255),
    "name"          VARCHAR(255) NOT NULL,
    "address"       VARCHAR(255) NOT NULL,
    "city"          VARCHAR(255) NOT NULL,
    "createdAt"     TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "movieSchedule" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "movieId"       INT,
    "cinemaId"      INT,
    "price"         BIGINT NOT NULL,
    "startDate"     DATE NOT NULL,
    "endDate"       DATE NOT NULL,
    "createdAt"     TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "movieScheduleTime" (
    "id"                INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "time"              TIME NOT NULL,
    "movieScheduleId"   INT,
    "createdAt"         TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updatedAt"         TIMESTAMPTZ
);
CREATE TABLE "status" (
    "id"                INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name"              VARCHAR(255) NOT NULL,
    "createdAt"         TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updatedAt"         TIMESTAMPTZ
);
CREATE TABLE "transaction" (
    "id"                INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "bokingDate"        TIMESTAMP NOT NULL,
    "movieId"           INT,
    "cinemaId"          INT,
    "movieScheduleId"   INT,
    "fullName"          VARCHAR(255) NOT NULL,
    "email"             VARCHAR(255) NOT NULL,
    "phoneNumber"       VARCHAR(255) NOT NULL,
    "statusId"          INT,
    "createdAt"         TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updatedAt"         TIMESTAMPTZ
);
CREATE TABLE "reversedSeat" (
    "id"                INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "seatNum"           VARCHAR(255) NOT NULL,
    "transactionId"     INT,
    "createdAt"         TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updatedAt"         TIMESTAMPTZ
);
CREATE TABLE "paymentMethod" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "picture"       VARCHAR(255),
    "name"          VARCHAR(255) NOT NULL,
    "createdAt"     TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

INSERT INTO "user"
("picture", "firstName", "lastName", "phoneNumber", "email", "password")
VALUES
('profil.png', 'Deni', 'Ansyah', '0895711520107', 'deni@mail.com', 'deni123'),
('fcProfil.png', 'Frenk', 'Clint', '0821xxxxxxxx', 'frenk@mail.com', 'fc123');

INSERT INTO "transaction"
("bokingDate", "movieId", "cinemaId", "movieScheduleId", "fullName", "email", "phoneNumber", "statusId")
VALUES
('2017-07-07 02:00:00', 1, 1, 1, 'Deni Ansyah', 'deni@gmail.com', '0895711520107', 1);

INSERT INTO "subscribe"
("email")
VALUES
('deni@mail.com');

INSERT INTO "status"
("name")
VALUES
('active');

INSERT INTO "reversedSeat"
("seatNum", "transactionId")
VALUES
('C4', 1);

INSERT INTO "paymentMethod"
("picture", "name")
VALUES
('ovo.png', 'ovo');

INSERT INTO "movieScheduleTime"
("time", "movieScheduleId")
VALUES
('14:00:00', 1);

INSERT INTO "movieSchedule"
("movieId", "cinemaId", "price", "startDate", "endDate")
VALUES
(1, 1, 140000, '2020-07-06', '2020-07-12');

INSERT INTO "movieGenre"
("movieId", "genreId")
VALUES
(1, 1);

INSERT INTO "movieCast"
("movieId", "castId")
VALUES
(1, 1);

INSERT INTO "movie"
("picture", "title", "releaseDate", "director", "duration", "synopsis")
VALUES
('film1.png', 'Spider-Man', '2017-06-28 00:00:00', 'Jon Watss', '02:13:00', 'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.');

INSERT INTO "genre"
("name")
VALUES
('Action'),
('Sci-Fi');

INSERT INTO "forgot"
("userId", "email")
VALUES
(2, 'fenk@mail.com');

INSERT INTO "cinema"
("picture", "name", "address", "city")
VALUES
('hiflix.png', 'hiflix', 'Colonel street No. 2, Ease Purwokerto', 'Purwokerto');

INSERT INTO "casts"
("name")
VALUES
('Tom Holland'),
('Michael Keaton'),
('Robert Downey Jr');


