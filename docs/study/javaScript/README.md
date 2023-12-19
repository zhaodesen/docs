# 类 `class`

## 类是用于创建对象的模板,用代码封装数据以处理该数据,它是特殊的函数

```js
// 类声明
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
// 类表达式
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

## `constructor` 构造函数 用于创建和初始化一个由`class`创建的对象
