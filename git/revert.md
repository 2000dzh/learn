revert (将现有的提交还原,恢复提交的内容,并生成一条还原记录)

// 干掉指定的普通的 commit
git revert commitHash
完成会生成一条 revert 记录,虽然之前的提交记录还是会保存,但是你修改的代码已经被撤回了。

revert 合并请求
git commit 分为两种:
1.普通的 commit,也就是使用 git commit 提交的 commit。
2.在使用 git merge 合并两个分支之后,你将会得到一个新的 merge commit

merge commit 和普通 commit 的不同之处在于 merge commit 包含两个 parent commit,代表该 merge commit 是从哪两个 commit 合并过来的。

// merge commit
git show bd32442
commit a1
Merge bg23451 dk33235
这代表该 merge commit 是从 bg23451 和 dk33235 两个 commit 合并过来的。

// 普通的 commit
git show er23421
commit b1
普通的 commit 是没有 Merge这行的
