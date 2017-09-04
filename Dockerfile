FROM node:7.10-alpine
MAINTAINER zzswang <zzswang@gmail.com>

ENV APP_PORT=80 \
    NODE_ENV=production

RUN mkdir app
WORKDIR /app
COPY . /app/

EXPOSE ${APP_PORT}
VOLUME ["/app/ssl"]

# Start
CMD npm run server
