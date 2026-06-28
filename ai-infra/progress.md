# AI Infra 学习进度

> 每 session 结束更新。`[ ]` 未开始 `[~]` 进行中 `[x]` 通过 gate `[!]` gate 没过/需补

## Phase 0:工程地基

- [~] 0.1a Linux 进程/fd/socket/IO 多路复用
       ├ lesson 0001 (socket → accept 全链路) — 已讲, HTML 已重写为自包含版
       ├ lesson 0002 (epoll echo server) — 已讲, HTML 已生成, TODO 练习待填
       └ gate: 练习跑通且能讲清 epoll vs select
- [~] 0.1b Python 并发(threading/multiprocessing/asyncio/GIL)+ 多进程数据 pipeline
       ├ lesson 0003 (Python 并发) — 已生成, TODO 练习待填
       └ gate: 多进程 pipeline 跑通
- [ ] 0.2 分布式系统概念 + 通信原语
- [ ] 0.3 GPU 架构 + 工具链

## Phase 1:CUDA & Kernel

- [ ] 1.1 概念验真(产出缺口清单)
- [ ] 1.2 naive matmul + ncu
- [ ] 1.3 tiled matmul + warp reduce
- [ ] 1.4 Triton matmul
- [ ] 1.5 FlashAttention v2
- [ ] 1.6 Buffer

## Phase 2:推理 Infra

- [ ] 2.1 推理基础 + KV cache
- [ ] 2.2 PagedAttention
- [ ] 2.3 Continuous Batching
- [ ] 2.4 Speculative / RadixAttention / Prefix Cache
- [ ] 2.5 量化推理
- [ ] 2.6 项目:改 vLLM
- [ ] 2.7 源码周
- [ ] 2.8 Buffer

## Phase 3:训练 Infra

- [ ] 3.1 ZeRO 1/2/3
- [ ] 3.2 Tensor Parallel
- [ ] 3.3 Pipeline Parallel
- [ ] 3.4 SP / Ulysses / CP
- [ ] 3.5 通信优化
- [ ] 3.6 项目:Megatron
- [ ] 3.7 源码周
- [ ] 3.8 Buffer

## Phase 4:系统/调度/网络

- [ ] 4.1 集群调度
- [ ] 4.2 RDMA/网络
- [ ] 4.3 存储
- [ ] 4.4 容错/成本
- [ ] 4.5 源码周
- [ ] 4.6 系统设计模拟

## Phase 5:冲刺

- [ ] 5.1 串讲 + 项目打磨
- [ ] 5.2 模拟面试

---

## Session 日志

(每 session 追加:日期 / 学了什么 / gate 结果 / 新发现的 weak area / 下次 resume 点)
