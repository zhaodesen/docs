---
title: 指南
---
[[toc]]

# 一级标题
## 二级标题 
### 三级标题 
#### 四级标题 
##### 五级标题 
:man_firefighter:
:tada: :100: 
[表情大全](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)
```
代码块 
```
>一级引用
---
![vue官网logo](https://cn.vuejs.org/images/logo.png "vue官网logo")
- [Markdown Preview Enhanced插件文档](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/)
- 假设你现在在 foo/one.md 中：
  - [Home](/) <!-- 跳转到根部的 README.md -->
  - [foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
  - [foo](./two) <!-- 跳转到 two 文件 -->
  - [foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
  - [bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
  - [bar - four](../bar/four.html) <!-- 也可以用 .html -->
- 列表
1. 列表

| 姓名         |   年龄   |           国家 |
| ------------ | :------: | -------------: |
| 内容默认居左 | 内容居中 |       内容居右 |
| 张三         |    19    | 中华人民共和国 |
| 李四         |    29    |           中国 |
| 王麻子       |    18    | 中华人民共和国 |

`单行代码`
::: tip 提示
这是一个tip，使用了别名“提示”
:::
::: warning
这是一个warning，没有使用别名
:::
::: danger
这是一个danger，没有使用别名
:::
::: details 请看详情
这是一个details，使用了别名“请看详情”
:::
::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::
<!-- 直接在文档里面写一个[[top]]就可以生成目录 -->