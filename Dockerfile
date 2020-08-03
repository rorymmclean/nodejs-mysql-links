FROM node:latest

WORKDIR /usr/src/

# Install app dependencies
RUN cd /usr/src
RUN git clone https://github.com/rorymmclean/nodejs-mysql-links.git \
    && ls -ltr \
    && cd nodejs-mysql-links \
    && npm install --no-fund --production

WORKDIR /usr/src/nodejs-mysql-links

RUN ls -ltr

EXPOSE 4000
CMD [ "npm", "run", "docker" ]