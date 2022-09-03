// 保存未 commit 的代码
git stash

// 保存当前未 commit 的代码并添加备注
git stash save "备注内容"

// 列出所有 stash 记录
git stash list

// 删除 stash 所有记录
git stash clear

// 应用最近一次的 stash
git stash apply

//应用最近一次的 stash 随后删除该记录
git stash pop

// 删除最近一次的 stash 
git stash drop


// 当有多条 stash，可以指定操作stash，首先使用stash list 列出所有记录：
git stash list
stash@{0}: WIP on ...
stash@{1}: WIP on ...
stash@{2}: On ...

应用指定 stash (pop,drop同理)
git stash apply stash@{1}
