const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Recebi uma requisição GET');
});

app.post('/', (request, response) => {
  response.send('Recebi uma requisição POST');
});

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});
