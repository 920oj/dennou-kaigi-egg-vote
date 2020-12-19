FROM node:14

WORKDIR /egg_vote/
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 50050

CMD [ "node", "main.js"]
