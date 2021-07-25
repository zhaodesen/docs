---
title: 起步
---
> 弱类型语言
## 一、变量
- 以`$`符号开头
- 有块级作用域,分为局部变量与全局变量
- `!global`可以将局部变量提升为全局变量
``` scss 
  $primary-color: red;
  $primary-border: 1px solid $primary-color;
  div{
    background: $primary-color;
    border: $primary-border;
  }
``` 
``` css
 div{background: red;border: 1px solid red;}
```
``` scss
$age: 80px;
div {
    $age1: 90px !global;
    width: $age;
}
#app {
    width: $age1;
}
```
``` css
div{width:80px}#app{width:90px}
```
- `!default`在该变量之前去找有没有定义,没有的话就用该变量的值
- 如果之前有定义,但值是`null`,也属于没定义
``` scss
$a: '你好';
$a: '我不好' !default;
$b: '哈喽' !default;
main {
    content: $a;
    width: $b;
}
```
``` css
main{content:"你好";width:"哈喽"}
```
- `!optional`当`@extend`失败时,编译器会编译错误,加上这个参数可以不编译
## 二、数据类型
Sass 支持 7 种主要的数据类型：
- 数字，`带单位数字`和`不带单位数字`,如:`1, 2, 13, 10px`
  - 可正可负可为零，可正可浮点
  - 单位会和数字当做一个整体，进行算数运算
- 字符串,`有引号字符串`与`无引号字符串`,如: "foo",'boo',baz
  - `有引号字符串`可以加空格和特殊符号
  - `无引号字符串`加空格无效,特殊符号报错
  - 字符串使用 `+ - /` 都是拼接效果,而 `*` 会报错
  - 使用 `#{}`时，`有引号字符串`将被编译为`无引号字符串`，便于在 `@mixin` 中引用选择器名
- 颜色,如:`blue, #ffffff, rgba, rgb, hsl, hsla`
- 布尔值,只有`false`和`null`返回`false`,其他一切返回`true`
- `null`  空值 ,不能参与运算
- 数组(list),用空格或逗号做分隔符`1.5em 1em 0 2m`,`Arial,Helvetica,sans-serif`
  - 独立的值也被视为数组--只包含一个值的数组
  - 索引从1开始
  - `(1px 2px) (5px 6px)` 是包含两个数组的数组
  - `1px 2px 5px 6px` 是包含四个值的数组
  - `()`表示空数组,不会编译成`css`
  - `(1,)`表示只包含`1`的数组
  - `(1 2 3,)`表示包含`1 2 3`这个以空格分隔的数组的数组
- 映射(Map)   键值对
  - 必须被圆括号包围
  - 可以映射任何类型键值对
  - `$map: ( $key: value )`
使用`type-of($value)`判断数据类型


## 三、运算
### 数字运算符
- `+, -, *, /, %`
- 如果要保留运算符号，则应该使用插值语法
#### 加
``` scss
// 纯数字相加   只要有单位，结果必有单位
$add1: 1 + 2;	// 3
$add2: 1 + 2px; // 3px
$add3: 1px + 2; // 3px
$add4: 1px + 2px;//3px
// 纯字符串相加   第一个字符串有无引号决定结果是否有引号
$add5: "a" + "b"; // "ab"
$add6: "a" + b;	  // "ab"
$add7: a + "b";	  // ab
$add8: a + b;	  // ab
// 数字和字符串相加 第一位有引号，结果必为引号；第一位对应数字非数字且最后一位带有引号，则结果必为引号
$add9: 1 + a;	// 1a
$adda: a + 1;	// a1
$addb: "1" + a; // "1a"
$addc: 1 + "a"; // "1a"
$addd: "a" + 1; // "a1"
$adde: a + "1"; // a1
$addf: 1 + "1"; // "11"
```
#### 减
- 每个字段必须前部分为数字，且两个字段只能一个后部分是字符(因为此时后缀被当被单位看待了)。
- 只要其中一个值首位不为数字的，结果就按顺序去除空格后拼接起来
``` scss
$add1: 1 - 2;	// -1
$add2: 1 - 2px; // -1px
$add3: 1px - 2; // -1px
$add4: 1px - 2px;//-1px

$sub1: a - 1;  // a-1
$sub2: 1 - a;  // 1-a
$sub3: "a" - 1;// "a"-1
$sub4: a - "1";// a-"1"
```
#### 乘
- 每个字段必须前部分为数字，且两个字段只能一个后部分是字符(因为此时后缀被当被单位看待了)。其余编译不通过

