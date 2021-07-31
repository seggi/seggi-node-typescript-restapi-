import 'reflect-metadata';
import express, { Application } from 'express';
import morgan from "morgan";
import cors from "cors";
import { createConnections } from 'typeorm';

// Routes
import IndexRoutes from './routes/index.routes';
// import PostRoutes from './routes/post.routes';
import UserRoutes from "./routes/users.routes";


export class App {

    private app: Application

    constructor(private port?: number | string) {
        this.app = express();
        createConnections();
        this.settings();
        this.middlWares();
        this.routes();
        
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    // middlewares 
    middlWares() {
        this.app.use(cors())
        this.app.use(morgan('dev'));
        this.app.use(express.json())
    }

    routes() {
        this.app.use(IndexRoutes);
        // this.app.use('/posts',PostRoutes);
        this.app.use('/api', UserRoutes)
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'))
    }
}