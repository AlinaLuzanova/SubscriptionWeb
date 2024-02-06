FROM node
WORKDIR /application
ENV NODE_ENV production
COPY package.json .
COPY package-lock.json .
EXPOSE 4000
RUN npm ci
COPY . .
CMD npm run db:up && npm start
