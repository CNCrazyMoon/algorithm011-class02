# 学习笔记

## 递归

### 应用场景

1. 一个问题的解可以分解成多个子问题的解。
2. 这个问题与分解之后的子问题，除了数据规模不同，求解思路完全一样。
3. 存在递归终止条件。

### 递归代码模板

```js
// js
function recur(level, param) {
  // terminator
  if (level > MAX_LEVEL) {
    // process result
    return;
  }
  // process current logic
  process(level, param);
  // drill down
  recur( level: level + 1, newParam);
  // restore current status

}
```

### 递归代码编写注意要点

1. 警惕堆栈溢出。可以通过在代码中限制递归调用的最大深度。
2. 警惕重复计算。

## 分治

### 概念
将一个规模为N的问题分解为K个规模较小的子问题，这些子问题相互独立且与原问题性质相同。求出子问题的解，就可得到原问题的解。即一种分目标完成的算法

### 使用场景

降低问题求解的时间复杂度，解决海量数据处理问题等

## 回溯

### 概念

试探法。

### 使用场景
搜索算法、数独、八皇后问题、全排列、正则表达式匹配和编译原理中语法分析等