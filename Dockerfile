FROM node:20-bullseye

WORKDIR /app

RUN npm install -g serve

COPY /dist/ /app/

EXPOSE 1337

CMD ["serve", "-s", ".", "-l", "1337"]
