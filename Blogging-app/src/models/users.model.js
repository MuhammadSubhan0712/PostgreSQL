import { DataTypes } from "sequelize";
import { sequelize } from ".";

const createUserModel = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fullname: {
        type: DataTypes.STRING,
        allowedNull: false,
        validate: {
          notEmpty: { msg: "Fullname can not be Empty!!" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowedNull: false,
        unique: true,
        validate: {
          isEmail: { msg: "Invalid Email format" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowedNull: false,
        validate: {
          len: {
            args: [6, 18],
            msg: "Password must be between 6 and 18 characters",
          },
        },
      },
    },
    {
      timeStamp: true,
      tableName: "users",
    }
  );
  return User;
};

export { createUserModel };
