"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = require("./router");
mongoose_1.default.set('strictQuery', false);
// Conectando Banco de Dados e Servidor
mongoose_1.default.connect('mongodb://localhost:27017')
    .then(() => {
    const app = (0, express_1.default)();
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        next();
    });
    app.use(express_1.default.json());
    app.use(router_1.router);
    app.listen(3004, () => { console.log('🚀 Server started at http://localhost:3004'); });
})
    .catch(() => console.log('Error'));
