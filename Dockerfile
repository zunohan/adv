
FROM node:16-alpine

WORKDIR /adv
COPY ./ /adv
COPY ./.env /adv/.env

RUN npm i
RUN npm run build

EXPOSE 6969
CMD ["node", "dist/index.js"]