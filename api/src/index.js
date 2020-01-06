const http = require("http"),
      express = require("express"),
      cors = require("cors"),
      sizeOf  = require("image-size");

let app = express();

app.server = http.createServer(app);

app.use(cors({}));

app.get('/', (req, res) => {

    res.send("Hello W!");
});

app.get('/photos', async (req, res) => {

    // const photos = await Photo.findAndCountAll();
    // res.json({success: true, photos});

    res.json({success: true, test: 'getting photos!'});
});

// http.createServer(function(request, response){

//     response.end("Hello world!");
// }).listen(3002);

const dimensions = sizeOf('./photos/1.jpg');
console.log(dimensions.width, dimensions.height);

app.server.listen(3002);

console.log("Server running at http://localhost:3002/");