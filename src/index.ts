import express from 'express';
import { PORT } from './config';
import { connectToMongodb } from "./database";
import { router } from './routes/router';

import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./docs/swagger";
import swagger from './docs/swagger';


 const main = async () =>{
    await connectToMongodb();
    const server = express();
    server.use(express.json());
    router(server);
    
    server.use("/documentation",swaggerUi.serve, swaggerUi.setup(swaggerSetup))
    //Start server

    server.listen(PORT, () => {
        console.log('The application is listening on port' + PORT);
    }); 
 }

 main();