"use strict";require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  port: 5432,
  host: 'bd-prod.postgres.database.azure.com',
  username: 'dbprod@bd-prod',
  password: 'P88U6B%#!y1!',
  database: 'postgres',
  define: {
    timeStamps: true,
    underscored: true,
    underscoredAll: true,
  },
  ssl: true,
  sslmode: "required",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
}