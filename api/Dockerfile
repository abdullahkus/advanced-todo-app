FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3010
# required for docker desktop port mapping

CMD ["npm", "start"]