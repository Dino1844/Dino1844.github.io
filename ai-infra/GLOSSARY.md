# AI Infra Glossary

> 本工作区术语的压缩定义。仅当 learner 真正理解一个概念后才加入(不是预读字典)。随理解加深原地修订。

## 工程地基

**进程 (process)**:
一个运行中的程序实例,内核眼里是一组被隔离的资源(地址空间、fd 表、线程、PID)。
_Avoid_: 程序、任务

**文件描述符 (fd)**:
内核给你的一个非负整数,代表一个打开的"文件"(真文件 / socket / pipe / 设备皆可),后续 read/write/close 都用它。
_Avoid_: 文件句柄(Windows 术语)、handle

**socket**:
一种 fd,两头连着网络或本机,用于进程间字节流通信。
_Avoid_: 连接(混淆 conn_fd 与 listen_fd)

**IO 多路复用 (I/O multiplexing)**:
用一个线程同时盯多个 fd,阻塞到任一 fd 就绪再处理。select/poll/epoll 是三种实现。
_Avoid_: 异步 IO(不同概念,AIO/libaio/io_uring 才是)

**epoll**:
Linux 的 IO 多路复用。增量注册 fd(epoll_ctl),返回只给就绪 fd(epoll_wait),与总 fd 数无关。
_Avoid_: 事件循环(那是用户态概念)

**水平触发 (LT, level-triggered)**:
fd 里只要还有未读数据,epoll_wait 就持续返回它。安全,不易漏数据。epoll 默认。

**边沿触发 (ET, edge-triggered)**:
fd 状态从无数据到有数据时只通知一次,之后不再提醒。性能更好但必须循环 read 到 EAGAIN,否则数据卡住。nginx/Redis 用 ET。

(后续 Phase 1+ 术语随学习加入:SM, warp, occupancy, KV cache, PagedAttention, ZeRO, TP, PP, ...)
