---
author: Alfred
pubDatetime: 2026-10-13T10:30:00+08:00
title: 写作语法速查
featured: false
draft: false
tags:
  - 使用指南
description: 本站支持的 Markdown 写法：代码高亮、数学公式、提示块、表格、脚注。
---

## 目录

把本站实际支持的写法整理成一份速查表，写文章时对着抄就行。

## 代码块

普通代码块用三个反引号加语言名。支持行高亮、逐字高亮和增删标记：

````md
```python title="train.py" lang="python"
def f(x):
    return x * 2  # [!code highlight]
```

```diff lang="diff"
- old_line = 1
+ new_line = 2
```
````

渲染效果：

```python title="train.py"
def f(x):
    return x * 2  # [!code highlight]
```

```diff lang="diff"
- old_line = 1
+ new_line = 2
```

行内代码用单个反引号，比如 `npm run dev`。

## 数学公式

行内公式用一对美元符号，例如 $\mathcal{O}(n \log n)$；独立成行的公式用两对：

$$
\text{Attention}(Q,K,V) = \operatorname{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
$$

多行对齐也没问题：

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \times \mathbf{B} &= \mu_0\left(\mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}\right)
\end{aligned}
$$

## 提示块

用 `> [!TIP]` 这样的写法生成带颜色的提示框，支持 `NOTE`、`TIP`、`IMPORTANT`、`WARNING`、`CAUTION`：

> [!NOTE]
> 普通提示信息。

> [!WARNING]
> 需要注意的风险点。

## 表格与列表

| 写法     | 效果           |
| -------- | -------------- |
| `**粗体**` | **粗体**       |
| `*斜体*`   | *斜体*         |
| `~~删除~~` | ~~删除~~       |
| `[链接](url)` | [链接](https://astro.build) |

- 无序列表
  - 支持嵌套
- 第二个条目

1. 有序列表
2. 第二条

## 脚注与引用

这里引用一句别人的话：^[脚注会自动收在文章末尾。]

> 写下来才算真的想清楚。

## 目录与摘要

文章开头写 `## 目录`，构建时会自动在下面生成可折叠的目录（本页顶部就是）。摘要则来自 frontmatter 里的 `description`，会显示在首页列表和搜索里。

## 图片

图片放到 `src/assets/images/` 下，用相对路径引用：

```md
![说明文字](../../assets/images/example.png)
```

需要控制尺寸或居中，直接写 HTML：

```html
<img src="../../assets/images/example.png" alt="说明文字" width="520" />
```
