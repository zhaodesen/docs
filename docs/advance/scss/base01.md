---
# autoGroup-1: 基础
title: 起步
---
## 变量
``` scss 
  $primary-color: red;
  $primary-border: 1px solid $primary-color;
  div{
    background: $primary-color;
    border: $primary-border;
  }
``` 
``` css
 div{
    background: red;
    border: 1px solid red;
 }
```
## 嵌套
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
## & 
- 引用父选择器,相当于占位符,会被父元素替换
- 不加`&`
``` scss 
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
- 加`&`
``` scss 
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
## @mixin 混合
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
## @extend 继承
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
## @import 导入
- 导入`scss`文件
- 每个`scss`文件称为`partials`,文件名需以`_`开头,不会编译
  - 例:`_base.scss`
``` scss 
// 导入当前目录下的 _base.scss
@import "base";
```
## 注释
``` scss
/*
*  多行注释
*  编译后保留
*  压缩后不保留
*/

// 单行注释 编译后不保留

/*!
*  强制注释
*  一直保留
*/
```
## 数据类型
- `number`
- `string`  
- `list`
- `color`
- `Map`
- `boolean`
``` scss
type-of(5)       // number
type-of(5px)     // number

type-of(hello)       // string 不可以加空格和特殊符号
type-of("hello")     // string 可以加空格和特殊符号
// 字符串使用 + - / 都是拼接效果 * 会报错

type-of(1px solid #000)    // list
type-of(1px 1px)           // list

type-of(#ff0000)              // color
type-of(red)                  // color
type-of(rgb(255,0,0))         // color
type-of(rgb(10%,20%,30%))     // color
```
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
5px > 3px                   // true
5px < 3px                   // false
(5px > 3px) and (5px > 1px) // true   同&&
(5px > 3px) or (5px < 1px)  // true   同||
not(5px > 3px)              // fale   同!
```
## 函数
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
## Interpolation
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
## 控制指令
### @if
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
### @for
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
### @each
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
### @while
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
## 自定义函数
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
## 警告与错误
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