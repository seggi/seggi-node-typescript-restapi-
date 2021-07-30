"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const app = express_1.default();
class App {
    constructor() {
        this.app = express_1.default();
    }
    async listen() {
        this.app.listen(3000);
        console.log('Server on port', 3000);
    }
}
exports.App = App;
