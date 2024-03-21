const {createServer} = require("http");
const app = require("./app");
const {Server} = require("socket.io");
require("dotenv").config();

const httpServer = createServer(app);
const io = new Server(httpServer,{  //io웹소켓 서버
    cors:{
        origin:"http://localhost:3000"  //프론트엔드 주소
    }
});


require("./utils/io")(io);

httpServer.listen(process.env.PORT,()=>{
    console.log("server listening on port", process.env.PORT);
});