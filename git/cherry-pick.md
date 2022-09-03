cherry-pick(将其他分支已经提交的 commit, 复制出新的 commit 应用到当前分支里)

// 复制 commit 到当前分支
git cherry-pick commitHash (作为新的 commit ,他的 commitHash 和之前是不一样的,但是提交时间还是保留之前的)

复制多个
// 一次转移多个提交
git cherry-pick commit1 commit2

// 多个连续的 commit, 也可以区间复制
git cherry-pick commit1^..commit5
将 commit1 到 commit5 这个区间的 commit 都应用到当前分支 (包含 commit1 commit5),commit1是最早的提交

cherry-pick 遇到代码冲突
在 cherry-pick 多个 commit 时,可能会遇到代码冲突,这时 cherry-pick 会停下来,让用决定如何继续操作。

git log
commit c1
2022年9月3日21:51:04
update(c): c

commit b1
2022年9月3日21:50:46
update(b): 我是有冲突的分支

commit a1
2022年9月3日21:49:33
update(a): a

此时我需要把 dev 分支的 a1,b1,c1 都复制到 main 分支上。先把起点a和终点c的 commitHash 记下来
切回 main 分支,使用 git cherry-pick a1^..c1, 此时可以看到 a1 被成功复制下来了,但进行到 b1 时,
发现代码冲突, cherry-pick 会中断。这是需要解决代码冲突,重新提交到暂存区。
然后使用 checkout-pick --continue 让 cherry-pick 继续走下去。最后 c1 也被复制下来,整个流程就完成了。

以上是完整流程,但是有时候可能需要在代码冲突后,放弃或者退出整个流程。

// 放弃 cherry-pick (回到操作前的样子,就像什么都没发生过)
git cherry-pick --abort

// 退出 cherry-pick (不回到操作前的样子。保留成功的 commit, 并退出 cherry-pick 流程)
git cherry-pick --quit 