``` scss
$num1: 1 * 2;    // 2
$mul2: 1 * 2px;  // 2px
$num3: 1px * 2;  // 2px
$num4: 2px * 2px;// 编译不通过

$num5: 1 * 2abc; // 2abc
```
#### 除
- 不会四舍五入，精确到小数点后5位
- 每个字段必须前部分为数字，且当前者只是单纯数字无单位时，后者(除数)后部分不能有字符。其余结果就按顺序去除空格后拼接起来。(因为此时后缀被当被单位看待了)
#### `%`
- 值与"%"之间必须要有空格，否则会被看做字符串
### 关系运算符
- 两端必须为数字 或 前部分数字后部分字符
- 返回值：true or false
``` scss
$a: 1 > 2; // false
$a: 1 > 2; // true
$a: 1 >= 2; // false
$a: 1 <= 2; // true
5px > 3px                   // true
5px < 3px                   // false
```
### 相等运算符
- 相等运算 `==, !=` 可用于所有数据类型
- 返回值：true or false
- 前部分为不带引号数字时，对比的仅仅是数字部分；反之，忽略引号，要求字符一一对应
``` scss
$a: 1 == 1px; // true
$b: "a" == a; // true
```
### 布尔运算符
- `and` ` or `以及`not`
- 值与`and` ` or `以及`not`之间必须要有空格，否则会被看做字符串
``` scss
$a: 1>0 and 0>=5; // fasle
(5px > 3px) and (5px > 1px) // true   同&&
(5px > 3px) or (5px < 1px)  // true   同||
not(5px > 3px)              // fale   同!
```
### 颜色值运算
>颜色值的运算是分段计算进行的，也就是分别计算红色，绿色，以及蓝色的值
- `颜色值与颜色值`
``` scss
p {
  color: #010203 + #040506;
}
// 计算 01 + 04 = 05 02 + 05 = 07 03 + 06 = 09，然后编译为
 p {
  color: #050709; 
}
```
- `颜色值与数字`
``` scss
p {
  color: #010203 * 2;
}

// 计算 01 * 2 = 02 02 * 2 = 04 03 * 2 = 06，然后编译为
p {
  color: #020406; 
}
```
- `RGB和HSL`
``` scss
// 如果颜色值包含 alpha channel（rgba 或 hsla 两种颜色值），必须拥有相等的 alpha 值才能进行运算，因为算术运算不会作用于 alpha 值。
p {
  color: rgba(255, 0, 0, 0.75) + rgba(0, 255, 0, 0.75);
}
 p {
  color: rgba(255, 255, 0, 0.75); 
}
```
### 运算优先级
0. `()`
1. `*`,`/`,`%`
2. `+`,`-`
3. `>`,`<`,`>=`,`<=`
### 大杂烩
``` scss
2 + 8        // 10
(2 + 8)      // 10
5px + 5px    // 10px
5px - 2      // 3px
5px * 2px    // 10px*px
(10px / 2px) // 5 
(10px / 2)   // 5px   
```
``` scss

```
## 四、嵌套
### 元素嵌套
``` scss
.nav {
  height: 200px;
  ul {
    margin: 0;
    li {
      color: #20a0ff;
    }
  }
}
```
``` css
.nav {
  height: 200px;
}
.nav ul {
  margin: 0;
}
.nav ul li {
  color: #20a0ff;
}
```
### 属性嵌套
``` scss 
.nav {
  font: {
    size: 25px;
    weight: lighter;
    family: "Arial Narrow";
  }
  border: 1px solid #20a0ff {
    left: 5px solid red;
    right: 10px solid red;
  };
}
```
``` css
.nav {
  font-size: 25px;
  font-weight: lighter;
  font-family: "Arial Narrow";
  border: 1px solid #20a0ff;
  border-left: 5px solid red;
  border-right: 10px solid red;
}
```
## 五、一些语句
### & 语句
- 引用父选择器,相当于占位符,会被父元素替换
``` scss 
// 不加`&`
a {
  :hover {
    color: red;
  }
}
```
``` css
a :hover {
  color: red;
}
```
``` scss 
// 加`&`
a {
  &:hover {
    color: red;
  }
}
```
``` css
a:hover {
  color: red;
}
```
### Interpolation 插值语法
- 通过 `#{} `插值语句可以在选择器、属性名和属性值中使用变量。
- 但大多数情况下，这样使用属性值可能还不如直接使用变量方便，但是使用 #{} 可以避免 Sass 运行运算表达式，直接编译 CSS。
``` scss
$version: "0.0.1";
/* 当前版本 #{$version} */
$name: "info";
$attr: "border";
.alert-#{$name} {
  #{$attr}-color:#ccc
}
```
``` css
@charset "UTF-8"
/* 当前版本 0.0.1 */
.alert-info {
  border-color: #ccc;
}
```
## 六、一些指令
### @import 导入
- 导入`scss`或`sass`文件,被导入的文件将合并编译到同一个` CSS `文件中
- 导入的文件中所包含的变量或者混合指令 (`@mixin`) 都可以在导入的文件中使用。
- 通常，`@import` 寻找 `Sass `文件并将其导入,但在以下情况下，@import 仅作为普通的 CSS 语句，不会导入任何 Sass 文件
  - 文件拓展名是` .css`
  - 文件名以 `http:// `开头
  - 文件名是 url()
  - `@import` 包含 media queries。
