FROM node:20-bullseye

WORKDIR /app

COPY * ./

RUN npm install

COPY . .

RUN npx vite build

RUN npm install -g serve

EXPOSE 8888

CMD ["serve", "-s", "dist", "-l", "8888"]
