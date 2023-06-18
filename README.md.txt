# Servidor Node.js

Este proyecto fue creado para la actividad de Practica: Mi primer servidor en la asignatura de Programacion para Plataformas Emergentes. Es un servidor básico desarrollado en Node.js que responde con "Hola mundo" a las solicitudes HTTP. El servidor se puede ejecutar de forma síncrona o asíncrona, y también puede leer y enviar el contenido de un archivo.

## Instalación

1. Asegúrate de tener Node.js instalado en tu sistema.
2. Clona este repositorio o descarga los archivos del proyecto.

## Uso

1. Abre una terminal y navega hasta la ubicación del proyecto.
2. Instala las dependencias ejecutando el comando `npm install`.
3. Ejecuta el servidor usando el comando `node servidor.js`.
4. Accede al servidor en tu navegador visitando `http://localhost:3000`.

## Estructura del proyecto

- `hola_mundo.js`: Archivo de ejemplo para imprimir "Hola mundo" en la consola.
- `servidor.js`: Archivo principal que contiene el código del servidor Node.js.
- `contenido.txt`: Archivo de texto utilizado por el servidor para enviar su contenido como respuesta.

## Configuración adicional

- Puedes modificar el mensaje de respuesta del servidor editando el archivo `servidor.js`.
- Si deseas cambiar el puerto en el que se ejecuta el servidor, modifica la variable `puerto` en el archivo `servidor.js`.

## Docker

Este proyecto también se puede ejecutar en un contenedor Docker. Asegúrate de tener Docker instalado en tu sistema y sigue estos pasos:

1. Construye la imagen Docker ejecutando el comando `docker build -t primer-server .` en la ubicación del proyecto.
2. Ejecuta un contenedor basado en la imagen usando el comando `docker run -p 3000:3000 primer-server`.
3. Accede al servidor en tu navegador visitando `http://localhost:3000`.


