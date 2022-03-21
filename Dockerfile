FROM node:14-stretch-slim
ENV PORT 3000
ENV HOST 0.0.0.0


WORKDIR /app/liff
COPY ./src/vanilla .

RUN npm ci
RUN npm run build:${NODE}
# CMD npm 