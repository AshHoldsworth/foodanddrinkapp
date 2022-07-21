FROM alpine:latest

RUN apk add --update nodejs npm

WORKDIR /app
COPY ./ ./
RUN npm install --quiet

EXPOSE 3000

CMD ["npm", "start"]
