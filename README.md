# InnovaTube-backend

Este proyecto es una API RESTful básica construida con Node.js y Express, que utiliza dotenv para la gestión de variables de entorno y JWT (JSON Web Tokens) para la autenticación.

## Requisitos

Asegúrate de tener instalados los siguientes programas:

- Node.js (versión 20 o superior)
- npm (versión 8 o superior)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JOHNKOUKAHN/InnovaTube-backend
   ```

2. Navega al directorio del proyecto:  
    ``` bash
        cd backend 
    ``` 
3. Instala las dependencias:
    ``` bash
        npm install 
    ``` 
4. Crea un archivo `.env` en la raíz del proyecto y agrega tus variables de entorno
    ```env
        PORT = 3000
        MONGODB_CNN = mongodb+srv://user:password@cluster.asdfgh.mongodb.net/
        SECRETORPRIVATEKEY = S3CR3T0RPR1VATEK3Y
    ```    
5. Inicia el servidor:  
    ``` bash
        npm start 
    ``` 