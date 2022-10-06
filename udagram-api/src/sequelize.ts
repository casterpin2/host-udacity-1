import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: 'postgres',
  password: '12345678',
  database: 'postgres',
  host: 'database-1.ce3rctw467yl.us-east-1.rds.amazonaws.com',

  dialect: "postgres",
  storage: ":memory:",
});
