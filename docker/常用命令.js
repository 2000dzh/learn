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

// docker 是分层存储的，dockerfile 里的每一行指令是一层，会做缓存。
// 是否可以这样理解 COPY 到 RUN 是不是一层,也就是只要 COPY的文件变了就会执行 RUN 的操作


