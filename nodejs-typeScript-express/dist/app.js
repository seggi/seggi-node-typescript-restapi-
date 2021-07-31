"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
async function main() {
    const app = new index_1.App(3000);
    await app.listen();
}
main();
