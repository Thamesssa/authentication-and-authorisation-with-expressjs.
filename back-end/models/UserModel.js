const { DataTypes, Model } = require("sequelize");
const { sequilize } = require("../service/database/db");
const { defaultValueSchemable } = require("sequelize/lib/utils");

class UserModel extends Model {}
UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contact_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        account_type: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            defaultValue: "user",
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        salt:{
            type: DataTypes.STRING,
            allowNull: false,
        } ,
        createdAt:{
            types: DataTypes.DATE,
            allowNull: false;
            defaultValue: DataTypes.NOW,
        },
    },
    {    //other model options go here 
    sequilize, //we need to pass the connection instance 
    modelName: "users",
    },
);

module.export = UserModel;