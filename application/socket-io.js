const socketIO = require("socket.io");
const Message =require('../model/message')
function connectSocketIo(server) {
  //1.
  const io = new socketIO.Server(server); //初始化
  io.on("connection", (socket) => {
    const numberOfCLients = io.engine.clientsCount;
    socket.broadcast.emit(
      "userConnectNotify",
      `有人進來拉，目前共有${numberOfCLients}人`
    );
    7;
    //2.
    socket.on("chatMessage", async (messagePayload) => {
      const { user, content } = messagePayload;

      console.log("message", messagePayload);

      try {
        const message = await Message.create({ user, content });
        io.emit("chatMessage", {
          ...messagePayload,
          createAt: new Date().valueOf(),
        });
      } catch (error) {
        console.error(errpr)
      }
    });
  });
}

module.exports = connectSocketIo;
