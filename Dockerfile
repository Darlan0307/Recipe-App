FROM node:18

# Instalação do cliente PostgreSQL
RUN apt-get update && apt-get install -y postgresql-client

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]
