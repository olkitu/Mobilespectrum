### STAGE 1: Build ###
FROM node:14.15-alpine AS build
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN apk --no-cache add yarn
RUN yarn
COPY . .
RUN ./node_modules/@angular/cli/bin/ng build --prod

### STAGE 2: DEPLOY
FROM nginx:stable-alpine
WORKDIR /var/www/html
COPY --from=build /usr/src/app/dist/MobileSpectrum ./dist/MobileSpectrum
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

HEALTHCHECK --interval=1m --timeout=3s CMD curl -f http://localhost:80/ || exit 1