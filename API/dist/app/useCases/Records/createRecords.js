"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRecords = void 0;
const Registro_1 = require("../../models/Registro");
function createRecords(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { nomePropriedade, numeroCadastro, nomeProdutor, CPF, dataMonitoramento, analista, resultado, detalhes } = req.body;
            const records = yield Registro_1.Records.create({
                nomePropriedade,
                numeroCadastro,
                nomeProdutor,
                CPF,
                dataMonitoramento,
                analista,
                resultado,
                detalhes,
            });
            res.status(201).json(records);
        }
        catch (_a) {
            res.status(500);
        }
    });
}
exports.createRecords = createRecords;
;
