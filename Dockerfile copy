# base image
FROM node:12.2.0-alpine as build

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install

# add app
COPY . /app

CMD ["npm", "start"]