- 没有指定拓展名，Sass 将会试着寻找文件名相同，拓展名为 .scss 或 .sass 的文件并将其导入。
- 支持嵌套 `@import`,但是不可以在混合指令或控制指令中嵌套 `@import`
- 每个`scss`文件称为`partials`,文件名需以`_`开头,不会被编译成css文件
  - 例:`_base.scss`
``` scss 
// 导入当前目录下的 _base.scss
@import "base";
```
``` scss
@import "foo.scss";
@import "foo";
// 以上两种方式均可

// 以下方式均不可行
@import "foo.css";
@import "foo" screen;
@import "http://foo.com/bar";
@import url(foo);
// Sass 允许同时导入多个文件
@import "rounded-corners", "text-shadow";
/* 导入文件也可以使用 #{ } 插值语句，但不是通过变量动态导入 Sass 文件，
 只能作用于 CSS 的 url() 导入方式：
*/
$family: unquote("Droid+Sans");
@import url("http://fonts.googleapis.com/css?family=\#{$family}");

// 编译为：
@import url("http://fonts.googleapis.com/css?family=Droid+Sans");

```

### `@media`

Sass 中 `@media` 指令与 CSS 中用法一样，只是增加了一点额外的功能：允许其在 CSS 规则中嵌套。如果 `@media` 嵌套在 CSS 规则内，编译时，`@media` 将被编译到文件的最外层，包含嵌套的父选择器。这个功能让 `@media` 用起来更方便，不需要重复使用选择器，也不会打乱 CSS 的书写流程。

``` scss
.sidebar {
  width: 300px;
  @media screen and (orientation: landscape) {
    width: 500px;
  }
}
// 编译为
.sidebar {
  width: 300px;
  @media screen and (orientation: landscape) {
    width: 500px;
  }
}
``` 

`@media`的 queries 允许互相嵌套使用，编译时，Sass 自动添加 `and`

``` scss
@media screen {
  .sidebar {
    @media (orientation: landscape) {
      width: 500px;
    }
  }
}
// 编译为：
@media screen and (orientation: landscape) {
  .sidebar {
    width: 500px; } }
``` 

`@media` 甚至可以使用 SassScript（比如变量，函数，以及运算符）代替条件的名称或者值

``` scss
$media: screen;
$feature: -webkit-min-device-pixel-ratio;
$value: 1.5;

@media #{$media} and ($feature: $value) {
  .sidebar {
    width: 500px;
  }
}
// 编译为：
@media screen and (-webkit-min-device-pixel-ratio: 1.5) {
  .sidebar {
    width: 500px; } }
``` 


