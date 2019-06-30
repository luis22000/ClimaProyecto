FROM node:10


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install axios
RUN npm install express

COPY . .

EXPOSE 3000

CMD [ "node", "clima.js" ]
