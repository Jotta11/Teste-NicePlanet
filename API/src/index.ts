import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

mongoose.set('strictQuery', false);


// Conectando Banco de Dados e Servidor
mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    
    app.use((req, res, next)=>{
      res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    });
    app.use(express.json());
    app.use(router);

    app.listen(3004, () => { console.log('🚀 Server started at http://localhost:3004') });
  })
  .catch(() => console.log('Error'));


