const data = window.portfolio;
const byId = (id) => document.getElementById(id);
const text = (id, value) => { byId(id).textContent = value; };
const element = (tag, className, value) => { const el = document.createElement(tag); if (className) el.className = className; if (value !== undefined) el.textContent = value; return el; };
const safeUrl = (value) => { try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; } catch { return ''; } };
text('monogram', data.initials); text('portrait-mark', data.initials); text('header-name', data.name); text('profile-name', data.name);
text('role', data.role); text('profile-role', data.role); text('hero-title', data.headline); text('location', data.location); text('availability', data.availability); text('hero-specialties', data.specialties);
document.title = `${data.name} — Condensed Matter Physics`;
if (data.photo) { const photo = element('img', 'profile-photo'); photo.src = data.photo; photo.alt = data.name; photo.width = 2633; photo.height = 4096; byId('portrait-mark').replaceChildren(photo); byId('portrait-mark').removeAttribute('aria-hidden'); }
document.querySelector('meta[name="description"]').content = data.intro;
for (const paragraph of data.about) byId('about-copy').append(element('p', '', paragraph));
for (const skill of data.skills) byId('skills').append(element('span', 'tag', skill));
const previews = {
  dynamics: '<div class="research-art lattice-art"><span>QUANTUM MANY-BODY DYNAMICS</span><div class="lattice"></div><strong>Patterns in quantum matter.</strong></div>',
  code: '<div class="research-art code-art"><span>OPEN-SOURCE SCIENTIFIC SOFTWARE</span><strong>XDiag<span>Exact diagonalisation.</span></strong><div class="code-lines">Hamiltonians. Symmetries.<br>Quantum many-body systems.</div></div>',
  floquet: '<div class="research-art floquet-art"><span>DRIVEN QUANTUM SYSTEMS</span><div class="wave-art">∿ ∿ ∿</div><strong>Dynamics beyond equilibrium.</strong></div>',
  workspace: '<div class="mini-app"><div class="mini-sidebar"><i></i><b></b><b></b><b></b><b></b></div><div class="mini-main"><span class="mini-caption">YOUR SPACE, SIMPLIFIED</span><strong>A little more focus.</strong><div class="mini-panels"><div><i></i><b></b><b></b></div><div><i></i><b></b><b></b></div></div><div class="mini-line"></div><div class="mini-line short"></div></div></div>',
  system: '<div class="system-art"><div class="type-tile">Aa<span>FORM & FUNCTION</span></div><div class="swatches"><i></i><i></i><i></i><i></i></div><div class="component-tile"><span>Less, but better.</span><div><b></b><i></i></div></div></div>',
  editorial: '<div class="editorial-art"><div class="editorial-top">FIELDNOTES<span>A PLACE FOR IDEAS</span></div><div class="editorial-body"><strong>Make room<br>for a different<br>perspective.</strong><div class="editorial-shape"></div></div><div class="editorial-bottom"><i></i><i></i><i></i></div></div>'
};
const dialog = byId('project-dialog');
function openProject(project) {
  text('dialog-category', `${project.category} · ${project.year}`); text('dialog-title', project.title); text('dialog-description', project.details);
  byId('dialog-tags').replaceChildren(...project.tags.map(tag => element('span', 'tag', tag)));
  const links = project.links || [{ label: project.linkLabel || 'Visit project', url: project.url }];
  const actions = byId('dialog-links');
  actions.replaceChildren();
  for (const item of links) {
    const url = safeUrl(item.url);
    if (!url) continue;
    const link = element('a', `button ${actions.children.length === 0 ? 'primary' : 'secondary'}`, item.label);
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    actions.append(link);
  }
  dialog.showModal();
}
const filters = ['All work', ...new Set(data.projects.map(project => project.category))];
function renderProjects(filter) {
  byId('projects').replaceChildren();
  for (const project of data.projects.filter(p => filter === 'All work' || p.category === filter)) {
    const card = element('button', 'project-card'); card.type = 'button'; card.setAttribute('aria-label', `Read about ${project.title}`);
    const preview = element('div', `project-preview ${project.visual}`); preview.setAttribute('aria-hidden', 'true'); preview.innerHTML = previews[project.visual] || previews.workspace;
    const info = element('div', 'project-info'); const meta = element('div', 'project-meta'); meta.append(element('span', '', project.category), element('span', '', project.year));
    info.append(meta, element('h3', '', project.title), element('p', '', project.description), element('span', 'project-more', 'View project +'));
    card.append(preview, info); card.addEventListener('click', () => openProject(project)); byId('projects').append(card);
  }
  for (const button of byId('filters').children) button.setAttribute('aria-pressed', String(button.textContent === filter));
}
for (const filter of filters) { const button = element('button', '', filter); button.type = 'button'; button.addEventListener('click', () => renderProjects(filter)); byId('filters').append(button); }
renderProjects('All work');
byId('sample-note').hidden = !data.showSampleNote;
for (const item of data.experience) {
  const article = element('article', 'timeline-item'); const head = element('div', 'timeline-head'); head.append(element('h3', '', item.role), element('span', 'period', item.period));
  article.append(head, element('p', 'company', item.company), element('p', 'experience-description', item.description)); byId('timeline').append(article);
}
for (const item of data.education) { const article = element('article', 'education-item'); article.append(element('span', 'period', item.period), element('h3', '', item.title), element('p', 'company', item.institution)); if (item.details) article.append(element('p', 'experience-description', item.details)); byId('education').append(article); }
text('contact-intro', data.contactIntro);
if (data.email) { const email = element('a', 'email-link', data.email); email.href = `mailto:${data.email}`; byId('contact-links').append(email); }
else byId('contact-links').append(element('span', 'email-placeholder', 'Your email goes here'));
const socialLinks = element('div', 'social-links');
for (const social of data.social) { const url = safeUrl(social.url); if (!url) continue; const link = element('a', '', social.label); link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; socialLinks.append(link); }
byId('contact-links').append(socialLinks);
text('copyright', `© ${new Date().getFullYear()} ${data.name}`);
byId('print-cv')?.addEventListener('click', () => window.print());
byId('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });

for (const paper of data.publications || []) {
  const article = element('article', 'publication');
  article.append(element('span', 'period', paper.year));
  const body = element('div', 'publication-body');
  const heading = element('h3'); const url = safeUrl(paper.url);
  if (url) { const link = element('a', '', paper.title); link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; heading.append(link); } else heading.textContent = paper.title;
  body.append(heading, element('p', 'publication-authors', paper.authors), element('p', 'publication-venue', paper.venue)); article.append(body); byId('publication-list').append(article);
}
for (const item of data.additional || []) { const article = element('article'); article.append(element('h3', '', item.title), element('p', '', item.description)); byId('additional').append(article); }

if (data.school) {
  const school = data.school;
  const heading = element('div', 'section-heading');
  const titles = element('div');
  const title = element('h2', '', school.title); title.id = 'school-title';
  titles.append(element('p', 'eyebrow', 'Learning & community'), title); heading.append(titles);
  const figure = element('figure', 'school-feature');
  const image = element('img', 'school-photo'); image.src = school.image; image.alt = school.imageAlt;
  image.width = 1800; image.height = 1200; image.loading = 'lazy'; image.decoding = 'async';
  const caption = element('figcaption', 'school-caption');
  const info = element('div');
  info.append(element('p', 'eyebrow', school.date), element('h3', '', school.subtitle), element('p', 'school-theme', school.theme), element('p', 'school-description', school.description));
  caption.append(info);
  const url = safeUrl(school.url);
  if (url) { const link = element('a', 'button secondary', 'School website'); link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; caption.append(link); }
  figure.append(image, caption); byId('school').append(heading, figure);
} else byId('school').hidden = true;
