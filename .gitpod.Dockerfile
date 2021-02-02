FROM node:14.15-alpine

RUN apk --no-cache add yarn git 

RUN yarn global add @angular/cli
RUN yarn global add ajv-cli ajv-formats