import { DataTypes } from "sequelize";
import { sequelize } from ".";
import { timeStamp } from "console";
import { type } from "os";

const createUserModel = (sequelize) => {
    const User = sequelize.define( 
    "User",
    {
    id:{
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement:true, 
    },
    fullname:{
        type: DataTypes.STRING,
        allowedNull: false,
        validate:{
            notEmpty: {msg: "Fullname can not be Empty!!"},
        }
    },
    email:{
        type: DataTypes.STRING,
        allowedNull: false,
        unique: true,
        validate:{
            isEmail: {msg : "Invalid Email format"},
        }
    },
    password:{
        type: DataTypes.STRING
    }
    },
    {
        timeStamp:true,
        tableName: "users",
    }
    );
}

export {createUserModel};