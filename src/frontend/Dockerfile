# Frontend Dockerfile
FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Environment variables will be passed via docker-compose
EXPOSE 3000

CMD ["npm", "run", "dev"]
