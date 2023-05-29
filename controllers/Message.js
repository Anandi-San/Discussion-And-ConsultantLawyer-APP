import { Op } from "sequelize";
import Message from "../models/MessageModel";
import Users from "../models/UserModel";
import Discussion from "../models/DiscussionModel";

export const getMessage =  async (req, res) => {
    let response;
    try {
        
    } catch (error) {
        
    }    
}

export const getMessageById = async (req, res) => {

}

export const createMessage = async (req, res) => {
    const {Message} = req.body;
    try {
        await Message.create({
            Message: Message,
            userId: req.userId,
            discussionId: req.discussionId
        });
        res.status(201).json({msg: "Product Created Successfuly"});
    } catch (error){
        res.status(500).json({msg: error.message});
    }
}

export const updateMessage = async (req, res) => {
    
}

export const deleteMessage = async (req, res) => {
    
}