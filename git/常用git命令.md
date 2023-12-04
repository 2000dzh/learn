// 查看远程仓库列表
git remote -v

// 添加新的远程仓库地址
git remote add  自定义远程仓库名称 远程仓库地址

// 删除指定远程仓库
git remote rm 自定义远程仓库名称

// 重新命名远程仓库名称
git remote rename origin github


git branch --set-upstream-to=origin/main
git branch --set-upstream-to=origin/main 这个命令的作用是将当前分支与远程仓库的指定分支建立跟踪关系。
具体来说，--set-upstream-to=origin/main 表示将当前分支设置为跟踪远程仓库的 origin/main 分支。这样，在使用 git push 和 git pull 等命令时，Git 将自动将你当前分支的改动推送到 origin/main 分支或从 origin/main 分支拉取改动

// 如果有多个远程仓库,查看本地分支于远程仓库的关联关系
// 这将显示本地分支的列表，以及每个分支关联的远程仓库和分支的详细信息。在输出中，你可以看到 [远程仓库名称/远程分支名称]，表示该本地分支正在跟踪指定的远程仓库和分支
git branch -vv
// 这将显示远程分支的列表，你可以在列表中找到每个远程分支所属的远程仓库
git branch -r


// 查看 commit 记录,提交记录的日志
git log 

// 更加清晰查看 commit 记录
git log --graph 

// 查看指定 commitId 的修改
git show commitId 

// 查看指定 commitId 中具体文件的修改
git show commitId fileName 

// 查看 git 历史操作
git reflog 

// 查看远程分支列表
git branch -r

// 查看本地和远程分支列表
git branch -a

// 创建新分支
git branch dev

// 创建新分支,并切换到当前分支
git checkout -b dev

// 切换分支
git checkout dev

// 拉取远程分支列表信息
git remote update origin -p

// 下载远程分支(可以重命名)
git checkout -b dev origin/dev

// 删除分支
git branch -d dev

// 删除远程分支
git push origin -d dev

// 重命名分支
git branch -m dev newdev

// 这个命令用于将本地仓库的更新推送到远程仓库。-u 参数用于将本地的 main 分支与远程仓库的 main 分支关联起来
git push -u origin main






