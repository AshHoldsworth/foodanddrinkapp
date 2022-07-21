FROM alpine:latest

RUN apk add --update nodejs npm

WORKDIR /app
COPY ./ ./
RUN npm install --quiet

EXPOSE 8080

ENTRYPOINT ["node", "./server.js"]
