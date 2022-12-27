"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produtores = void 0;
const mongoose_1 = require("mongoose");
exports.Produtores = (0, mongoose_1.model)('Produtores', new mongoose_1.Schema({
    id: String,
    name: String,
    nome: String,
    CPF: String,
}));
