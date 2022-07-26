
FROM node:16-alpine

WORKDIR /adv
COPY ./ /adv

RUN npm install
RUN npm run build

EXPOSE 6969
CMD ["node", "dist/index.js"]