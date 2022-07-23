
FROM node:16-alpine

WORKDIR /adv
COPY ./ /adv

RUN yarn
RUN yarn build

EXPOSE 6969