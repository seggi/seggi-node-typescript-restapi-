"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./index.js");
async function main() {
    const app = new index_js_1.App();
    await app.listen();
}
main();
