# AI Infra 学习路线图

> 生成于 2026-06-20。6 个月系统学,目标面试求职。
> 进度追踪见 `progress.md`,每 session 结束更新。

## Learner Profile

```yaml
level: intermediate          # ML 强,工程/系统/CUDA 弱
stated_goal: "AI Infra / LLM Infra 工程师面试求职"
learning_style: code-first   # 有 ML 基础,倾向写代码兑现概念
time_budget: "6 个月, 每周 ~12h"
directions: [推理 Infra, 训练 Infra, CUDA/Kernel, 系统/调度]

# 关键中间态: CUDA 半吊子 —— 懂概念、不会写
# 风险: 听得懂讲得出, 一写就废, 面试手撕露馅
# 对策: Phase 1 不讲概念, 用写代码兑现+验真

weak_areas:
  - {topic: "Linux/网络/IPC", type: "工程地基缺口", last_seen: null}
  - {topic: "分布式系统概念", type: "工程地基缺口", last_seen: null}
  - {topic: "CUDA 手写 kernel", type: "半吊子, 概念懂不会写", last_seen: null}
  - {topic: "GPU 架构/occupancy", type: "概念可能半吊子", last_seen: null}

covered_topics: []
active_checkpoint: "Phase 0 Session 0.1 (未开始)"
session_count: 0
last_session: null
```

## 可观测目标(6 个月后)

1. 白板讲清 LLM 推理/训练全链路关键机制(PagedAttention / 3D 并行 / ZeRO / NCCL)
2. 手撕核心代码片段(Attention kernel / batching 调度 / 通信 overlap)
3. 回答"为什么这么设计、瓶颈在哪、怎么优化"类系统设计题
4. 有 2 个可讲的项目:改 vLLM + 跑 Megatron-LM 并行训练

## 子目标 → 面试高频

| # | 子目标 | 对应面试 |
|---|--------|----------|
| G1 | GPU/CUDA 执行模型, 写 & 调 Triton kernel | kernel 题、性能瓶颈 |
| G2 | 单机推理引擎机制与实现 | vLLM/SGLang 原理 |
| G3 | 分布式训练并行策略 | Megatron/DeepSpeed 设计 |
| G4 | 集群/调度/网络/存储系统层 | 系统设计、成本容错 |

---

## Phase 0:工程地基(扎实版, 3 sessions)

| S | 主题 | 技能 | Gate |
|---|------|------|------|
| 0.1 | Linux 进程/网络/IPC + Python 并发(asyncio/multiprocessing/queue) | deep-dive + coding-exercise | 手写多进程数据 pipeline, 讲清 epoll/select |
| 0.2 | 分布式系统概念:一致性/容错/时钟/通信原语(broadcast/reduce/all-reduce) | teach-concept + flashcards | 画 all-reduce ring, 讲清训练为何用它 |
| 0.3 | GPU 硬件架构(SM/warp/HBM/L2/occupancy) + 工具链(nvidia-smi/ncu/nsys) | teach-concept + deep-dive | 画 SM 结构图, 算 occupancy, ncu 跑 kernel |

## Phase 1:CUDA & Kernel(半吊子→能写, 5 sessions + 1 buffer)

> 原则: 先验真概念, 再立刻写, 写不出就回补那个概念。1.1 不要跳。

| S | 主题 | 技能 | Gate |
|---|------|------|------|
| 1.1 | 概念验真:check-understanding 过 thread/block/grid/shared mem/warp divergence/sync, 产出缺口清单 | check-understanding + grill-me | 产出"概念缺口清单", 讲清每个边界条件 |
| 1.2 | 第一个能跑的 kernel:vector add → naive matmul → ncu 看 bottleneck, 把 1.1 概念对到代码 | coding-exercise | naive matmul 跑通, ncu 读出 occupancy/L2 hit |
| 1.3 | Shared memory + tiling + reduction:tiled matmul + warp reduce, 堵 bank conflict/sync 坑 | coding-exercise + deep-dive | tiled matmul ≥ naive 3x, 讲清 bank conflict |
| 1.4 | Triton:fused softmax / matmul, 对比 CUDA C++ | coding-exercise | Triton matmul ≥ CUDA 80%, 讲清 block 抽象 |
| 1.5 | 手写 FlashAttention v2(Triton)+ profiling | deep-dive + challenge-generator | 代码跑通 + 白板推 online softmax |
| 1.6 | Buffer:spaced-repetition + grill-me 中级 tier | — | 通过中级 tier |

## Phase 2:推理 Infra(5 sessions + 1 buffer + 1 源码周)

