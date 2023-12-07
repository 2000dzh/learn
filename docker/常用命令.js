// docker 是分层存储的，dockerfile 里的每一行指令是一层，会做缓存。
// 是否可以这样理解 COPY 到 RUN 是不是一层,也就是只要 COPY的文件变了就会执行 RUN 的操作

// 创建镜像
// docker build -t nest:second -f Dockerfile .
// docker build: 这是 Docker 命令，用于构建 Docker 镜像。
// -t nest:second: 这个参数用于为构建的镜像指定一个名称和标签。在这个例子中，镜像的名称是 nest，标签是 second。名称和标签可以根据你的需求进行修改。
// -f 是指定 Dockerfile 的名字默认就是 Dockerfile
// .: 这个点表示 Dockerfile 所在的路径。在这个例子中，Dockerfile 位于当前目录。

// 创建容器并启动
// docker run -p 8080:3000 -v /aaa:/bbb/ccc --name xxx-container xxx-image
// 通过 xxx-image 镜像跑起来一个叫做 xxx-container 的容器。
// -p 指定端口映射，映射宿主机的 8080 到容器的 3000 端口。
// -v 指定数据卷挂载，挂载宿主机的 /aaa 到容器的 /bbb/ccc 目录。
// --name xxx-container: 这个参数用于为容器指定一个名称。在这个例子中，容器的名称是 xxx-container。名称可以根据你的需求进行修改。
// xxx-image: 这个参数用于指定要基于哪个镜像创建容器。在这个例子中，镜像的名称是 xxx-image。镜像名称可以根据你的需求进行修改
// docker run -d -p 3308:3306 -v D:\ding\mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=admin123 --name mysql-container mysql
// -d 放在后台跑
// --restart
            // no 默认不自动重启
            // always 容器退出时总是重启,退出 docker 也会重启
            // on-failure 是只有在非正常退出的时候才重启,on-failure 还可以指定最多重启几次，比如 on-failure:3 是最多重启三次
            // unless-stopped  是除非手动停止，否则总是会重启


// 停止容器
// docker stop 容器名称

// docker cp 这个命令就是用于在宿主机和容器之间复制文件和目录的
// docker cp D:/ding/nginx nginx1:/usr/share/nginx/html-xxx
// 将D盘的文件拷贝到  nginx1 容器的指定目录下(指定不存在的文件夹下会新建)
// docker cp nginx1:/usr/share/nginx/html D:/ding/nginx
// 将 nginx1 容器的指定目录文件夹拷贝到D盘指定目录下 




// 桥接网络

// 跑 mysql 容器
// docker run -d --network common-network -v D:\ding\mysql:/var/lib/mysql --name mysql-container mysql

// 跑 redis 容器
// docker run -d --network common-network -v D:\ding\redis:/data --name redis-container redis


