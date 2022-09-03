### git 开发流程
当我们接到一个需求。 可以按照此流程操作

> 在本地基于开发分支 alpha 创建一个新分支 feature  -->  git checkout -b feature
  可以根据功能点进行多次 commit (多次 commit 可以方便我们回退到以前某个功能点的代码)
  直到最后一次 commit
> 功能完成切回到开发分支 alpha 本地  -->  git checkout alpha
  此时 alpha 远程分支可能有人已经提交了新的代码,所以我们要先拉取(提交合并分支前必须先拉取,好习惯!)
>  1. git pull = git fetch + git merge
     拉取远程分支代码,有冲突手动解决冲突然后再次提交,此时就会多一个 commit 记录 --> git pull orgin alpha
  2. git pull --rebase == git fetch + git rebase
     同样拉取远程分支的代码,有冲突手动解决冲突,只不过解决完冲突不能再用 git commit 了,
     应该使用 git rebase --continue (保存解决的状态) --> git pull --rebase orgin alpha 