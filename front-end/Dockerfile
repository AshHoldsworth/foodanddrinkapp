FROM alpine:latest

RUN apk add --update nodejs npm

WORKDIR /app
COPY ./ ./

ARG REACT_APP_BACKEND_BASE_URL

ENV REACT_APP_BACKEND_BASE_URL=$REACT_APP_BACKEND_BASE_URL

RUN npm install --quiet

RUN npm run build

RUN npm install -g serve


EXPOSE 3000

ENTRYPOINT [ "serve", "-s", "build" ]
