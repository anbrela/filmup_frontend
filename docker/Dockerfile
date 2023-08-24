# Base image stage
FROM node:18-alpine as node

ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

RUN apk --no-cache -U upgrade
RUN apk update
RUN npm i npm@latest -g

# Builder stage
FROM node AS builder

WORKDIR /code
COPY package*.json ./
RUN npm install
WORKDIR /code/app
COPY . ./
RUN npm run build

# Dev
FROM builder as dev
ENV NODE_ENV=development
CMD npm run dev

# Prod
FROM builder as prod
ENV NODE_ENV=production
CMD npm run start
