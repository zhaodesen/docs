---
title: 变量提升
---

```js
showName();
console.log(myname);
var myname = "极客时间";
function showName() {
  console.log("函数 showName 被执行");
}
```

## 变量提升（`Hoisting`）

变量提升是指在 `JavaScript` 代码执行过程中，`JavaScript` 引擎把变量的声明部分和函数的声明部分提升到代码开头的行为。变量被提升后，会给变量设置默认值`undefined`。

## `JavaScript`代码的执行流程

`JavaScript` 代码在执行之前需要被 `JavaScript`引擎编译，编译完成之后，才会进入执行阶段

### 1. 编译阶段

![variable-hoisting](../../.vuepress/public/special-column/browser/variable-hoisting.png)

输入一段代码,经过编译后，会生成两部分内容：**执行上下文（`Execution context`）**和**可执行代码**。
执行上下文是 `JavaScript` 执行一段代码时的运行环境，比如调用一个函数，就会进入这个函数的执行上下文，确定该函数在执行期间用到的诸如 `this`、变量、对象以及函数等
生成了变量环境对象,`JavaScript` 引擎会把声明以外的代码编译为字节码

### 2. 执行阶段

`JavaScript`引擎开始执行**可执行代码**，按照顺序一行一行地执行

## 相同的变量或者函数

- 如果定义了两个相同名字的函数或者变量，那么最终生效的是最后一个
- 如果变量和函数同名，那么在编译阶段，变量的声明会被忽略

## 问题

`head`头部引入`js`文件，是如何编译的？

### 第一种情况

当从服务器接收`HTML`页面的第一批数据时，`DOM`解析器就开始工作了，在解析过程中，如果遇到了`JS`脚本，如下所示：

```html
<html>
  <body>
    1111111
    <script>
      document.write("22222");
    </script>
  </body>
</html>
```

那么 `DOM` 解析器会执行 `JavaScript` 脚本，执行完成之后，再继续往下解析。

### 第二种情况

```html
<html>
  <body>
    1111
    <script type="text/javascript" src="foo.js"></script>
    3333
  </body>
</html>
```

当解析到`JavaScript`的时候，会先暂停`DOM`解析，并下载`foo.js`文件，下载完成之后执行该段`JS`文件，然后再继续往下解析`DOM`。这就是`JavaScript`文件为什么会阻塞 DOM 渲染。

### 第三种情况

```html
<html>
  <head>
    <style type="text/css" src="theme.css"></style>
  </head>
  <body>
    <p>极客时间</p>
    <script>
      let e = document.getElementsByTagName("p")[0];
      e.style.color = "blue";
    </script>
  </body>
</html>
```

`JavaScript`访问了某个元素的样式，那么这时候就需要等待这个样式被下载完成才能继续往下执行，所以在这种情况下，`CSS`也会阻塞`DOM`的解析。

如果头部包含了`js`文件，那么同样也会暂停`DOM`解析，等带该`JavaScript`文件下载后，便开始编译执行该文件，执行结束之后，才开始继续`DOM`解析。
