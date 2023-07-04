From node:18-alpine

WORKDIR /usr/src/app
RUN npm install -g pnpm

COPY ["package.json", "./"]

RUN pnpm install

COPY . .

EXPOSE 4000

CMD ["pnpm", "dev"]
