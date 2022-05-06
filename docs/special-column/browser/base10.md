---
title: this
---

在对象内部的方法中使用对象内部的属性是一个非常普遍的需求。但是 `JavaScript`的作用域机制并不支持这一点，基于这个需求，`JavaScript`又搞出来另外一套`this`机制。

作用域链和`this`是两套不同的系统，它们之间基本没太多联系

![this-one](../../.vuepress/public/special-column/browser/this-one.png)

`this` 是和执行上下文绑定的，每个执行上下文中都有一个`this`。

## 全局执行上下文中的 `this`

全局执行上下文中的 `this` 是指向 `window` 对象

## 函数执行上下文中的 `this`

```js
function foo() {
  console.log(this); // window
}
foo();
```

有三种方式来设置函数执行上下文中的 `this` 值

1. 函数的`call`方法

```js
let bar = {
  myName: " 极客邦 ",
  test1: 1,
};
function foo() {
  this.myName = " 极客时间 ";
}
foo.call(bar);
console.log(bar);
console.log(myName);
```

除了`call`方法，`bind`和`apply`方法也可以设置函数执行上下文中的 `this`

2. 通过对象调用方法设置

```js
var myObj = {
  name: " 极客时间 ",
  showThis: function() {
    console.log(this);
  },
};
myObj.showThis();
```

使用对象来调用其内部的一个方法，该方法的`this` 是指向对象本身的

也可以认为 `JavaScript` 引擎在执行`myObject.showThis()`时，将其转化为了：

```js
myObj.showThis.call(myObj);
```

```js
var myObj = {
  name: " 极客时间 ",
  showThis: function() {
    this.name = " 极客邦 ";
    console.log(this);
  },
};
var foo = myObj.showThis;
foo();
```

- 在全局环境中调用一个函数，函数内部的 `this` 指向的是全局变量 `window`。
- 通过一个对象来调用其内部的一个方法，该方法的执行上下文中的 `this` 指向对象本身。

3. 通过构造函数中设置

```js
function CreateObj() {
  this.name = " 极客时间 ";
}
var myObj = new CreateObj();
```

当执行 `new CreateObj()` 的时候，`JavaScript` 引擎做了如下四件事：

- 创建了一个空对象 `tempObj`
- 调用`CreateObj.call` 方法，并将 `tempObj` 作为`call`方法的参数，这样`this`就指向了`tempObj`对象
- 执行 `CreateObj` 函数，此时的 `CreateObj`函数执行上下文中的 `this`指向了`tempObj`对象
- 返回 `tempObj` 对象

```js
var tempObj = {};
CreateObj.call(tempObj);
return tempObj;
```

## `this`的设计缺陷以及应对方案

### 1. 嵌套函数中的 `this` 不会从外层函数中继承

```js
var myObj = {
  name: " 极客时间 ",
  showThis: function() {
    console.log(this);
    function bar() {
      console.log(this);
    }
    bar();
  },
};
myObj.showThis();
```

解决方式一

```js
var myObj = {
  name: " 极客时间 ",
  showThis: function() {
    console.log(this);
    var self = this;
    function bar() {
      self.name = " 极客邦 ";
    }
    bar();
  },
};
myObj.showThis();
console.log(myObj.name);
console.log(window.name);
```

解决方式二

```js
var myObj = {
  name: " 极客时间 ",
  showThis: function() {
    console.log(this);
    var bar = () => {
      this.name = " 极客邦 ";
      console.log(this);
    };
    bar();
  },
};
myObj.showThis();
console.log(myObj.name);
console.log(window.name);
```

### 2. 普通函数中的 `this`默认指向全局对象`window`

- 通过 `call` 方法来显示调用。

- 启用**严格模式**,`this` 指向`undefined`
