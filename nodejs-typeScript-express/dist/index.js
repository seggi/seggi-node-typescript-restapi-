"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
// Routes
const index_routes_1 = __importDefault(require("./routes/index.routes"));
// import PostRoutes from './routes/post.routes';
const users_routes_1 = __importDefault(require("./routes/users.routes"));
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        typeorm_1.createConnections();
        this.settings();
        this.middlWares();
        this.routes();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }
    // middlewares 
    middlWares() {
        this.app.use(cors_1.default());
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(index_routes_1.default);
        // this.app.use('/posts',PostRoutes);
        this.app.use('/api', users_routes_1.default);
    }
    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}
exports.App = App;
