
FROM node:16-alpine

WORKDIR /adv
COPY ./ /adv

EXPOSE 6969
CMD ["node", "dist/index.js"]
