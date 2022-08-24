FROM node:18-alpine3.16

RUN npm install -g npm@8.18.0

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
