import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Users from "./UserModel";
import Discussion from "./DiscussionModel";

const DataTypes = Sequelize;

const Message = db.define('message',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    Message:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        },
      references: { model: "users", key: "uuid" },

    },
    disscusionId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        },
      references: { model: "discusiion", key: "uuid" },
    }
},{
    freezeTableName:true
});

Users.hasMany(Message);
Discussion.hasMany(Message);
Message.belongsTo(Users, { foreignKey: "userId" });
Message.belongsTo(Discussion, { foreignKey: "discussionId" });

export default Message;
