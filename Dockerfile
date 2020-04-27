FROM node:12.16

RUN npm install -g pm2

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "serve"]
