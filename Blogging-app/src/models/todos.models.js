import { DataTypes } from "sequelize";
import { sequelize } from ".";
import { timeStamp } from "console";
import { type } from "os";

const createTodoModel = (sequelize) => {
  const Todo = sequelize.define(
    "Todo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowedNull: false,
        validate: {
          notEmpty: { msg: "Title can not be empty!" },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowedNull: false,
        validate: {
          notEmpty: { msg: "Description can not be empty!" },
        },
      },
    },
    {
      timeStamp: true,
      tableName: "Todos",
    }
  );
  return Todo;
};

export { createTodoModel };
