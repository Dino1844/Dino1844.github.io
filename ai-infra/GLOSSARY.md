# AI Infra Glossary

> 本工作区术语的压缩定义。仅当 learner 真正理解一个概念后才加入(不是预读字典)。随理解加深原地修订。

## 工程地基

**文件描述符 (fd)**:
内核给你的一个非负整数,代表一个打开的"文件"(真文件 / socket / pipe / 设备皆可),后续 read/write/close 都用它。不是对象,就是个编号。
_Avoid_: 文件句柄(Windows 术语)、handle

**socket**:
一种 fd,两头连着网络或本机,用于进程间字节流通信。分两类: listen socket(只接新连接)和 connector socket(跟具体客户端收发数据)。
_Avoid_: 笼统说"连接"——会混淆两种 socket

**listen socket (listen_fd)**:
调了 <code>listen()</code> 之后的 socket。只有一个职责——检查有没有新客户端连进来,有就调 <code>accept()</code> 取出来。不往它里面 read/write 数据。

**connector socket (conn_fd)**:
<code>accept()</code> 返回的新 socket。一个 conn_fd 对应一个客户端,往它里面 recv/send 数据。一个 server 同时有 N 个客户端 = N 个 conn_fd。

**backlog 队列**:
<code>listen()</code> 参数控制的内核队列,存放已完成三次握手但尚未被 <code>accept()</code> 取走的连接。满了之后新连接被内核拒绝。

**IO 多路复用 (I/O multiplexing)**:
用一个线程同时盯多个 fd,阻塞到任一 fd 就绪再处理。解决"一个连接一个线程"无法扛 C10k 的问题。

(select / poll / epoll 术语待 Lesson 0002 / 0003 学习后加入)
