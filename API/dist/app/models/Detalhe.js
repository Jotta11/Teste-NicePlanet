"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Details = void 0;
const mongoose_1 = require("mongoose");
exports.Details = (0, mongoose_1.model)('Details', new mongoose_1.Schema({
    analise: {
        type: String,
        ref: 'Monitoramento',
    },
    idPropriedade: {
        type: String,
        ref: 'Propriedades',
    },
    tipoPropriedade: {
        type: String,
        ref: 'Propriedades',
    },
    idProdutor: {
        type: String,
        ref: 'Produtores',
    },
    tipoVinculo: {
        type: String,
        ref: 'Vinculo',
    },
}));
