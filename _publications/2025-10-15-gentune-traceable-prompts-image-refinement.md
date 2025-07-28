---
title: "GenTune: Toward Traceable Prompts to Improve Controllability of Image Refinement in Environment Design"
collection: publications
category: conferences
permalink: /publication/2025-gentune
excerpt: "UIST '25 full paper on traceable prompts for image refinement in environment design."
date: 2025-10-15
venue: 'UIST 2025'
paperurl: 'https://doi.org/10.1145/3746059.3747774'
citation: 'WenFan Wang, et al. (2025). "GenTune: Toward Traceable Prompts to Improve Controllability of Image Refinement in Environment Design." <i>UIST 2025</i>.'
header:
  image: UIST25_GenTune.png
  teaser: UIST25_GenTune.png
---

\
Environment designers in the entertainment industry create imaginative 2D and 3D scenes for games, films, and television, requiring both fine-grained control of specific details and consistent global coherence. Designers have increasingly integrated generative AI into their workflows, often relying on large language models (LLMs) to expand user prompts for text-to-image generation, then iteratively refining those prompts and applying inpainting. However, our formative study with 10 designers surfaced two key challenges: (1) the lengthy LLM-generated prompts make it difficult to understand and isolate the keywords that must be revised for specific visual elements; and (2) while inpainting supports localized edits, it can struggle with global consistency and correctness. 
Based on these insights, we present GenTune, an approach that enhances human–AI collaboration by clarifying how AI-generated prompts map to image content. Our GenTune system lets designers select any element in a generated image, trace it back to the corresponding prompt labels, and revise those labels to guide precise yet globally consistent image refinement. In a summative study with 20 designers, GenTune significantly improved prompt-image comprehension, refinement quality and efficiency, and overall satisfaction (all p < .01) compared to current practice. A follow-up field study with two studios further demonstrated its effectiveness in real-world settings.

