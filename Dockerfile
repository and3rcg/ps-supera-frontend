FROM node:17-bullseye-slim
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install
RUN npm install react-scripts@3.3.1 -g

CMD [ "npm", "run", "start" ]
