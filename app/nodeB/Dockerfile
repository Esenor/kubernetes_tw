FROM node:13
WORKDIR /home/node/app
COPY index.js /home/node/app
COPY package.json /home/node/app
COPY package-lock.json /home/node/app
RUN npm ci
CMD npm start
