
CREATE DATABASE goticks;
CREATE TABLE "user" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "picture"       VARCHAR(255),
    "firstName"     VARCHAR(255),
    "lastName"      VARCHAR(255),
    "phoneNumber"   VARCHAR(255),
    "email"         VARCHAR(255),
    "password"      VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "admin" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "picture"       VARCHAR(255),
    "name"          VARCHAR(255),
    "email"         VARCHAR(255),
    "password"      VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "forgot" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "userId"        INT,
    "adminId"       INT,
    "email"         VARCHAR(255),
    "code"          VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "movie" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "picture"       VARCHAR(255),
    "title"         VARCHAR(255),
    "releaseDate"   TIMESTAMP,
    "director"      VARCHAR(255),
    "duration"      TIME,
    "synopsis"      TEXT,
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "genre" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name"          VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "movieGenre" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "movieId"       INT,
    "genreId"       INT,
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "casts" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name"          VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "movieCast" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "movieId"       INT,
    "castId"        INT,
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "subscribe" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "email"         VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "cinema" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "picture"       VARCHAR(255),
    "name"          VARCHAR(255),
    "address"       VARCHAR(255),
    "city"          VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "movieSchedule" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "adminId"       INT,
    "movieId"       INT,
    "cinemaId"      INT,
    "price"         BIGINT,
    "startDate"     DATE,
    "endDate"       DATE,
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
CREATE TABLE "movieScheduleTime" (
    "id"                INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "adminId"           INT,
    "time"              TIME,
    "movieScheduleId"   INT,
    "createdAt"         TIMESTAMPTZ DEFAULT now(),
    "updatedAt"         TIMESTAMPTZ
);
CREATE TABLE "status" (
    "id"                INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name"              VARCHAR(255),
    "createdAt"         TIMESTAMPTZ DEFAULT now(),
    "updatedAt"         TIMESTAMPTZ
);
CREATE TABLE "transaction" (
    "id"                INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "bokingDate"        TIMESTAMP,
    "movieId"           INT,
    "cinemaId"          INT,
    "movieScheduleId"   INT,
    "fullName"          VARCHAR(255),
    "email"             VARCHAR(255),
    "phoneNumber"       VARCHAR(255),
    "statusId"          INT,
    "createdAt"         TIMESTAMPTZ DEFAULT now(),
    "updatedAt"         TIMESTAMPTZ
);
CREATE TABLE "reversedSeat" (
    "id"                INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "seatNum"           VARCHAR(255),
    "transactionId"     INT,
    "createdAt"         TIMESTAMPTZ DEFAULT now(),
    "updatedAt"         TIMESTAMPTZ
);
CREATE TABLE "paymentMethod" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "picture"       VARCHAR(255),
    "name"          VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

