FROM node:hydrogen as build

RUN mkdir /app
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
