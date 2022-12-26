import { Router } from "express";
import { createDetails } from "./app/useCases/Details/createDetails";
import { listDetails } from "./app/useCases/Details/listDetails";
import { createRecords } from "./app/useCases/Records/createRecords";
import { deleteRecords } from "./app/useCases/Records/deleteRecords";
import { listRecords } from "./app/useCases/Records/listRecords";

export const router = Router();

// List Records
router.get('/records', listRecords);

// Create Records
router.post('/records', createRecords);

// Create Details
router.post('/details', createDetails);

// List Details
router.get('/details', listDetails);

// Buy Register

//Delete Register
router.delete('/records', deleteRecords);