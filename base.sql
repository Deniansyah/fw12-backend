
CREATE DATABASE goticks;
CREATE TABLE "users" (
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

INSERT INTO "subscribe"
("email")
VALUES
('test@mail.com');

INSERT INTO "status"
("name")
VALUES
('active');

INSERT INTO "reversedSeat"
("seatNum", "transactionId")
VALUES
('C4', 1);

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

INSERT INTO "genre"
("name")
VALUES
('Action'),
('Sci-Fi');

INSERT INTO "casts"
("name")
VALUES
('Tom Holland'),
('Michael Keaton'),
('Robert Downey Jr');

ALTER TABLE "transaction"
    ALTER COLUMN "bokingDate" TYPE timestamp with time zone ;

ALTER TABLE "movie"
    ALTER COLUMN "releaseDate" TYPE timestamp with time zone ;

ALTER TABLE "movie"
    ALTER COLUMN "duration" TYPE time with time zone ;

ALTER TABLE "users" ADD CONSTRAINT "email" UNIQUE ("email");


ALTER TABLE "movieCast"
ADD CONSTRAINT "fk_movieCast_movieId"
FOREIGN KEY ("movieId") REFERENCES "movie" ("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "movieCast"
ADD CONSTRAINT "fk_movieCast_castId"
FOREIGN KEY ("castId") REFERENCES "casts" ("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "movieGenre"
ADD CONSTRAINT "fk_movieGenre_movieId"
FOREIGN KEY ("movieId") REFERENCES "movie" ("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "movieGenre"
ADD CONSTRAINT "fk_movieGenre_genreId"
FOREIGN KEY ("genreId") REFERENCES "genre" ("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "movieSchedule"
ADD CONSTRAINT "fk_movieSchedule_movieId"
FOREIGN KEY ("movieId") REFERENCES "movie" ("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "movieSchedule"
ADD CONSTRAINT "fk_movieSchedule_cinemaId"
FOREIGN KEY ("cinemaId") REFERENCES "cinema" ("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "movieScheduleTime"
ADD CONSTRAINT "fk_movieScheduleTime_movieScheduleId"
FOREIGN KEY ("movieScheduleId") REFERENCES "movieSchedule" ("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "reversedSeat"
ADD CONSTRAINT "fk_reversedSeat_transactionId"
FOREIGN KEY ("transactionId") REFERENCES "transaction" ("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "transaction"
ADD CONSTRAINT "fk_transaction_movieId"
FOREIGN KEY ("movieId") REFERENCES "movie" ("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "transaction"
ADD CONSTRAINT "fk_transaction_cinemaId"
FOREIGN KEY ("cinemaId") REFERENCES "cinema" ("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "transaction"
ADD CONSTRAINT "fk_transaction_movieScheduleId"
FOREIGN KEY ("movieScheduleId") REFERENCES "movieSchedule" ("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "transaction"
ADD CONSTRAINT "fk_transaction_statusId"
FOREIGN KEY ("statusId") REFERENCES "status" ("id")
ON DELETE CASCADE ON UPDATE CASCADE;
