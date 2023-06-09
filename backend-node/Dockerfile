FROM node:17
EXPOSE 5000
WORKDIR /backend-node-app
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]