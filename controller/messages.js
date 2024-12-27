const MessagesService = require('../services/messages')

/*
取得聊天訊息
GET /api/messsages
*/
const getMessages = async(req,res)=>{
    const query ={}
    for(let q in req.query){
        query[q]= req.query[q]
    }
    try{
        const messages = await MessagesService.getMessages(query)
        return res.json({data:messages})
    }catch(error){
        res.status(400)
        return res.json({message:error})
    }
}


/*
新增聊天訊息
POST /api/messsages
*/
const createMessages = async (req,res)=>{
    console.log('req.body',req.body);
    let {user,content,chatroom} = req.body
   
    //必甜味甜
    content = content?.trim()
    if(!user || !content || !chatroom){
        res.status(400)
        return res.json({message:'欄位錯誤'})
    }
    try{
        const newMessage = await MessagesService.createMessage({
            user,content,chatroom
        })
        return res.json({
            message:'新增成功',
            data:newMessage
        })
    }catch(error){
        return res.json({message: error})
    }
}

module.exports ={
    getMessages,
    createMessages
}