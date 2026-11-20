// Edit your website here. Content adapted from content_ideas/CV.tex.
window.portfolio = {
  name: "Luke Staszewski",
  initials: "LS",
  photo: "assets/profile.jpeg",
  role: "Condensed matter physicist",
  headline: "A bit about me...",
  intro: "I’m a PhD candidate at the Max Planck Institute for the Physics of Complex Systems, developing numerical approaches to understand low-dimensional quantum materials.",
  location: "Dresden, Germany",
  availability: "PhD candidate",
  specialties: "Quantum materials / Numerical methods / Scientific software",
  about: [
    "I work on numerical techniques for low-dimensional quantum materials at the Max Planck Institute for the Physics of Complex Systems in Dresden, supervised by Alexander Wietek and Roderich Moessner.",
    "My research spans quantum many-body dynamics, stripe order, and driven systems. I contribute to XDiag, a high-performance C++ library for exact diagonalisation of quantum Hamiltonians.",
    "Before my PhD, I studied Physical Natural Sciences at King’s College, Cambridge, graduating with a BA and MSci and First Class results throughout. Alongside research, I teach mathematics and physics, including undergraduate practicals in German."
  ],
  skills: ["Python", "C++", "Julia", "Exact diagonalisation", "Numerical many-body methods", "German · B2 Telc"],
  showSampleNote: false,
  projects: [
    { title: "Quantum many-body dynamics", category: "Research", year: "2025–26", visual: "dynamics", description: "Quench dynamics, stripe order, and phase separation in the two-dimensional t–J model.", details: "My work with Alexander Wietek examines quench dynamics of stripes and phase separation in the two-dimensional t–J model. Published in Physical Review B 112, 035125 (2025).", tags: ["Quantum dynamics", "t–J model", "Exact diagonalisation"], url: "https://doi.org/10.1103/nfmp-32tt", linkLabel: "Read publication" },
    { title: "XDiag", category: "Software", year: "2026", visual: "code", description: "Contributing to high-performance exact diagonalisation for quantum many-body systems.", details: "I contribute to XDiag, a high-performance C++ library for exact diagonalisation of quantum Hamiltonians. The collaborative software publication appeared in SciPost Physics Codebases 70 (2026).", tags: ["C++", "Scientific computing", "Open source"], links: [
      { label: "Documentation", url: "https://awietek.github.io/xdiag/" },
      { label: "GitHub repository", url: "https://github.com/awietek/xdiag" },
      { label: "Software paper", url: "https://doi.org/10.21468/SciPostPhysCodeb.70" }
    ] },
    { title: "Driven quantum systems", category: "Research", year: "2024–26", visual: "floquet", description: "Krylov space dynamics, Floquet systems, and dynamical freezing.", details: "With collaborators, I study Krylov space dynamics of ergodic and dynamically frozen Floquet systems, published in Physical Review B 113, 165144 (2026). Related work investigates dynamical freezing in the thermodynamic limit.", tags: ["Floquet systems", "Krylov space", "Dynamical freezing"], url: "https://doi.org/10.1103/3vgd-y39w", linkLabel: "Read publication" }
  ],
  publications: [
    { title: "Quench dynamics of stripes and phase separation in the two-dimensional t–J model", authors: "L. Staszewski and A. Wietek", venue: "Physical Review B 112, 035125", year: "2025", url: "https://doi.org/10.1103/nfmp-32tt" },
    { title: "Krylov space dynamics of ergodic and dynamically frozen Floquet systems", authors: "L. Staszewski, A. Haldar, P. W. Claeys, and A. Wietek", venue: "Physical Review B 113, 165144", year: "2026", url: "https://doi.org/10.1103/3vgd-y39w" },
    { title: "XDiag: Exact Diagonalization for Quantum Many-Body Systems", authors: "A. Wietek, L. Staszewski, M. Ulaga, P. L. Ebert, H. Karlsson, S. Sarkar, L. Shackleton, A. Sinha, and R. D. Soares", venue: "SciPost Physics Codebases 70", year: "2026", url: "https://doi.org/10.21468/SciPostPhysCodeb.70" },
    { title: "Dynamical freezing in the thermodynamic limit: the strongly driven ensemble", authors: "A. Haldar, A. Das, S. Chaudhuri, L. Staszewski, A. Wietek, F. Pollmann, R. Moessner, and A. Das", venue: "arXiv:2410.11050", year: "2024", url: "https://arxiv.org/abs/2410.11050" },
    { title: "Excitonic Stripe Order in the Two-Orbital Hubbard–Kanamori Model", authors: "R. D. Soares†, L. Staszewski†, C. Feng, and A. Wietek · † Equal contribution", venue: "arXiv:2609.36051", year: "2026", url: "https://arxiv.org/abs/2609.36051" },
    { title: "Probing pairing spectra using Feshbach spectroscopy of the attractive Hubbard model", authors: "B. Oreg, C. Turnbaugh, L. Staszewski, M. Ulaga, J. Hertkorn, Z. Xu, A. Wietek, and M. Zwierlein", venue: "Manuscript in preparation", year: "", url: "" }
  ],
  experience: [
    { role: "Undergraduate teaching", company: "Technische Universität Dresden", period: "Oct 2024 — Present", description: "Supervising undergraduate physics practicals (Grundpraktikum II), taught in German." },
    { role: "Full-time tutor", company: "Mathematics & physics", period: "2021 — 2022", description: "Tutored from secondary to undergraduate level, including condensed matter physics, electromagnetism, fluid dynamics, and mathematical physics. Supported successful Cambridge and Oxford physics applicants." }
  ],
  education: [
    { title: "PhD candidate · Condensed Matter Physics", institution: "Max Planck Institute for the Physics of Complex Systems", period: "Oct 2022 — Present", details: "Supervisors: Alexander Wietek and Roderich Moessner. Research focus: numerical techniques for low-dimensional quantum materials." },
    { title: "BA & MSci · Physical Natural Sciences", institution: "University of Cambridge · King’s College", period: "2017 — 2021", details: "" },
    { title: "A-levels & GCSEs", institution: "Devonport High School for Boys", period: "2010 — 2017", details: "" }
  ],
  school: {
    title: "Les Houches, 2024",
    subtitle: "8th Les Houches School in Computational Physics",
    theme: "Variational approaches for quantum matter in and out of equilibrium",
    date: "10–21 June 2024 · Les Houches, France",
    description: "A school on numerical approaches to quantum many-body systems, covering tensor networks, variational Monte Carlo, semiclassical methods, and machine learning.",
    image: "assets/les-houches-2024.jpg",
    imageAlt: "Group photograph at the 2024 Les Houches school, with the Alps in the background",
    url: "https://comp-quant-2024.sciencesconf.org/?lang=en"
  },
  additional: [
    { title: "Schools & conferences", description: "GRC Superconductivity · Les Diablerets (2025); DPG Spring Meetings (2024–2026)." },
    { title: "Beyond research", description: "Duke of Edinburgh Award · Bronze, Silver, and Gold." }
  ],
  contactIntro: "For research discussions, collaborations, or questions about my work, please get in touch.",
  email: "lstaszewski@pks.mpg.de",
  social: [{ label: "XDiag on GitHub", url: "https://github.com/awietek/xdiag" }]
};
