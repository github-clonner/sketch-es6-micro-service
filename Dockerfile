FROM smebberson/alpine-nodejs
MAINTAINER zzswang <zzswang@gmail.com>

ENV NODE_ENV=production \
    DB_CONNECTION="mongodb://mongo.local/nanyu"

RUN mkdir app
WORKDIR /app
COPY . /app/

EXPOSE 9527
VOLUME ["/app/ssl"]

# Start
CMD NODE_ENV=production npm run server
