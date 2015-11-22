#git Broszhu
##git配置
-git config --global user.name broszhu
-git config --global user.email ooxx@zhu.me

##产生密钥对
- ssh--keygen.exe -t rea  一路回车会在下面产生密钥对；
    - window: C:\users\XXX\ssh
    - linux: ~/.ssh/

## 将公钥加入服务端配置中；
- github -- profile --setting --ssh keys --使用公钥；

## 克隆git代码到当前代码库
- git clone git仓库地址

## 创建本地分支
- 创建本地分支 git branch broszhu
- 删除本地分支 git branch -d broszhu
- 查看本地分支 git branch --list
- 查看远程分支 git branch -r
- 切换分支 git checkout broszhu

## 从远程服务器更新文件到本地
- git pull
- 如果fork别人项目，与源项目保持一致；
    - git remote add bieren git地址
    - git pull bieren master

##添加文件
- git add index.html
- git rm index.html
- git add . 添加修改和新建
- git add -u 添加修改和删除
- git add -A 添加所有修改

## 提交修改
- git commit -m "备注信息"

##提交到远程服务器
- git push origin master

##想忽略不提交的文件
- 建立一个[.gitignore]文件

## git差异git 比较版本差异的命令；
- git diff 可以查看修改内容;要随时掌握工作区的状态，使用git status命令;git status告诉你有文件被修改过 。
- git diff 可查看工作区和暂存区的差异。
- git diff HEAD 可查看工作区和HEAD（当前工作分支）相比的差异
- git diff --cached 可查看暂存区和历史区的差异.

##fork别人的代码

- 1.注册自己的账号
- 2.fork别人的的项目
- 3.克隆自己的项目
- 4.进入项目文件夹
- 5.在homework 下建立自己名字的文件夹，并添加readme.md文件。
- 6.git add -A
- 7.git commit -m"提交到历史区"
- 8.git push origin master 提交到 github上
- 9.发起一个pull request
- 10.别人合并代码

## 让自己Fork的github项目，与源项目保持一致；
- git remote add teacherhttps://github.com/Broszhu/My-JavaScript-is-a-clover.git[teacher是随便写的变量名]
- git pull teacher master //拉取到本地
- git push origin master&nbsp; //把本地的推送到自己Fork的项目；


