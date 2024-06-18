FROM node:20

WORKDIR /app

RUN rm -rf ./*

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "start"]
