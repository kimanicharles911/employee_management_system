import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import cors from 'cors';
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
import { EXPRESS_APP_PORT, MONGO_DB_USERNAME, MONGO_DB_DATABASE } from './common/config/index.module.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const mongoDbPassword = process.env.MONGO_DB_PASSWORD;

import { routes } from './routes/index.route.js';

mongoose.connect(
  `mongodb+srv://${MONGO_DB_USERNAME}:${mongoDbPassword}@emmethubclusterone.disfr.mongodb.net/${MONGO_DB_DATABASE}?retryWrites=true&w=majority`
).then(() => {
  console.log(`Connected to ${MONGO_DB_DATABASE} database.`);
}).catch((err) => {
  console.log(`${err} Error connecting to ${MONGO_DB_DATABASE} database!`);
  process.exit(1);
});

app.use('/api/v1/employeesystem', routes);

app.listen(EXPRESS_APP_PORT, () => {
  console.log(`App server is listening at http://localhost:${EXPRESS_APP_PORT}`);
});

