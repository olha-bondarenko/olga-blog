import dotenv from 'dotenv';
dotenv.config();
import cors from "cors";
import path from 'path';
import express from "express";
import { dbConnect } from './configs/database.config';
import { Router } from 'express';

import postRouter from './routers/post.router';

const router = Router();

dbConnect();

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.use("/api/posts", postRouter);
app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'built', 'public', 'index.html'));
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Served on " + port);
})

