---
title: 部署
---
### 使用 Github Actions 部署 VuePress 博客
### deploy.sh
<<< deploy.sh
### .github\workflows\deploy.yml
<<< .github\workflows\deploy.yml
### 总结
- 使用`deploy.sh` 每次都要打包上传到`git page`,文件越多,上传时间越长
- 使用`deploy.yml` 只需要写完文档提交到`github`上就可以完成自动部署了