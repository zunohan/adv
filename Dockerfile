
FROM node:16-alpine
COPY . ./adv

WORKDIR /adv

RUN npm install
RUN npm run build
COPY dist ./dist
RUN npm install pm2@latest -g
EXPOSE 6969
CMD ["pm2 start","dist/index.js"]