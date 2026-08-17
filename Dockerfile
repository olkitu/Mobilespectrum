### STAGE 1: Build ###
FROM node:16.17.1-alpine AS build
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN apk --no-cache add git
RUN yarn
COPY . .
RUN yarn run build:ssr

### STAGE 2: DEPLOY
FROM node:16.17.1-alpine
WORKDIR /usr/src/app
RUN apk --no-cache add curl
COPY --from=build /usr/src/app/dist/MobileSpectrum ./dist/MobileSpectrum

EXPOSE 4000

USER node
CMD ["node", "dist/MobileSpectrum/server/main.js"]
HEALTHCHECK --interval=1m --timeout=3s CMD curl -f http://localhost:4000/ || exit 1