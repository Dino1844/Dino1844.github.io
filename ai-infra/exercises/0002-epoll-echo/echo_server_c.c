/*
 * Lesson 0002 — epoll echo server (C 裸 epoll 版)
 *
 * 这是面试要你白板写的版本:4 个 syscall epoll_create / epoll_ctl /
 * epoll_wait / read-write,fd 就是个 int。
 *
 * 编译: gcc -O2 -Wall echo_server_c.c -o echo_server_c
 * 运行: ./echo_server_c
 * 测试: nc 127.0.0.1 9000  (开两个, 同时连)
 *
 * Gate:
 * - 两个 nc 同时连, 都能 echo
 * - 能讲清: EPOLLIN / EPOLLET 各是什么, 为什么 listen fd 不用 EPOLLET(进阶)
 * - 能讲清: events 数组大小 vs maxevents 的区别
 *
 * 参考: man 7 epoll, man 2 epoll_create, epoll_ctl, epoll_wait
 */
#define _GNU_SOURCE
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>
#include <errno.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <sys/epoll.h>

#define PORT 9000
#define MAX_EVENTS 64
#define BUF_SIZE  1024

static int set_nonblock(int fd) {
    int flags = fcntl(fd, F_GETFL, 0);
    if (flags == -1) return -1;
    return fcntl(fd, F_SETFL, flags | O_NONBLOCK);
}

int main(void) {
    /* ---- 1. 建 listen socket ---- */
    int lfd = socket(AF_INET, SOCK_STREAM, 0);
    int yes = 1;
    setsockopt(lfd, SOL_SOCKET, SO_REUSEADDR, &yes, sizeof(yes));

    struct sockaddr_in addr = {0};
    addr.sin_family = AF_INET;
    addr.sin_port   = htons(PORT);
    addr.sin_addr.s_addr = htonl(INADDR_LOOPBACK);
    bind(lfd, (struct sockaddr *)&addr, sizeof(addr));
    listen(lfd, 128);
    set_nonblock(lfd);

    /* ---- 2. 建 epoll, 注册 listen fd ---- */
    // TODO 1: int epfd = epoll_create1(0);
    int epfd = -1;  // epoll_create1(...)

    struct epoll_event ev = {0};
    ev.events  = EPOLLIN;          // TODO (加分): | EPOLLET 切到边沿触发
    ev.data.fd = lfd;              // 把 fd 塞进 epoll, 返回时能拿回
    // TODO 2: epoll_ctl(epfd, EPOLL_CTL_ADD, lfd, &ev);

    printf("echo server on 127.0.0.1:%d\n", PORT);
    struct epoll_event events[MAX_EVENTS];

    for (;;) {
        /* ---- 3. 等事件 ---- */
        // TODO 3: int n = epoll_wait(epfd, events, MAX_EVENTS, -1);
        int n = -1;  // epoll_wait(...)

        for (int i = 0; i < n; i++) {
            int fd = events[i].data.fd;

            if (fd == lfd) {
                /* ---- 4a. 新连接 ---- */
                // TODO 4: accept 出 conn_fd, set_nonblock,
                //         再 epoll_ctl ADD 进 epfd, 监听 EPOLLIN
                //         提示: accept 可能返回 EAGAIN(高并发下), 循环到 EAGAIN 更稳
                int cfd = -1;  // accept(lfd, NULL, NULL);
                // ... 填完
            } else {
                /* ---- 4b. 已连接 socket 有数据 ---- */
                char buf[BUF_SIZE];
                // TODO 5: read(fd, buf, sizeof buf)
                //         返回 >0: write 回去 (echo)
                //         返回 0: 对端关 -> epoll_ctl DEL + close
                //         返回 <0: errno==EAGAIN 继续, 否则 perror+关
                //         (ET 模式下要循环 read 到 EAGAIN, 这里 LT 先简单读一次)
                // ... 填完
            }
        }
    }
    return 0;
}
