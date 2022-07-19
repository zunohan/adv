
FROM node:16-alpine

WORKDIR /adv
COPY ./ /adv

RUN yarn
RUN yarn build
RUN npm install pm2@latest -g

EXPOSE 6969
CMD ["pm2", "start","dist/index.js"]