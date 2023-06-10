FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm ci --dev

COPY . /app/

RUN npm run setup

RUN npx tsc

CMD ["npm", "run", "start"]

