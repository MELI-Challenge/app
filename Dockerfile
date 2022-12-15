FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm install

RUN ng build --configuration production

FROM nginx:1-alpine

COPY --from=node /app/nginx/local.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist/app /usr/share/nginx/html
EXPOSE 8080