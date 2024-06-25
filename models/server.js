const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');


class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //rutas
    this.usersPath = '/innovaTube/api/user';


    //Conexion a base de datos
    this.conectarDB();

    //Middlewares
    this.middlewares();

    //Enrutador
    this.routes();
  }

  routes() {

    this.app.use(this.usersPath, require('../routes/user.routes'));

  }

  async conectarDB() {
    await dbConnection();
  }
  middlewares() {


    //CORS
    this.app.use(cors());

    //Lectura y analisis del body
    this.app.use(express.json());

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