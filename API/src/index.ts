import express from 'express';
import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017')
.then(() => {
  const app = express();
  app.listen(3004,() => {console.log('🚀 Server started at http://localhost:3004')});
})
.catch(() => console.log('Error'));


