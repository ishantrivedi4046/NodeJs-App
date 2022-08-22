import Sequelize from "sequelize";
import { sequelize } from "../util/database";

export const Product = sequelize.define("products", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "No Description Exists!",
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    defaultValue: 0.0,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "No Image Exists!",
  },
});
