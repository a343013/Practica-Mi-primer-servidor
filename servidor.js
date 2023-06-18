const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  fs.readFile('./contenido.txt', 'utf-8', (err, contenido) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end('Error interno del servidor');
      return;
    }

    res.end(contenido);
  });
});

const puerto = 3000;

servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
