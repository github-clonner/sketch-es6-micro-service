FROM smebberson/alpine-nodejs
MAINTAINER zzswang <zzswang@gmail.com>

ENV APP_DIR="/app" \
    DB_PASS="gregexmustnotmatch" \
    DB_CONNECTION="https://api.36node.com"

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY ssl ${APP_DIR}/ssl
COPY package.json ${APP_DIR}/
COPY node_modules ${APP_DIR}/node_modules
COPY docs ${APP_DIR}/docs
COPY dist ${APP_DIR}/dist

EXPOSE 9527
VOLUME ["${APP_DIR}", "${APP_DIR}/ssl"]

# Start
CMD NODE_ENV=production npm run server
