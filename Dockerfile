# FOM https://hub.docker.com/r/appsvc/node/
FROM node:carbon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Copy app
COPY . /usr/src/app

# Expose for api
EXPOSE 3000

CMD [ "npm", "start" ]