| S | 主题 | 技能 | Gate |
|---|------|------|------|
| 2.1 | LLM 推理基础:prefill/decode, KV cache, memory wall | teach-concept | 算 13B KV cache 显存, 讲清 prefill 为何 compute-bound |
| 2.2 | PagedAttention:分页, block table, 碎片 | deep-dive + 读源码 | 画 block table, 讲清 vs naive KV 省显存机制 |
| 2.3 | Continuous Batching + Dynamic batching + iteration | deep-dive | 讲清 static batching 吞吐差, 画时序图 |
| 2.4 | Speculative Decoding / RadixAttention(SGLang)/ Prefix Cache | deep-dive | 对比 Eagle/draft, 讲清 SGLang 为何快 |
| 2.5 | 量化推理:W8A8/W4A16, AWQ/GPTQ, kernel 调用 | teach-concept + coding-exercise | 讲清 AWQ vs GPTQ, 跑 vLLM 量化推理 |
| 2.6 | 项目:改 vLLM(加调度策略 / hook) | build-with-me | PR 级改动, 能讲清改了什么为什么 |
| 2.7 | 源码周:vLLM scheduler.py + block_manager.py | deep-dive | 能画出 vLLM 一次 forward 的完整调用链 |
| 2.8 | Buffer:grill-me 推理方向高压 | grill-me | 通过 |

## Phase 3:训练 Infra(5 sessions + 1 buffer + 1 源码周)

| S | 主题 | 技能 | Gate |
|---|------|------|------|
| 3.1 | 数据并行 + ZeRO 1/2/3 | deep-dive + flashcards | 算 ZeRO-3 各 stage 显存, 画通信图 |
| 3.2 | Tensor Parallel:列并行/行并行, All-Reduce | deep-dive | 手推 TP 下 linear/attention 通信 |
| 3.3 | Pipeline Parallel + 1F1B + interleaved | deep-dive | 画 bubble 图, 算 bubble 比例 |
| 3.4 | Sequence Parallel / Ulysses / Context Parallel(长上下文) | deep-dive | 讲清 SP 与 TP 关系, 长上下文为何要 CP |
| 3.5 | 通信优化:NCCL, overlap, grad accumulation, bf16/fp8 | deep-dive | 讲清 compute/comm overlap, fp8 风险 |
| 3.6 | 项目:Megatron-LM 跑通小并行训练 | build-with-me | 跑通 TP+DP, 解释日志通信量 |
| 3.7 | 源码周:Megatron tensor_parallel.py + DeepSpeed zero_stage3.py | deep-dive | 能讲清 ZeRO-3 参数分片在代码里怎么实现 |
| 3.8 | Buffer:grill-me 训练方向高压 | grill-me | 通过 |

## Phase 4:系统/调度/网络(4 sessions + 1 buffer + 1 源码周)

| S | 主题 | 技能 | Gate |
|---|------|------|------|
| 4.1 | 集群调度:Slurm/K8s/Ray, gang scheduling, 弹性 | teach-concept | 讲清 gang scheduling 为何必要, Ray vs K8s |
| 4.2 | 网络:RDMA/RoCE/IB, NVLink, 拓扑, 拥塞控制 | deep-dive | 画胖树拓扑, 讲清 NCCL ring vs tree |
| 4.3 | 存储:checkpoint, 数据加载, P2P/分布式 FS | deep-dive | 讲清 checkpoint 写入瓶颈, resharding |
| 4.4 | 容错/成本:checkpoint 恢复, spot, MFU/HFU, 成本建模 | deep-dive | 算训练任务 $/token, 讲容错策略 |
| 4.5 | 源码周:NCCL 选段 + Ray scheduling | deep-dive | 能讲清 NCCL all-reduce ring 实现 |
| 4.6 | Buffer + 系统设计模拟:设计 LLM 推理平台 | interview-mode | 完成一道系统设计题 |

## Phase 5:面试冲刺(2 sessions)

| S | 主题 | 技能 | Gate |
|---|------|------|------|
| 5.1 | 高频题串讲 + 简历项目打磨 | interview-mode + handoff | 2 分钟讲清每个项目 |
| 5.2 | 模拟面试(2 轮) | interview-mode | 通过 grill-me 高级 tier |

---

## 6 个月节奏(每周 ~12h, 共 ~26 周)

| 周 | Phase |
|----|-------|
| 1-3 | Phase 0 |
| 4-9 | Phase 1(含 buffer)|
| 10-17 | Phase 2(含项目 + 源码周)|
| 18-25 | Phase 3(含项目 + 源码周)|
| 22-25 | Phase 4(含源码周)|
| 26 | Phase 5 冲刺 |

## Re-plan 触发

- Phase 1.1 概念验真若缺口 > 50% → Phase 1 再 +1 session 补概念
- 连续 2 gate 没过 → weak-area-tracker 定位 + 插补课
- 面试提前 → 砍 Phase 4 深度, 保 Phase 2/3
- goal 变化 → 重排

## Skill 使用节奏

- 新概念:teach-concept → flashcards
- 深机制:deep-dive + 读源码
- 手撕:coding-exercise + challenge-generator
- 复习:spaced-repetition + grill-me
- 项目:build-with-me
- 冲刺:interview-mode
