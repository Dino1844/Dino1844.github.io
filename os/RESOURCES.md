# Resources

## 核心教材

- **OSTEP（Operating Systems: Three Easy Pieces）** — Remzi H. Arpaci-Dusseau & Andrea C. Arpaci-Dusseau
  OS 教学领域的最佳教材，以"三条简单道理"（虚拟化、并发、持久化）为主线。叙事幽默但机制讲得极深。
  使用场景：**主教材**，课程主线跟随 OSTEP 结构展开。
  链接：https://pages.cs.wisc.edu/~remzi/OSTEP/ （免费在线阅读）

- **xv6: a simple, Unix-like teaching operating system** — MIT PDOS group
  MIT 6.S081 的教学 OS，源码约 9000 行，包含一个完整 Unix 风格内核。
  使用场景：作为全部概念的"具体化验证"——把课程里的机制映射到真实代码。
  链接：https://github.com/mit-pdos/xv6-riscv

- **xv6 Book** — 伴随 xv6 源码的手册，逐章解释设计
  链接：https://pdos.csail.mit.edu/6.S081/2024/xv6/book-riscv-rev4.pdf

## 补充资源

### 书籍
- **CSAPP（Computer Systems: A Programmer's Perspective）** — Bryant & O'Hallaron
  从程序员视角看计算机系统，异常控制流（第 8 章）和虚拟内存（第 9 章）是最强补充。
  使用场景：当 OSTEP 的某个机制需要从汇编/系统编程角度验证时。

- **Linux Kernel Development（LKD）** — Robert Love
  以可读性著称的 Linux 内核书，讲解进程调度、内存管理、VFS 等的 Linux 实际实现。
  使用场景：0002（CFS 调度）、0004（Linux 内存管理）、0007（ext4）、0009（Linux 深潜）

### 在线资源
- **MIT 6.S081: Operating System Engineering** — xv6 配套课程
  使用场景：每课后可看对应 lecture 加深理解
  链接：https://pdos.csail.mit.edu/6.S081/2024/schedule.html

- **Linux source code (cross-referenced)**
  使用场景：定位具体内核函数时
  链接：https://elixir.bootlin.com/linux/latest/source

### 社区
- **r/osdev** (reddit.com/r/osdev) — OS 开发和内核讨论
- **LWN.net** — Linux 内核每周新闻，高质量内核技术文章
