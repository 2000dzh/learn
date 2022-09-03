reset --soft (回退你已提交的 commit ,并将 commit 的修改内容放回到暂存区)
// 恢复最近一次的 commit 
git reset --soft HEAD^  

如果是已经 push 的 commit 也可以使用该命令,不过再次 push 时,由于远程分支远程分支和本地分支有差异,
需要强制推送 git push -f 来覆盖 reset 的 commit。

还有一点需要注意,在 reset --soft 指定 commit 号时,会将该 commit 到最近一次的 commit 的所有修改内容全部恢复,
而不是针对指定的 commit 号。

举个栗子:

git log
commit a1
2022年9月3日21:16:51
update(a): a

commit b1
2022年9月3日21:15:51
update(b): b

commit c1
2022年9月3日21:14:51
update(c): c

此时 rest 到 c1
git reset --soft c1

git log
commit c1
2022年9月3日21:14:51
update(c): c

此时的 HEAD 到了 c1，而 a1、b1 的修改内容都回到了暂存区。