### `@extend` 继承
- 继承父元素及其相关的所有样式
``` scss 
.nav {
  padding: 15px;
}
.nav a {
  color: #42b983;
}
.na {
  @extend .nav;
  background-color: #20a0ff;
}
```
``` css
.nav, .na {
  padding: 15px;
}
.nav a, .na a {
   color: #42b983;
}
.na {
  background-color: #20a0ff;
}
```
在设计网页的时候常常遇到这种情况：一个元素使用的样式与另一个元素完全相同，但又添加了额外的样式。

总的来看：支持层叠继承、多继承、允许延伸任何定义给单个元素的选择器（但是允许不一定好用）

a. `基本延伸`

``` scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
// 上面代码的意思是将 .error 下的所有样式继承给 .seriousError，border-width: 3px; 是单独给 .seriousError 设定特殊样式，这样，使用 .seriousError 的地方可以不再使用 .error。
``` 

`@extend` 的作用是将重复使用的样式 (`.error`) 延伸 (extend) 给需要包含这个样式的特殊样式（`.seriousError`）

注意理解以下情况：

``` scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.error.intrusion {
  background-image: url("/image/hacked.png");
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
// .error, .seriousError {
  border: 1px #f00;
  background-color: #fdd; }

.error.intrusion, .seriousError.intrusion {
  background-image: url("/image/hacked.png"); }

.seriousError {
  border-width: 3px; }
``` 

当合并选择器时，`@extend` 会很聪明地避免无谓的重复，`.seriousError.seriousError` 将编译为 `.seriousError`，不能匹配任何元素的选择器也会删除。



b.  `延伸复杂的选择器`：Class 选择器并不是唯一可以被延伸 (extend) 的，Sass 允许延伸任何定义给单个元素的选择器，比如 `.special.cool`，`a:hover` 或者 `a.user[href^="http://"]` 等



c. ` 多重延伸`：同一个选择器可以延伸给多个选择器，它所包含的属性将继承给所有被延伸的选择器



d. `继续延伸`：当一个选择器延伸给第二个后，可以继续将第二个选择器延伸给第三个



e.`*选择器列`：暂时不可以将选择器列 (Selector Sequences)，比如 `.foo .bar` 或 `.foo + .bar`，延伸给其他元素，但是，却可以将其他元素延伸给选择器列。

尽量不使用`合并选择器列`，因为如果凭个人推理的话，会出现排列组合的情况，所以SASS编译器只会保留有用的组合形式，但依旧会存在排列组合的情况，有可能会留下隐患。

1. 当两个列合并时，如果没有包含相同的选择器，将生成两个新选择器：第一列出现在第二列之前，或者第二列出现在第一列之前

   ``` scss
   #admin .tabbar a {
     font-weight: bold;
   }
   #demo .overview .fakelink {
     @extend a;
   }
   // 编译为：
   #admin .tabbar a,
   #admin .tabbar #demo .overview .fakelink,
   #demo .overview #admin .tabbar .fakelink {
     font-weight: bold; }
   ``` 

   

2. 如果两个列包含了相同的选择器，相同部分将会合并在一起，其他部分交替输出

   ``` scss
   #admin .tabbar a {
     font-weight: bold;
   }
   #admin .overview .fakelink {
     @extend a;
   }
   // 编译为
   #admin .tabbar a,
   #admin .tabbar .overview .fakelink,
   #admin .overview .tabbar .fakelink {
     font-weight: bold; }
   ``` 

   

f. `在指令中延伸`

在指令中使用 `@extend` 时（比如在 `@media` 中）有一些限制：Sass 不可以将 `@media` 层外的 CSS 规则延伸给指令层内的 CSS.



g.  `%placeholder`为选择器占位符，配合`@extend-Only选择器`使用。

效果：只定义了样式，但不会对原有选择器匹配的元素生效

``` scss
// example1:
%img {
    color: red;
}
.path{
    @extend %img;
}
// 编译后：
.path {
  color: red;
}
``` 

``` scss
// example2:
#context a%extreme {
  color: blue;
  font-weight: bold;
  font-size: 2em;
}
// 编译后：
.notice {
  @extend %extreme;
}

// 注：必须是"."和"#"选择器
``` 


### `@at-root`

> The @at-root directive causes one or more rules to be emitted at the root of the document, rather than being nested beneath their parent selectors. It can either be used with a single inline selector

译文：@at root指令使一个或多个规则在文档的根发出，而不是嵌套在其父选择器下。它可以与单个内联选择器一起使用

且@at-root 使多个规则跳出嵌套

@at-root默认情况下并不能使规则或者选择器跳出指令，通过使用without和with可以解决该问题

了解即可

### `@debug`

用于调试，按标准错误输出流输出

``` scss
$size: 9px;

.file{
  @debug $size;
}
``` 
### 警告与错误
- `@warn` 
- `@error`
``` scss 
$colors: (light: #ffffff, dark: #000000);
@function color($key) {
  @if not map-has-key($colors, $key) {
    @warn "没有找到#{$key}"   // 警告
//  @error "没有找到#{$key}"  // 错误
  }
  @return map-get($colors, $key)
}
body {
  background-color: color(lin);
}
```
## 七、控制指令
### 1.`if()`

*三元运算符*

表达式：`if(expression, value1, value2)`

``` scss
p {
    color: if(1 + 1 = 2, green, yellow);
}

// compile:
p{
    color: green;}
``` 
### 2.@if
``` scss
$theme: "dark";
@if $theme == dark {
  color: red;
} @else if $theme == light {
  color: green;
} @else {
  color: blue
}
```
``` css
color: red;
```
### 3.@for
``` scss
$columns: 4;
// 从1到4循环
@for $i from 1 through $columns {
  .col-#{$1} {
    width: 100% / $columns * $1;
  }
}  
```
``` css
.col-1 {
  width: 25%
}
.col-2 {
  width: 50%
}
.col-3 {
  width: 75%
}
.col-4 {
  width: 100%
}
```
``` scss
$columns: 4;
@for $i from 1 to $columns {
  .col-#{$1} {
    width: 100% / $columns * $1;
  }
}  
```
``` css
.col-1 {
  width: 25%
}
.col-2 {
  width: 50%
}
.col-3 {
  width: 75%
}
```
### 4.@each

*循环语句*

表达式：`$var in $vars`



`$var` 可以是任何变量名

`$vars` 只能是`Lists`或者`Maps`



- 一维列表

  ``` scss
  @each $animal in puma, sea-slug, egret, salamander {
    .#{$animal}-icon {
      background-image: url('/images/#{$animal}.png');
    }
  }
  
  // compile:
  .puma-icon {
    background-image: url('/images/puma.png'); }
  .sea-slug-icon {
    background-image: url('/images/sea-slug.png'); }
  .egret-icon {
    background-image: url('/images/egret.png'); }
  .salamander-icon {
    background-image: url('/images/salamander.png'); }
  ``` 

- 二维列表

  ``` scss
  @each $animal, $color, $cursor in (puma, black, default),
                                    (sea-slug, blue, pointer),
                                    (egret, white, move) {
    .#{$animal}-icon {
      background-image: url('/images/#{$animal}.png');
      border: 2px solid $color;
      cursor: $cursor;
    }
  }
  
  // compile:
  .puma-icon {
    background-image: url('/images/puma.png');
    border: 2px solid black;
    cursor: default; }
  .sea-slug-icon {
    background-image: url('/images/sea-slug.png');
    border: 2px solid blue;
    cursor: pointer; }
  .egret-icon {
    background-image: url('/images/egret.png');
    border: 2px solid white;
    cursor: move; }
  ``` 

- maps

  ``` scss
  @each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
    #{$header} {
      font-size: $size;
    }
  }
  
  // compile:
  h1 {
    font-size: 2em; }
  h2 {
    font-size: 1.5em; }
  h3 {
    font-size: 1.2em; }
  ``` 

