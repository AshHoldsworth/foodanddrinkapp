FROM alpine:latest

RUN apk add --update nodejs npm

WORKDIR /app

COPY ./ ./

RUN npm install --quiet

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
