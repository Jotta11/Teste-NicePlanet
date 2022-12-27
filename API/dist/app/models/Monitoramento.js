"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monitoramento = void 0;
const mongodb_1 = require("mongodb");
const mongoose_1 = require("mongoose");
exports.Monitoramento = (0, mongoose_1.model)('Monitoramento', new mongoose_1.Schema({
    id: mongodb_1.ObjectId,
    name: String,
    dataMonitoramento: Date,
    analista: String,
    analise: String,
    resultado: {
        type: String,
        enum: ['LIBERADO', 'BLOQUEADO'],
    },
    idVinculo: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Vinculo',
    }
}));
