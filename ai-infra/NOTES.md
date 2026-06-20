# Teaching Notes

## Learner preferences
- 先概念后代码。概念扎实再动手写。
- 概念讲完先做"概念检查"(心里回答),再写代码。
- 不要一节塞 >2 个重概念。Phase 0.1 已拆成 0.1a (Linux/epoll) + 0.1b (Python 并发)。

## Key intermediate state
- **CUDA 半吊子**:懂概念、不会写。风险:听得懂讲得出,一写就废,面试手撕露馅。
  对策:Phase 1 不讲概念,用 check-understanding 验真 + 立刻落代码。1.1 不要跳。

## Pacing
- 6 个月版,每 phase 多 1 周读源码。详见 roadmap.md。

## What works
- HTML lesson 需要自包含、足够详细,不能只放概念提纲。每一行代码都要拆开解释。
- 类比（银行取号、毛坯房装修营业厅、邮局投递）效果好。

## Lesson 0001 feedback (2026-06-20)
- 用户反馈: 原版 0001 太简略, select/poll/epoll 的代码看不懂。
- 调整: 重写为 "socket→accept 全链路", 不讲 select。
- 原则: 一个 lesson = 一个可跑通的心智模型。不赶进度。

## What doesn't
- (记录无效手法)
