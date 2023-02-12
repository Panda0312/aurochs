FROM node:16 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm build