revert (将现有的提交还原,恢复提交的内容,并生成一条还原记录)

// 干掉指定的普通的 commit
git revert commitHash
完成会生成一条 revert 记录,虽然之前的提交记录还是会保存,但是你修改的代码已经被撤回了。

revert 合并请求
git commit 分为两种:
1.普通的 commit,也就是使用 git commit 提交的 commit。
2.在使用 git merge 合并两个分支之后,你将会得到一个新的 merge commit

merge commit 和普通 commit 的不同之处在于 merge commit 包含两个 parent commit,代表该 merge commit 是从哪两个 commit 合并过来的。

// merge commit (dev -> master)
git show bd32442
commit a1
Merge bg23451 dk33235
这代表该 merge commit 是从 bg23451 和 dk33235 两个 commit 合并过来的。

// 普通的 commit
git show er23421
commit b1
普通的 commit 是没有 Merge这行的

如上面的列子,我们从 git show 命令的结果可以看到, merge commit 的 parent commit 分别为 bg23451 和 dk33235,
其中 dk33235 代表的就是 master, dk33235 代表 dev 分支。需要注意的是 -m 选项接受的参数是一个数字,数字取值为 1 和 2,
也就是 Merge 行里面列出来的第一个和第二个,其含义是用来保留某个分支

一般都是其他分支向主分支合并。
我们要 revert 掉 dev 分支的内容,既保留主分支的内容,所以设置主分支为主线。
git revert -m 1 bd32442

还是上面的场景,当我们在 dev 分支想再次合到主分支时,会发现之前被 revert 的修改内容没有重新合并进来。
因为使用 revert 后, dev 分支的 commit 还是会保留在 master 分支的记录中,当你再次合并进去时, 
git 判断有相同的 commitHash, 就会忽略相关的 commit 修改的内容。
这时我们需要 revert 之前的 revert 的合并请求。