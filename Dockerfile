FROM node:16.14.0-alpine
RUN addgroup app && adduser -S -G app app
USER app
COPY package.json .
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]