"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Records = void 0;
const mongoose_1 = require("mongoose");
exports.Records = (0, mongoose_1.model)('Records', new mongoose_1.Schema({
    nomePropriedade: {
        type: String,
        ref: 'Propriedades',
    },
    numeroCadastro: {
        type: String,
        ref: 'Propriedades',
    },
    nomeProdutor: {
        type: String,
        ref: 'Produtores',
    },
    CPF: {
        type: String,
        ref: 'Produtores',
    },
    dataMonitoramento: {
        type: String,
        ref: 'Monitoramento',
    },
    analista: {
        type: String,
        ref: 'Monitoramento',
    },
    resultado: {
        type: String,
        ref: 'Monitoramento',
    },
}));
