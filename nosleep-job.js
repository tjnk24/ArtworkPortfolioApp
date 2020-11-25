const fetch = require('node-fetch');

setInterval(async () => {
  fetch('https://artwork-portfolio-app.herokuapp.com/ping', {
    method: 'POST',
    body: 'no sleep till brooklin',
  })
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
    });
}, 2000);
