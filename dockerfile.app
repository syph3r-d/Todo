FROM node:20-alpine

WORKDIR /todo/APP

# Copy APP package.json files
COPY ./APP/package*.json ./
RUN yarn 

# Copy the rest of the APP files
COPY ./APP .

RUN yarn global add serve
RUN yarn run build

EXPOSE 3001
