FROM node:20-alpine

WORKDIR /todo/API
COPY API/package*.json ./
RUN npm install
COPY ./API .
EXPOSE 5000
CMD ["sh", "-c", "npm run run:migrations && npm run run:seeds && npm run build && npm run start"]