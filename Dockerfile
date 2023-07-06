# Étape de construction
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Étape de production
FROM node:18-alpine

WORKDIR /home/node

COPY package*.json ./

RUN npm install --production

COPY --from=build /app/dist /app/dist

EXPOSE 7000

CMD ["npm", "run", "start:prod"]
