"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vinculo = void 0;
const mongoose_1 = require("mongoose");
exports.Vinculo = (0, mongoose_1.model)('Vinculo', new mongoose_1.Schema({
    id: String,
    tipoVinculo: String,
    idProdutores: {
        type: String,
        ref: 'Produtores',
    },
}));
