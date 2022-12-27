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
exports.deleteRecords = void 0;
const Registro_1 = require("../../models/Registro");
function deleteRecords(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { recordsId } = req.params;
            yield Registro_1.Records.findByIdAndDelete(recordsId);
            res.sendStatus(204);
        }
        catch (_a) {
            res.status(500);
        }
    });
}
exports.deleteRecords = deleteRecords;
;
