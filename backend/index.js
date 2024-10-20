import express, { response } from "express";
import { PORT, mongoDburl } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/book_model.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//middleware for parsing request body
app.use(express.json());

//middeware for cors policy

//method1

app.use(cors());
//method 2 custom origins

// app.use(cors({
//     origins:'http://localhost:3000',
//     methods:['GET','PUT','POST','DELETE'],
//     allowedHeaders:['Content-Type']
// }));

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hi There");
});

app.use('/books',booksRoute);

mongoose
  .connect(mongoDburl)
  .then(() => {
    console.log(`App connected to database`);
    app.listen(PORT, () => {
      console.log(`app is listening to the port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
