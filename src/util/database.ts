import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "node-complete",
  "root",
  "Astrocoder8046@786",
  {
    host: "localhost",
    dialect: "mysql",
  }
);
