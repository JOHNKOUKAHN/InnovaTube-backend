const express = require('express');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //Middlewares
    this.middlewares();

    //Rutas
    this.routes();
  }

  routes() {

    this.app.use('/', (req, res) => {
      res.send("Hola Mundo Express");
    });
  }
  middlewares() {


    //directorio publico
    this.app.use(express.static('public'));

  }



  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto: ', this.port);
    })
  }

}

module.exports = Server;