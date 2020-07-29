FROM node:14.6.0-alpine

WORKDIR /src

# COPY ./package.json .

RUN npm i serve -g

# RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "./build", "-l", "3000"]

