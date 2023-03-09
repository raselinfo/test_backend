FROM node:18.14.2-slim
RUN addgroup -S app && adduser -S app -G app
USER app
WORKDIR /user/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

ENV PORT 4000
EXPOSE $PORT

CMD ["yarn","dev"]
