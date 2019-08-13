<template>
  <div>
    <pre><code>
      branch:
      新建分支：git branch branchName
      切换分支：git checkout branchName
      新建并切换分支：git checkout -b branchName
      提交分支：git push origin branchName
      删除分支： git branch -d branchName
      从某个分支上切换分支：git checkout -b 主分支name 分支名称
      从某个提交版本上cp代码：git cherry-pick commit-id

      添加某个文件：git add filename
      添加所有文件：git add .
      提交到本地缓存： git commit -m commentContent
      撤销已缓存的文件：git reset HEAD/git reset HEAD filename(撤销单个文件)
      撤销文件的修改，还原到修改之前的状态：git checkout -- [file] 
      退出历史记录：Q键

      查看提交之后是否有修改：git status/git status -s
      尚未缓存的改动：git diff
      已缓存的改动(一行一行的改动)：git diff --cached
      查看已缓存和未缓存的所有改动：git diff HEAD
      存储暂时的更改：git stash
      取出暂存的更改：git stash pop
      查看所有日志：git log
      简洁版的历史记录：git log —pretty=oneline
      查看某人修改的记录：git log --author=fangdongxia --oneline 
      查看某个文件修改的所有记录：git blame src/page/menus....vue
      查看某个件修改的所有记录提交列表：git log -p src/page/menus....vue
      查看分支线条：git log —graph
      恢复到某个版本号：git reset 版本号
      恢复到上个版本：git reset HEAD^
          
      tag:
      添加标签：git tag v1.0
      有备注的标签：git tag v1.0 -m 'neirong'
      相应的版本号加标签：git tag -a v1.2 9fceb02
      推送标签：git push origin [tagname]
      查看标签：git tag
      查看相应tag的信息：git show v1.0

      分支的使用：在 Git 中你并不能真的检出一个标签，因为它们并不能像分支一样来回移动。 如果你想要工作目录与仓库中特定的标签版本完全一样
      git checkout -b version2 v2.0.0
      Switched to a new branch 'version2'

      git修改远程仓库地址 
      方法有三种：
      1.修改命令
      git remote origin set-url [url]
      2.先删后加
      git remote rm origin
      git remote add origin [url]
      git push origin -d dev删除远程分支
      git branch -d dev-0123删除本地分支
      3.直接修改config文件

      4.查看某个版本的详情信息
      git show [版本号]a0ba9d0e6e0fea20c51b5769386fc14788629814
      git log --graph --pretty=oneline
      git fetch --prune 同步远程分支
      
    </code></pre>
    <img src="../../assets/git.png">
  </div>  
</template>

<script>
export default {

}
</script>

<style>
  img {
    max-width: 100%;
  }
</style>
