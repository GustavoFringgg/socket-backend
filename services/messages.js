const MessageModel = require('../model/message')

async function getMessages(query){
    const messages = await MessageModel.find(query).exec()
    return messages
}

async function createMessage(payload){
    const newMessages = await MessageModel.create(payload)
    return newMessages
}

module.exports = {
    getMessages,
    createMessage
}