FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

COPY server/ /usr/src/app/

EXPOSE 3000

CMD ["node", "server/index.js"]