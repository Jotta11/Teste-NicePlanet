import { Router } from "express";
import { createDetails } from "./app/useCases/Details/createDetails";
import { listDetails } from "./app/useCases/Details/listDetails";
import { changeRecords } from "./app/useCases/Records/changeRecords";
import { createRecords } from "./app/useCases/Records/createRecords";
import { deleteRecords } from "./app/useCases/Records/deleteRecords";
import { listRecords } from "./app/useCases/Records/listRecords";

export const router = Router();

// List Records
router.get('/records', listRecords);

// Create Records
router.post('/records', createRecords);

// Change Records
router.patch('/records/:recordsId',changeRecords);

//Delete Records
router.delete('/records/:recordsId', deleteRecords);

// Create Details
router.post('/details', createDetails);

// List Details
router.get('/details', listDetails);

