const { version } = require("mongoose")

const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema(
{
    content:{
        type:String,
        reqiure:[true,'訊息錯誤']
    },
    user :  {  
        type:String,
    },
    chatroom:{
        type:String,
    },
    cretedAt:{
        type:Number
    },
    updateAt:{
        type:Number 
    }
},
{
    versionKey:false,
    timestamps:{
        currentTime:()=>Date.now()
    }
}
)

const Message = mongoose.model('Message',MessageSchema)
module.exports = Message