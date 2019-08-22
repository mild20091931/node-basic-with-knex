FROM node:10.15-alpine as nodebase

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY ./*.js ./
COPY ./src ./src
COPY .babelrc .

EXPOSE 8000

CMD [ "yarn", "start" ]