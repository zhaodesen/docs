---
autoGroup-1: 基础
title: 开始
---
## 下载
[Git官网](https://git-scm.com/)
## 安装 
[Git 详细安装教程（详解 Git 安装过程的每一个步骤）](https://blog.csdn.net/mukes/article/details/115693833?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522162544374316780264064061%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=162544374316780264064061&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-115693833.first_rank_v2_pc_rank_v29&utm_term=git+%E5%AE%89%E8%A3%85&spm=1018.2226.3001.4187)

## 分布式 vs 集中式
- `git`是分布式版本控制系统
- `svn`是集中式版本控制系统
## 集中式

版本库集中放在中央服务器,用的时候从上面获取最新版本,写完代码推送到服务器,必须联网才能工作,大文件上传耗时

## 分布式

每个电脑上都是一个完整的版本库,多人协作的时候,同时改动一个文件,只会把各自的修改推给对方

## 工作区与暂存区

- 工作区是`git`初始化的目录  
- `.git`是`git`的版本库 , 版本库里包含暂存区
- 第一个分支`master`,指向master的指针`HEAD`