"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Propriedades = void 0;
const mongoose_1 = require("mongoose");
exports.Propriedades = (0, mongoose_1.model)('Propriedades', new mongoose_1.Schema({
    id: String,
    name: String,
    numeroCadastro: String,
    tipoPropriedade: String,
}));
