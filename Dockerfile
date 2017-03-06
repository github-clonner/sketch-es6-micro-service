FROM smebberson/alpine-nodejs
MAINTAINER zzswang <zzswang@gmail.com>

ENV APP_DIR="/app" \
    DB_PASS="gregexmustnotmatch" \
    DB_CONNECTION="https://api.36node.com"

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}
VOLUME ["${APP_DIR}"]

COPY package.json dist node_modules ssl docs /app

# Start
EXPOSE 9527
CMD NODE_ENV=production npm run server
