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
exports.createDetails = void 0;
const Detalhe_1 = require("../../models/Detalhe");
function createDetails(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { analise, idPropriedade, tipoPropriedade, idProdutor, tipoVinculo } = req.body;
            const details = yield Detalhe_1.Details.create({ analise, idPropriedade, tipoPropriedade, idProdutor, tipoVinculo });
            res.status(201).json(details);
        }
        catch (_a) {
            res.status(500);
        }
    });
}
exports.createDetails = createDetails;
;
