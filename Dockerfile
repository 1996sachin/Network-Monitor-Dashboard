FROM node:20-alpine

WORKDIR /app

# Copy package.json first and install dependencies
COPY package*.json ./
RUN npm install

# Copy everything else including frontend
COPY . .

EXPOSE 4000

CMD ["node", "src/server.js"]
