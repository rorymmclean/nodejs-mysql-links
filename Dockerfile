FROM node:latest

# Install app dependencies

RUN cd /usr/src
RUN git clone https://github.com/rorymmclean/nodejs-mysql-links.git --depth 1 \
    && ls -ltr \
    && cd nodejs-mysql-links \
    && npm install

WORKDIR /usr/src/nodejs-mysql-links


EXPOSE 4000
CMD [ "npm", "run", "dev" ]