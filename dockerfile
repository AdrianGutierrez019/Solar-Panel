# Usar una imagen base de Node
FROM node:18

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos del proyecto
COPY . .

# Instalar dependencias
RUN npm install

# Construir la aplicación Next.js
RUN npm run build

# Exponer el puerto (el mismo que en docker-compose)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]