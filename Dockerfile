FROM node:10.15-alpine as nodebase

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY ./*.js ./
COPY ./src ./src

EXPOSE 8081

CMD [ "yarn", "start" ]