# AI 算法工程师必备数学 — Resources

## Knowledge

### Foundational Papers
- [Hyvärinen (2005) — "Estimation of Non-Normalized Statistical Models by Score Matching"](https://jmlr.org/papers/v6/hyvarinen05a.html)
  The paper that introduced score matching. Use for: understanding why score matching works, the original insight.
- [Song & Ermon (2019) — "Generative Modeling by Estimating Gradients of the Data Distribution"](https://arxiv.org/abs/1907.05600)
  Modern revival of score-based generative modeling. Use for: Langevin dynamics + score matching in practice.
- [Song et al. (2021) — "Score-Based Generative Modeling through Stochastic Differential Equations"](https://arxiv.org/abs/2011.13456)
  The SDE unification of score-based and diffusion models. Use for: seeing how diffusion and score models are the same thing.

### Books
- [Amari — _Information Geometry and Its Applications_](https://link.springer.com/book/10.1007/978-4-431-55978-8)
  The definitive text on information geometry. Use for: understanding the geometric structure of probability spaces, natural gradient, and why KL divergence is canonical.
- [Boyd & Vandenberghe — _Convex Optimization_](https://web.stanford.edu/~boyd/cvxbook/)
  The standard reference. Use for: optimization fundamentals, duality, and when to reach for specific optimization tools.
- [Murphy — _Probabilistic Machine Learning: An Introduction / Advanced Topics_](https://probml.github.io/pml-book/)
  Comprehensive ML textbook with strong probabilistic perspective. Use for: reference when connecting math to specific ML algorithms.

### Online
- [Lilian Weng's Blog — "What Are Diffusion Models?"](https://lilianweng.github.io/posts/2021-07-11-diffusion/)
  Clear exposition of diffusion models with good mathematical depth. Use for: connecting score-based and diffusion perspectives.
- [Colah's Blog](https://colah.github.io/)
  Exceptional mathematical visualization blog. Use for: building geometric intuition for neural networks and optimization.

## Wisdom (Communities)

- [r/MachineLearning](https://reddit.com/r/MachineLearning)
  High signal-to-noise for paper discussion. Use for: seeing how the community reacts to new algorithms.
- [Mathematics of ML Discord](https://discord.gg/math-of-ml) (if exists — verify)
  Use for: discussing mathematical underpinnings with other practitioners.

## Gaps
- A resource that systematically catalogs which mathematical structures underlie which algorithm families (e.g., "VAE → variational inference on latent variable models", "GAN → implicit generative modeling via adversarial optimization", "Diffusion → score matching + SDE") — this is what the lessons will build.
- Chinese-language resources of comparable quality to the English ones above.
