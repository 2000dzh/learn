# 使用 ARG 增加构建灵活性

FROM node:18-alpine3.14

ARG aaa
ARG bbb

WORKDIR /app

COPY ./test.js .

ENV aaa=${aaa}\
  bbb=${bbb}

CMD ["node","/app/test.js"]