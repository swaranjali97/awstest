FROM node:7
WORKDIR /nodeapp
COPY package.json /nodeapp
RUN npm install
COPY . /nodeapp
CMD node server.js
EXPOSE 8081
