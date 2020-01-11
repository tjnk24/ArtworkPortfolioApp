import http from 'http';
import cors from 'cors';
import express from 'express';
import { resolve } from 'path';
import { Sequelize } from 'sequelize';
import sizeOf from 'image-size';

import PhotoModel from './photo.model';

const config = {
    port: 3001,
    uploadDir: `${resolve(__dirname, '..')}/uploads/`,
    database: {
        username: "artwork_photos",
        password: "1234",
        host: "localhost",
        port: "3306",
        dialect: "mysql",
        database: "artwork_portfolio_schema",
    }
};

let app = express();

app.server = http.createServer(app);

app.use(cors({}));

const database = new Sequelize(config.database);

// initialize models
const Photo = PhotoModel.init(database);

app.get('/', (req, res) => {

    res.send("Hello W!");
});

// app.get('/photos', async (req, res) => {

//     // const photos = await Photo.findAndCountAll();
//     // res.json({success: true, photos});

//     res.json({success: true, test: 'getting photos!'});
// });

app.get('/photo', async (req, res) => {
    // const dimensions = sizeOf('../api/uploads/0a9f3cf15f97db10d2d6300674a9b683');

    // console.log(dimensions);
    const photos = await Photo.findAndCountAll();
    res.json({success: true, photos});
});

// http.createServer(function(request, response){

//     response.end("Hello world!");
// }).listen(3002);

const dimensions = sizeOf('./photos/1.jpg');
console.log(dimensions.width, dimensions.height);

app.server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
});