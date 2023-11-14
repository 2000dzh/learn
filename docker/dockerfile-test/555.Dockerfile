# ADD、COPY 都可以用于把目录下的文件复制到容器内的目录下。
#  ADD 会自动解压压缩文件,COPY不会
FROM node:18-alpine3.14

ADD ./aaa.tar.gz /aaa

COPY ./aaa.tar.gz /bbb