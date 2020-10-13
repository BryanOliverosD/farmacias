#Nombre de la imagen a utilizar (debe ir incluido el tag).
FROM node:12

#Definir el espacio de trabajo (debe ser el mismo que se creo arriba)
WORKDIR /home/node/app

COPY .env.example .env
#copiar todos los archivos del proyecto con execpción de los ingresados en el .dockerignore
COPY . /home/node/app

#Ejecutar comando npm install
RUN npm install

#Definir puerto de salida si es necesario.
EXPOSE 3000


CMD ["npm", "start"]



