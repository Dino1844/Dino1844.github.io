# AI Infra Resources

> 高信任源优先。每条标注:覆盖什么 + 何时翻。随学习推进持续 prune。

## Knowledge — 工程地基

- [书: CSAPP《Computer Systems: A Programmer's Perspective》— Bryant & O'Hallaron](https://csapp.cs.cmu.edu/)
  进程/虚拟内存/链接/并发基础。Use for: Phase 0.1a/0.1b 概念的权威出处。
- [man page: epoll(7)](https://man7.org/linux/man-pages/man7/epoll.7.html)
  epoll 一手定义,LT/ET、签名、语义。Use for: 写 epoll 代码时对语义存疑。
- [博客: "C10k problem" — Dan Kegel](http://kegel.com/c10k.html)
  IO 多路复用动机的历史原文。Use for: 理解为什么 select 扛不住、epoll 为何出现。
- [书: 《The Linux Programming Interface》— Michael Kerrisk (ch.63 epoll)](https://man7.org/tlpi/)
  Linux 系统 API 最权威教材。Use for: epoll/select/poll 章节深读。

## Knowledge — CUDA / Kernel

- [NVIDIA CUDA C++ Programming Guide](https://docs.nvidia.com/cuda/cuda-c-programming-guide/)
  官方权威:执行模型、内存层次、warp。Use for: Phase 1 概念验真的 ground truth。
- [NVIDIA Nsight Compute docs](https://docs.nvidia.com/nsight-compute/)
  kernel profiler 官方文档。Use for: Phase 1.4 roofline / bottleneck 分析。
- [博客: "FlashAttention-2" — Tri Dao](https://tridao.me/blog/2022/05/28/flash-attention/)
  作者本人博客。Use for: Phase 1.5 online softmax + tiling 推导。
- [Triton tutorials](https://triton-lang.org/main/getting-started/tutorials/index.html)
  官方教程,含 fused softmax / matmul。Use for: Phase 1.4。

## Knowledge — 推理 Infra

- [论文+代码: vLLM / "Efficient Memory Management for LLM Serving with PagedAttention"](https://arxiv.org/abs/2309.06180)
  PagedAttention 原论文 + 开源实现。Use for: Phase 2.2。
- [vLLM 源码](https://github.com/vllm-project/vllm)
  scheduler.py / block_manager.py。Use for: Phase 2.7 源码周。
- [论文: "SGLang" — RadixAttention](https://arxiv.org/abs/2312.07104)
  Use for: Phase 2.4 prefix cache / radix tree。
- [博客: "Continuous Batching" — AnyScale](https://www.anyscale.com/blog/continuous-batching-llm-inference)
  Use for: Phase 2.3 时序图与吞吐对比。

## Knowledge — 训练 Infra

- [论文: "Megatron-LM" — Tensor Parallel](https://arxiv.org/abs/1904.01541)
  TP 原论文。Use for: Phase 3.2。
- [论文: "ZeRO" — DeepSpeed](https://arxiv.org/abs/1910.02054)
  ZeRO 1/2/3 原论文。Use for: Phase 3.1。
- [DeepSpeed 源码](https://github.com/microsoft/DeepSpeed)
  zero_stage3.py。Use for: Phase 3.7 源码周。
- [博客: "PipeDream" / 1F1B](https://arxiv.org/abs/1806.03363)
  Use for: Phase 3.3 pipeline bubble。

## Knowledge — 系统/调度/网络

- [NCCL 源码 + 文档](https://github.com/NVIDIA/nccl)
  ring/tree all-reduce 实现。Use for: Phase 4.5 源码周。
- [博客: "RDMA/RoCE" — NVIDIA Mellanox whitepapers](https://docs.nvidia.com/networking/)
  Use for: Phase 4.2 网络拓扑。
- [Ray docs](https://docs.ray.io/)
  Use for: Phase 4.1 gang scheduling / 弹性。

## Wisdom (Communities)

- [r/LocalLLaMA](https://reddit.com/r/LocalLLaMA)
  推理 infra 实战讨论。Use for: vLLM/SGLang 调参、踩坑。
- [vLLM Discord / GitHub Discussions](https://github.com/vllm-project/vllm/discussions)
  Use for: 推理方向问答、贡献 PR 反馈。
- [CUDA / GPU programming Discord](https://discord.gg/) (待确认具体 invite)
  Use for: kernel 调优问答。

## Gaps
- 中文面试真题集(字节/阿里 LLM infra 面经):暂无高信任单一来源,靠 community + 自己整理。
