import { blogData } from '@/data/blog.js';
import { text, getLang } from '@/utils/langUtils.js';

function createBlogItem({ date, tag, title, excerpt, linkButton }) {
  const article = document.createElement('article');
  article.className =
    'bg-foreground p-8 hover:bg-foreground/95 transition-colors group cursor-pointer flex flex-col';

  article.innerHTML = `
    <div class="flex justify-between font-mono text-[10px] mb-12 opacity-50">
      <time>${date}</time>
      <span>${tag}</span>
    </div>
    <h3 class="text-2xl font-bold mb-6 group-hover:text-primary transition-transform leading-tight text-background">
      ${title}
    </h3>
    <p class="text-sm opacity-70 mb-8 flex-1 text-background">${excerpt}</p>
    <a href="#" class="text-xs font-bold uppercase tracking-widest border-b border-black hover:text-primary hover:border-primary pb-1 self-start text-background">
      ${linkButton}
    </a>
  `;
  return article;
}

export default function Blog() {
  const lang = getLang();
  const textLang = text('blog');
  const title = textLang.title.split(' ');

  const section = document.createElement('section');
  section.id = 'blog';
  section.className = 'min-h-screen py-32 md:py-40 lg:py-56 bg-foreground text-background';

  section.innerHTML = `
    <div class="container mx-auto max-w-7xl px-4 sm:px-6">
      <div class="flex flex-col md:flex-row justify-between mb-20 gap-8">
        <div>
          <p class="font-mono text-[10px] uppercase tracking-[0.3em] text-background/60 mb-6">
            [ 03 ] ${textLang.label}
          </p>
          <h2 class="text-5xl md:text-7xl font-display font-extrabold uppercase tracking-tighter leading-[0.9] text-background">
            ${title[0]}<br />
            <span class="font-serif italic font-normal normal-case">${title[1]}</span>
          </h2>
        </div>
        <p class="max-w-xs text-sm leading-relaxed border-l-2 border-black pl-6 pt-2 self-end text-background/80">
          ${textLang.description}
        </p>
      </div>

      <div class="flex justify-end mb-8">
        <a href="#/tulisan" class="font-mono text-[10px] uppercase tracking-[0.3em] border border-background px-4 py-2 hover:bg-primary hover:text-white transition-colors text-background">
          ${textLang.allButton} →
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-background/10 blog-list-container divide-y divide-background/20 md:divide-y-0 md:divide-x"></div>
    </div>
  `;

  const listContainer = section.querySelector('.blog-list-container');

  const limitedRecentBlogs = [...blogData]
    .sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO))
    .slice(0, 3);

  limitedRecentBlogs.forEach((item) => {
    const { title, excerpt, tag } = item.text[lang];

    const blogItem = createBlogItem({
      date: item.date,
      tag: tag,
      title: title,
      excerpt: excerpt,
      linkButton: textLang.blogLinkButton,
    });

    listContainer.appendChild(blogItem);
  });

  return section;
}
