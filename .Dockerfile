FROM node:12-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY ./*.js ./

EXPOSE 8000

CMD [ "yarn", "start" ]