``` scss
$icons: success error warning;
@each $icon in $icons {
  .icon-#{$icon} {
    background-image: url(../images/icons/#{$icon}.png)
  }
}
```
``` css
.icon-success {
    background-image: url(../images/icons/success.png)
}
.icon-error {
    background-image: url(../images/icons/error.png)
}
.icon-warning {
    background-image: url(../images/icons/warning.png)
}
```
### 5.@while
``` scss
$i: 6;
@while $i > 0 {
  .item-#{$i} {
    width: 5px * $1;
  }
  $i: $i - 2;
}
```
``` css
.item-6 {
  width: 30px;
}
.item-4 {
  width: 20px;
}
.item-2 {
  width: 10px;
}
```

## 八、@mixin 混合
- 用名字定义好的样式,可以在任何地方重复使用
- 调用`@mixin`需要使用`@include`
``` scss
// 如果没有参数,()可以不加
@mixin 名字 (参数1,参数2,...) {
  ...
}
```
> 示例1:无参
``` scss
@mixin alert {
  color: #20a0ff;
  a {
    color: red;
  }
}
.nav {
  @include alert
}
```
``` css
.nav {
  color: #20a0ff;
}
.nav a {
  color: red;
}
```
> 示例2:有参
``` scss
@mixin alert($text-color, $background) {
  color: $text-color;
  background-color: $background;
  a {  // 颜色函数 darken（原色，亮度值）
    color: darken($text-color, 10%); 
  }
}
.nav {
  @include alert(#a51313, #1c0cad)
}
```
``` css
.nav {
  color: #a51313;
  background-color: #1c0cad;
}
.nav a {
  color: #770e0e
}
```
> 示例3:传参顺序
``` scss 
@mixin alert($text-color, $background) {
  ...
}
.nav {
  @include alert($background:#a51313, $text-color:#1c0cad)
}
```
>示例4:参数默认值

``` scss
@mixin mp($width: 500px) {
    margin: $width;
}

body {
    @include mp($width: 300px);
    // or
    @include mp(300px);
}
``` 

>示例5:不定参数

> 官方：Variable Arguments
>
> 译文：参数变量
>
> 
>
> 有时，不能确定混合指令需要使用多少个参数。这时，可以使用参数变量 `…` 声明（写在参数的最后方）告诉 Sass 将这些参数视为值列表处理

``` scss
@mixin mar($value...) {
    margin: $value;
}
``` 


### 向混合样式中导入内容

在引用混合样式的时候，可以先将一段代码导入到混合指令中，然后再输出混合样式，额外导入的部分将出现在 `@content` 标志的地方

可以看作参数的升级版

``` scss
@mixin example {
    html {
        @content;
    }
}
@include example{
    background-color: red;
    .logo {
        width: 600px;
    }
}

// compile:
html {
  background-color: red;
}

html .logo {
  width: 600px;
}

``` 


## 九、注释
``` scss
/*
*  多行注释
*  编译保留
*  压缩不保留
*/

// 单行注释 编译/压缩都不保留

$author: 'zds@qq.com'
/*!
*  强制注释
*  一直保留
*  通常用于添加版权信息
*  Author: #{$author}
*/
```

## 十、函数
### 1.内置函数

#### a. 字符串函数

> 索引第一个为1，最后一个为-1；切片两边均为闭区间

