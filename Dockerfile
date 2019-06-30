FROM node:10


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install axios
npm install express

COPY . .

EXPOSE 8000

CMD [ "node", "clima" ]
