# Lesson 0001 重写原因与原则调整 (2026-06-20)

用户学习偏好"先概念后代码"且 Linux/网络"几乎不会"。原版 0001 把 socket→accept 四步、select、poll、epoll 全塞在一节，每个只甩了 C 函数签名，没拆过每一行的语义。用户反复反馈"看不懂你的代码什么意思"。

调整为新方案:
- Lesson 0001: 只讲 socket→bind→listen→accept 四步，用 Python 语法（用户能看懂）、类比、ASCII 图，每一行系统调用的内部机制都拆开。
- Lesson 0002: select 详解（配完整可跑代码，逐行拆解）
- Lesson 0003: epoll 详解（配完整可跑代码 + 对比 select）

原则: 一个 lesson = 一个可跑通的心智模型，不多塞。