| 函数名和参数类型                        |                  函数作用                   |
| :-- | :-----: |
| quote($string)                          |                  添加引号                   |
| unquote($string)                        |                  除去引号                   |
| to-lower-case($string)                  |                  变为小写                   |
| to-upper-case($string)                  |                  变为大写                   |
| str-length($string)                     |        返回$string的长度(汉字算一个)        |
| str-index($string，$substring)          |        返回$substring在$string的位置        |
| str-insert($string, $insert, $index)    |       在$string的$index处插入$insert        |
| str-slice($string, $start-at, $end-at） | 截取$string的$start-at和$end-at之间的字符串 |



#### b. 数字函数

| 函数名和参数类型        |                           函数作用                           |
| ----- | :----: |
| percentage($number)     |                       转换为百分比形式                       |
| round($number)          |                        四舍五入为整数                        |
| ceil($number)           |                         数值向上取整                         |
| floor($number)          |                         数值向下取整                         |
| abs($number)            |                          获取绝对值                          |
| min($number...)         |                          获取最小值                          |
| max($number...)         |                          获取最大值                          |
| random($number?:number) | 不传入值：获得0-1的随机数；传入正整数n：获得0-n的随机整数（左开右闭） |



#### c. 数组函数

| 函数名和参数类型                 |                           函数作用                           |
| -- | :----: |
| length($list)                    |                         获取数组长度                         |
| nth($list, n)                    |                      获取指定下标的元素                      |
| set-nth($list, $n, $value)       |                   向$list的$n处插入$value                    |
| join($list1, $list2, $separator) | 拼接$list1和list2；$separator为新list的分隔符，默认为auto，可选择comma、space |
| append($list, $val, $separator)  | 向$list的末尾添加$val；$separator为新list的分隔符，默认为auto，可选择comma、space |
| index($list, $value)             |                返回$value值在$list中的索引值                 |
| zip($lists…)                     | 将几个列表结合成一个多维的列表；要求每个的列表个数值必须是相同的 |



#### d. 映射函数

| 函数名和参数类型        |                 函数作用                 |
| ----- | :--: |
| map-get($map, $key)     |        获取$map中$key对应的$value        |
| map-merge($map1, $map2) |     合并$map1和$map2，返回一个新$map     |
| map-remove($map, $key)  |     从$map中删除$key，返回一个新$map     |
| map-keys($map)          |            返回$map所有的$key            |
| map-values($map)        |           返回$map所有的$value           |
| map-has-key($map, $key) | 判断$map中是否存在$key，返回对应的布尔值 |
| keywords($args)         |  返回一个函数的参数，并可以动态修改其值  |



#### e. 颜色函数

- **RGB函数**

  | 函数名和参数类型               |                           函数作用                           |
  | ----- | :--: |
  | rgb($red, $green, $blue)       |                     返回一个16进制颜色值                     |
  | rgba($red,$green,$blue,$alpha) | 返回一个rgba；$red,$green和$blue可被当作一个整体以颜色单词、hsl、rgb或16进制形式传入               |
  | red($color)                    |                   从$color中获取其中红色值                   |
  | green($color)                  |                   从$color中获取其中绿色值                   |
  | blue($color)                   |                   从$color中获取其中蓝色值                   |
  | mix($color1,$color2,$weight?)  |     按照$weight比例，将$color1和$color2混合为一个新颜色      |

- **HSL函数**

  | 函数名和参数类型                         | 函数作用                                                     |
  | ----- | :--: |
  | hsl($hue,$saturation,$lightness)         | 通过色相（hue）、饱和度(saturation)和亮度（lightness）的值创建一个颜色 |
  | hsla($hue,$saturation,$lightness,$alpha) | 通过色相（hue）、饱和度(saturation)、亮度（lightness）和透明（alpha）的值创建一个颜色 |
  | saturation($color)                       | 从一个颜色中获取饱和度（saturation）值                       |
  | lightness($color)                        | 从一个颜色中获取亮度（lightness）值                          |
  | adjust-hue($color,$degrees)              | 通过改变一个颜色的色相值，创建一个新的颜色                   |
  | lighten($color,$amount)                  | 通过改变颜色的亮度值，让颜色变亮，创建一个新的颜色           |
  | darken($color,$amount)                   | 通过改变颜色的亮度值，让颜色变暗，创建一个新的颜色           |
  | hue($color)                              | 从一个颜色中获取亮度色相（hue）值                            |

- **Opacity函数**

  |                                                             |                  |
  | ----- | :--: |
  | alpha($color)/opacity($color)                               | 获取颜色透明度值 |
  | rgba($color,$alpha)                                         | 改变颜色的透明度 |
  | opacify($color, $amount) / fade-in($color, $amount)         | 使颜色更不透明   |
  | transparentize($color, $amount) / fade-out($color, $amount) | 使颜色更加透明   |



#### f. Introspection函数

| 函数名和参数类型               |                           函数作用                           |
  | ----- | :--: |
| type-of($value)                |                       返回$value的类型                       |
| unit($number)                  |                      返回$number的单位                       |
| unitless($number)              |           判断$number是否带单位，返回对应的布尔值            |
| comparable($number1, $number2) | 判断$number1和$number2是否可以做加、减和合并，返回对应的布尔值 |



### 2.自定义函数

> Sass 支持自定义函数，并能在任何属性值或 Sass script 中使用
>
> Params: 与Mixin一致
>
> 
>
> 支持返回值

**基本格式：**

``` scss
@function fn-name($params...) {
    @return $params;
}
``` 



``` scss
// example:
@function fn-name($params...) {
    @return nth($params, 1);
}
p {
    height: fn-name(1px);
}

// compiled:
p {
  height: 1px;
}
``` 
``` scss 
@function 名称 (参数1,参数2) {
  ...
}
```
``` scss 
$colors: (light: #ffffff, dark: #000000);
@function color($key) {
  @return map-get($colors, $key)
}
body {
  background-color: color(light);
}
```
``` css
body {
  background-color: #ffffff;
}
```



``` scss
// 数字函数
abs(-10px)                 // 10px 绝对值函数
round(3.2)                 // 3    四舍五入函数
round(3.6)                 // 4   
ceil(3.1)                  // 4    
floor(3.6)                 // 3    
percentage(650px / 1000px) // 65%  百分比函数
min(1,2,3)                 // 1 最小数
max(1,2,3)                 // 3 最大数
// 字符串函数
$greeting: "Hello";
to-upper-case($greeting)         // HELLO  转大写
to-lower-case($greeting)         // hello  转小写
str-length($greeting)            // 5      字符长度
str-index($greeting, "h")        // 1     字符首次出现的位置
str-insert($greeting, ".net", 6) // Hello.net  插入
// 颜色函数
rgb(255,0,0)        
rgba(255,10,10,0.3)
hsl(0,100%,10%)      
hsla(0,100%,10%,0.1)    
$base-color-hsla:hsl(0,100,50%,0.2)  
adjust-hue($base-color-hsl,137deg)   // 改变颜色
lighten($base-color-hsl, 30%)        // 改变明度更浅
darken($base-color-hsl, 30%)         // 改变明度更深
saturate($base-color-hsl, 30%)       // 增加30%饱和度度
desaturate($base-color-hsl, 30%)     // 减少30%饱和度度
opacify($base-color-hsl, 0.3)        // 增加0.3的透明度
transparentize($base-color-hsl, 0.3) // 减少0.3的透明度
// list函数,使用空格或逗号分开的值
length(5px 10px)                // 2 list长度
nth(5px 10px,1)                 // 5px  索引从1开始取值
index(1px solid red, solid)     // 2  获取某个值的下标
append(5px 10px, 5px)           // (5px 10px, 5px) 追加值
join(5px 10px, 5px 0)           // 5px 10px 5px 0 合并
join(5px 10px, 5px 0, comma)    // 5px,10px,5px,0 合并,逗号分隔
// Map函数
$color:(light: #ffffff, dark: #000000)
length($color)                  // 2   map的长度
map-get($color, dark)           // #000000  取值
map-keys($color)                // ("light","dark")  获取所有的key
map-values($color)              // ("#ffffff"," #000000")  获取所有的value
map-has-key($color, light)      // true 检查$color有没有这个light
map-merge($color,(light-gray:#e5e5e5)) // 合并
map-remove($color, light,dark)  // 删除light和dark
```


## 十一、细节


### @extend、@Mixin和@function的选择

[原文链接](https://csswizardry.com/2016/02/mixins-better-for-performance/)

![image-20200707171035353](https://raw.githubusercontent.com/ggdream/scss/master/sources.assets/image-20200707171035353.png)

> `minxins`在网络传输中比`@extend` 拥有更好的性能.尽管有些文件未压缩时更大，但使用`gzip`压缩后，依然可以保证我们拥有更好的性能。


**所以@extend我们就尽量不要使用了，而@Mixin和@function的差别在定义和使用上**

> 定义方式不同： `@function` 需要调用`@return`输出结果。而 @mixin则不需要。
>
> 使用方式不同：`@mixin` 使用`@include`引用，而 `@function` 使用小括号执行函数。

