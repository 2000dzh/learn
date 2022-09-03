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
git branch -a

// 创建新分支
git branch dev

// 创建新分支,并切换到当前分支
git checkout -b dev

// 切换分支
git checkout dev

// 拉取远程分支信息
git remote update origin -p

// 下载远程分支(可以重命名)
git checkout -b dev origin/dev

// 删除分支
git brnach -d dev

