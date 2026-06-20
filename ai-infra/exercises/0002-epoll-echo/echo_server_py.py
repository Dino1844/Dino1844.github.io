#!/usr/bin/env python3
"""
Lesson 0002 — epoll echo server (Python selectors 版)

目标:跑通一个单线程、能同时接 N 个客户端的 echo server。
后端就是 epoll (Linux 上 selectors.DefaultSelector == EpollSelector)。

填所有标记 # TODO 的行。填完跑:
    python3 echo_server_py.py
另开终端:
    nc 127.0.0.1 9000        # 输入什么就回显什么
    # 开第二个 nc, 同时连, 都能回显 -> 多路复用成功

Gate:
- 两个 nc 同时连, 都能 echo
- 能讲清: register 时为什么要带 data=conn? events 读写常量怎么选?
- (加分) 改成 ET 模式: read 要循环到 BlockingIOError

参考: https://docs.python.org/3/library/selectors.html
"""
import socket
import selectors
import errno

HOST = "127.0.0.1"
PORT = 9000

def accept_conn(sel, sock):
    """处理新连接: accept 出 conn_fd, 注册到 epoll 监听读事件。"""
    conn, addr = sock.accept()          # 取出新 socket
    print(f"accepted {addr}")
    conn.setblocking(False)             # 非阻塞, 配合 epoll
    # TODO 1: 把 conn 注册到 sel, 监听可读事件
    #         提示: sel.register(fileobj, events, data)
    #         events 用 selectors.EVENT_READ
    #         data 传 conn 本身, 待会 epoll_wait 返回时能拿回它
    # sel.register(...)


def service_conn(sel, conn):
    """处理已连接 socket 上的读事件: 读 -> 回显。"""
    try:
        data = conn.recv(1024)
    except OSError as e:
        if e.errno == errno.EAGAIN:
            return                      # ET 模式下正常, 这次没数据了
        raise
    if not data:
        # 对端关了
        print(f"closing {conn.getpeername()}")
        sel.unregister(conn)
        conn.close()
        return
    # TODO 2: 把 data 原样写回 (echo)
    #         简单起见直接 conn.sendall(data); 生产环境要处理 partial write
    # conn.sendall(...)


def main():
    sel = selectors.DefaultSelector()   # Linux 上 = EpollSelector

    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    sock.bind((HOST, PORT))
    sock.listen(128)
    sock.setblocking(False)
    # TODO 3: 把 listen sock 注册到 sel, 监听可读 (有新连接)
    #         data 传 sock 本身, 用来区分 "这是 listen fd" vs "这是 conn fd"
    # sel.register(...)

    print(f"echo server on {HOST}:{PORT} (backend = {type(sel).__name__})")
    try:
        while True:
            # TODO 4: 阻塞等事件, 返回 [(key, events), ...]
            #         提示: sel.select(timeout=None)
            events = None  # sel.select(...)
            for key, mask in events:
                callback = key.data       # 我们注册时塞进去的 sock/conn
                # TODO 5: 区分 listen fd 和 conn fd, 分别调 accept_conn / service_conn
                #         提示: 用 key.fileobj is sock 判断
                #         if ...: accept_conn(sel, callback)
                #         else:   service_conn(sel, callback)
                pass
    except KeyboardInterrupt:
        print("\nshutting down")
    finally:
        sel.close()
        sock.close()


if __name__ == "__main__":
    main()
