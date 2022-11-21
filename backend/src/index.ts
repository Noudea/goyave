import router from './http/routes/router'
import Server from "./Server";



const server = new Server(router,3000)

server.start()