# Teaching Notes

## User Preferences
- **Language**: Chinese for explanations; mathematical terms in English where standard
- **Style**: Insight-first, not derivation-first. Every step should feel "inevitable", not clever
- **Pace**: 细水长流 — steady, long-term, no rush
- **Interaction**: Wants to ask followup questions freely

## Learning Philosophy (User's Own Words)
- "不希望讲解DDPM的推导，生硬地把他的巧妙塞入我的脑子"
- "希望巧妙来自一种有因可据的洞察，而不是神的灵机一动"
- Goal: "敏感到捕捉算法之间的底层数学原理，在高维层次中捕捉新算法"

## Known Background
- Has studied college math: linear algebra, probability, calculus
- Self-assessed retention: ~50%
- Comfortable with mathematical notation
- Can code (implied: AI algorithm engineer track)

---

## Lesson Design Rules (from L0001 feedback — "极其好")

These rules are mandatory for every future lesson. They were validated by user feedback as the right approach.

### 1. 从最基础的概念讲起（Assume Less）
- Don't assume the user remembers every prerequisite. Brief review of fundamentals before building up.
- Example: L0001 starts with "what is a PDF" before diving into score functions.
- A 3-sentence refresher is enough — it signals respect and builds confidence.

### 2. 每个公式出现之前必须有「为什么需要它」
- Never drop a formula without context. The pattern is: **Problem → "What mathematical object would solve this?" → Formula**.
- Counter-example to avoid: "The loss function is J(θ) = …" with no motivation.
- Correct pattern: "We want to minimize the MSE between predicted and true score. But the true score is unknown. Hyvärinen noticed that if we expand the square and do integration by parts…"

### 3. 推导的每一步标注理由
- Every derivation step gets a brief `// reason` annotation in plain language.
- Example:
  ```
  = ∇_x(log p̃(x) - log Z)    // log(a/b) = log a - log b
  = ∇_x log p̃(x) - 0          // log Z doesn't depend on x
  ```
- This prevents the "wall of equations" effect. The reader always knows WHY each step is valid.

### 4. 具体例子先行于抽象推广（Concrete → Abstract）
- Before stating a general theorem, hand-calculate a simple case.
- Example: L0001 computes the score of a 1D Gaussian step-by-step before discussing general properties.
- The concrete example serves as a mental anchor for the abstract concept.

### 5. 交互式可视化 + 可调参数
- Every lesson should have at least one interactive element (canvas, slider, click-to-explore).
- Adjustable parameters let the user test their intuition ("what happens if ε is too small?").
- Visualization should be tied to the math, not decorative.

### 6. 中途检查点（Checkpoint Questions）
- Insert brief "stop and think" questions within sections, not just at the end.
- These are not graded quizzes — they're prompts for the user to verify they're following before moving on.
- Format: `📍 停下来想一想：<question>` in a styled box.

### 7. 末尾逻辑链总结
- End with a numbered chain showing how each insight leads to the next.
- This reinforces the "有因可据" (traceable causality) philosophy.
- Example: L0001's 8-step chain from "Z is intractable" → "score matching" → "Langevin" → "DDPM".

### 8. 检索练习（Retrieval Practice）≥ 5 题
- At least 5 quiz questions at the end. Mix of:
  - Definition/understanding questions
  - Consequence/prediction questions ("what would happen if…")
  - Connection questions (linking multiple concepts)
- Each wrong answer gets an explanation of WHY it's wrong, not just "incorrect".
- Recommend spacing (come back after a few hours) for better retention.

### 9. 「为什么」优先于「是什么」
- For every key design choice in an algorithm, explicitly answer "why this specific choice?"
- Examples from L0001: Why ε/2? Why √ε noise? Why add noise at all?
- These are the questions that distinguish "understanding" from "memorizing".

### 10. 长度和深度
- Target: 35-45 minute reading time, ~800-1200 lines of HTML.
- Better to err on the side of more detail — user explicitly asked for this.
- A lesson that's "too short" can't build genuine insight; a lesson that's "too long" can still be skimmed.

### 11. 交叉引用
- Link to algorithm cards for prerequisite algorithm knowledge.
- Link to L0000 (landscape map) so the user always knows where they are.
- Link forward to the next lesson's probable topic.
- Link to external high-quality references (papers, books).
