---
title: 介绍
---
## CSS预处理器

### Sass/Scss
1. `Sass`于2007年诞生,是最早最成熟的`css`预处理器,但不兼容`css`
2. 后面受`Less`的影响,进化为了全面兼容`css`的`Scss`
### Less
1. 2009年诞生,借鉴了`Sass`的长处,并兼容`css`语法
2. 文件名以`.less`结尾
### Stylus
1. 2010年诞生,出自`Node.js`社区,主要给`Node`项目进行`CSS`预处理支持
2. 文件名以`.styl`结尾

## Sass与Scss的关系
Sass有两套语法:
- 第一个或最新的语法称为`Scss`,是`css`语法的扩展,文件名以`.scss`结尾
- 第二种或之前的语法称为`Sass`,提供了更简洁的`css`编写方式,文件名以`.sass`结尾
- 任何一种格式可以直接导入`(@import)`到另一种格式中使用

## 环境配置
> less,scss(sass)和stylus代码不能被浏览器直接解析,必须先将它们编译成css代码,现有框架已经集成,相关配置会自动帮我们生成
### 命令行编译工具(不依赖编辑器)
- `Node`环境下的`node-sass`        (拿来就用)
- `Node`环境下的`dart-sass`        (需要配置,性能好) 
- `Ruby`环境下的`sass`模块
- `Dart`环境下的`sass`模块
### 命令行编译工具(依赖编辑器)
- `webstorm`    安装`sass`插件
- `vsCode`      安装`Easy Sass`(编译)和`Sass`(代码提示)插件
## 安装
### `npm`与`yarn`
``` sh
npm init                    # 初始化
npm install xx              # 本地安装
npm install xx -g           # 全局安装
npm install                 # 根据dependencies配置安装依赖
npm install xx --save       # 将安装包信息加入到dependencies
npm install xx -S           # 将安装包信息加入到dependencies
npm install xx --save-dev   # 将安装包加入到devDependencies
npm install xx -D           # 将安装包加入到devDependencies
npm uninstall xx            # 卸载
```
``` sh
yarn init                   # 初始化
yarn                        # 安装所有依赖
yarn add xx                 # 本地安装,将安装包信息加入到dependencies与yarn.lock文件
yarn add xx --dev           # 将安装包加入到devDependencies
yarn add xx -D              # 将安装包加入到devDependencies
yarn remove xx              # 删除
yarn global add xx          # 全局安装依赖
```
#### node-sass
``` sh
npm install -g node-sass    # 全局安装
node-sass -v                # 可以看是否安装成功
```