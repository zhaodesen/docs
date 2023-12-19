---
title: type-challenges
---

### 不使用 `Pick<T, K>` ，实现 `TS` 内置的 `Pick<T, K>` 的功能。

> 从类型 T 中选出符合 K 的属性，构造一个新的类型。
```ts
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```
### 对象属性只读
> 泛型 Readonly<T> 会接收一个 泛型参数，并返回一个完全一样的类型，只是所有属性都会是只读 (readonly) 的。不要使用内置的Readonly<T>，自己实现一个。
```ts
type MyReadonly<T> = {
  readonly [key in keyof T]: T[key]
}

interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
```
### 元组转换为对象
> 将一个元组类型转换为对象类型，这个对象类型的键/值和元组中的元素对应。

```ts
type TupleToObject<T extends readonly PropertyKey[]> = {
  [key in T[number]]: key
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```
> 1. 不加 `as const`,  `tuple` 的类型为 `string[]`， 这是因为 `TypeScript` 倾向于为变量选择更广泛的类型。

> 2. 加上 `as const` 将确保 `TypeScript` 将 `tuple` 的每个元素视为不可变的常量，即字面量类型

### 第一个元素
> 实现一个First<T>泛型，它接受一个数组T并返回它的第一个元素的类型。

```ts
//answer1
type First<T extends any[]> = T extends [] ? never : T[0]

//answer2
type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

//answer3
type First<T extends any[]> = T extends [infer A, ...infer rest] ? A : never

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // 应推导出 'a'
type head2 = First<arr2> // 应推导出 3

```
> `T extends []` 代表 `T` 是一个空数组

### 获取元组长度
> 创建一个Length泛型，这个泛型接受一个只读的元组，返回这个元组的长度。

```ts
type Length<T extends readonly any[]> = T['length']

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5
```


### 实现 Exclude
> 实现内置的 Exclude<T, U> 类型，但不能直接使用它本身。

```ts
type MyExclude<T, U> =  T extends U ? never : T;

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
```
> https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types

### Awaited 
> 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。

```ts
type MyAwaited<T extends PromiseLike<any>> =  T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never;
type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string
// type X = Promise<string>
// type Y = Promise<{ field: number }>
// type Z = Promise<Promise<string | number>>
// type Z1 = Promise<Promise<Promise<string | boolean>>>
// type T = { then: (onfulfilled: (arg: number) => any) => any }

// MyAwaited<X>
// MyAwaited<Y>
// MyAwaited<Z>
// MyAwaited<Z1>
// MyAwaited<T>
```

### if
> 实现一个 IF 类型，它接收一个条件类型 C ，一个判断为真时的返回类型 T ，以及一个判断为假时的返回类型 F。 C 只能是 true 或者 false， T 和 F 可以是任意类型。
```ts
type If<C extends boolean, T, F> = C extends true ? T : F;

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
```
