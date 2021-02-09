FROM node:14-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

ENV SKIP_GENERATE=1
COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

RUN npm run build

CMD npm run start
