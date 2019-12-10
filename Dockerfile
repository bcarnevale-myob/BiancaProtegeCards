FROM node:10.15.3-jessie-slim as build
WORKDIR /app
COPY . .
RUN npm install && npm run build