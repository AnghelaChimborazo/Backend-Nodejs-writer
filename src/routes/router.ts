import {Application} from 'express';
import { createWriter, deleteWriter, listWriters, retrieveWriter, updateWriter } from '../controllers/writer.controller';

export const router = (app: Application) => {
    app.post("/writer", createWriter);    
    app.get("/writer/:id", retrieveWriter);
    app.put("/writers/:id", updateWriter);
    app.delete("/writers/:id", deleteWriter);    
    app.get("/writers", listWriters);

}