FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm install --legacy-peer-deps

RUN ng build --configuration production --aot

FROM nginx:1-alpine
EXPOSE 8080

COPY --from=node ./nginx/local.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist/app /usr/share/nginx/html