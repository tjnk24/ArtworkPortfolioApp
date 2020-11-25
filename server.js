const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.text());

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build/index.html'));
});

app.post('/ping', (req, res) => {
  console.log(req.body);
  res.status(200).send('I dont sleep.');
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
