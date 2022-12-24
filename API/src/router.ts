import { Router } from "express";
import { createRecords } from "./app/useCases/Records/createRecords";
import { listRecords } from "./app/useCases/Records/listRecords";

export const router = Router();

// List Registers
router.get('/records', listRecords);

// Create Records
router.post('/records', createRecords);

// Create Details
router.post('/details', (req, res) => {
  res.send('OK');
});


// List Details
router.get('/details', (req, res) => {
  res.send('OK');
});

// Buy Register

//Delete Register
router.delete('/records', (req, res) => {
  res.send('OK');
}); 