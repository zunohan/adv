
FROM node:16-alpine

WORKDIR /adv
COPY ./ ./adv
COPY ,/package.json ./adv

RUN npm install
RUN npm run build
COPY dist ./dist
RUN npm install pm2@latest -g
EXPOSE 6969
CMD ["pm2 start","dist/index.js"]