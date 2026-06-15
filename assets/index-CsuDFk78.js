var e=(e,t)=>()=>(e&&(t=e(e=0)),t),t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=e((()=>{})),r,i=e((()=>{r={en:{flag:`🇺🇸`,label:`EN`,full:`English`,pageTitle:`Dhaboav's Website`,navbar:{home:`Home`,about:`About`,projects:`Projects`,experience:`Experience`,contact:`Let's talk`},hero:{greet:`Hi, I'm`,tagline:`Passionate about robotics and computer vision, developing smart systems that see and act.`,viewWork:`View work`,getInTouch:`Get in touch`},about:{label:`About`,title:`Building with purpose`,p1:`I'm passionate about robotics and computer vision. Building systems that see, interpret, and respond to the world around them. I believe in keeping things simple, robust, and meaningful.`,p2:`When I'm not writing code, you'll probably find me reading a good book, grinding through a game, or binge-watching anime.`,resume:`Resume`,resumeFile:`resume`,techLabel:`Tech Stack`},projects:{title:`Selected work`,label:`Projects`,repo:`Repository`},experience:{title:`Experience`},contact:{label:`Contact`,title:`Let's connect`,subtitle:`Have a project in mind or just want to chat? I'd love to hear from you.`,namePlaceholder:`Name`,emailPlaceholder:`Email`,messagePlaceholder:`Message`,send:`Send message`,loading:`Sending...`,success:`Message sent successfully!`,failure:`Failed to send message.`}},id:{flag:`🇮🇩`,label:`ID`,full:`Indonesia`,pageTitle:`Website Dhaboav`,navbar:{home:`Beranda`,about:`Tentang`,projects:`Proyek`,experience:`Pengalaman`,contact:`Mari terhubung`},hero:{greet:`Hai, saya`,tagline:`Berfokus pada robotika dan computer vision, mengembangkan sistem pintar yang dapat melihat dan bertindak.`,viewWork:`Lihat karya`,getInTouch:`Hubungi saya`},about:{label:`Tentang`,title:`Membangun dengan tujuan`,p1:`Saya tertarik pada robotika dan computer vision. Membangun sistem yang dapat melihat, memahami, dan merespons dunia di sekitarnya.`,p2:`Saat tidak ngoding, saya biasanya membaca buku, bermain game, atau menonton anime.`,resume:`resume`,resumeFile:`resume-id`,techLabel:`Tumpukan Teknologi`},projects:{title:`Karya pilihan`,label:`Proyek`,repo:`Repositori`},experience:{title:`Pengalaman`},contact:{label:`Kontak`,title:`Terhubung`,subtitle:`Punya proyek atau sekadar ingin berbicara? Saya siap mendengarkan.`,namePlaceholder:`Nama`,emailPlaceholder:`Email`,messagePlaceholder:`Pesan`,send:`Kirim pesan`,loading:`Mengirim...`,success:`Pesan berhasil dikirim!`,failure:`Gagal mengirim pesan.`}},jp:{flag:`🇯🇵`,label:`JP`,full:`日本語`,pageTitle:`Dhaboavのウェブサイト`,navbar:{home:`ホーム`,about:`概要`,projects:`プロジェクト`,experience:`経験`,contact:`話しましょう`},hero:{greet:`こんにちは、私は`,tagline:`ロボティクスとコンピュータビジョンに情熱を持ち、見て判断し行動するスマートシステムを開発しています。`,viewWork:`作品を見る`,getInTouch:`連絡する`},about:{label:`概要`,title:`目的を持って作る`,p1:`私はロボット工学とコンピュータビジョンに情熱があります。世界を見て理解し反応するシステムを作ることを追求しています。`,p2:`コードを書いていないときは、本を読んだりゲームをしたりアニメを見ています。`,resume:`履歴書`,resumeFile:`resume`,techLabel:`技術スタック`},projects:{title:`選ばれた作品`,label:`プロジェクト`,repo:`リポジトリ`},experience:{title:`経験`},contact:{label:`連絡先`,title:`つながりましょう`,subtitle:`相談やお話があれば、ぜひご連絡ください。`,namePlaceholder:`名前`,emailPlaceholder:`メールアドレス`,messagePlaceholder:`メッセージ`,send:`送信`,loading:`送信中...`,success:`メッセージが正常に送信されました！`,failure:`メッセージの送信に失敗しました。`}}}}));function a(){return localStorage.getItem(`site-lang`)||`en`}function o(){let e=a();document.documentElement.lang=e,document.title=r[e].title||`Dhaboav's Website`}function s(e){return r[a()][e]||{}}var c=e((()=>{i()}));function l(){let e=s(`navbar`),t=document.createElement(`header`);t.className=`
        fixed left-0 right-0 z-50 backdrop-blur-sm bg-black/60 border-b border-transparent
        transition-all duration-300
    `,t.innerHTML=`
        <div class="container mx-auto max-w-7xl px-4 sm:px-6">
            <nav class="flex h-16 items-center justify-between">

                <!-- LOGO -->
                <a href="#home" class="py-4">
                    <i class="bx bx-fire bx-lg text-3xl text-primary"></i>
                </a>

                <!-- HAMBURGER (mobile only) -->
                <button id="nav-toggle" class="block text-white text-3xl sm:hidden">
                    <i class="bx bx-menu"></i>
                </button>

                <!-- DESKTOP MENU -->
                <div class="hidden sm:flex items-center gap-8">
                    <a href="#home" class="link-underline text-sm text-zinc-400 hover:text-white">${e.home}</a>
                    <a href="#about" class="link-underline text-sm text-zinc-400 hover:text-white">${e.about}</a>
                    <a href="#projects" class="link-underline text-sm text-zinc-400 hover:text-white">${e.projects}</a>
                    <a href="#experience" class="link-underline text-sm text-zinc-400 hover:text-white">${e.experience}</a>
                </div>

                <!-- DESKTOP CTA -->
                <a href="#contact" class="hidden sm:block text-sm font-medium text-primary hover:text-white">
                    ${e.contact}
                </a>
            </nav>

            <!-- MOBILE MENU -->
            <div id="mobile-menu"
                class="hidden flex-col gap-4 rounded-lg p-6 text-zinc-300 shadow-xl sm:hidden
                       transition-all duration-300">
                
                <a href="#home" class="text-sm hover:text-white">${e.home}</a>
                <a href="#about" class="text-sm hover:text-white">${e.about}</a>
                <a href="#projects" class="text-sm hover:text-white">${e.projects}</a>
                <a href="#experience" class="text-sm hover:text-white">${e.experience}</a>
                <a href="#contact" class="text-sm font-medium text-primary hover:text-white">
                    ${e.contact}
                </a>

            </div>
        </div>
    `;let n=t.querySelector(`#nav-toggle`),r=t.querySelector(`#mobile-menu`);function i(){r.classList.add(`hidden`),r.classList.remove(`flex`),n.innerHTML=`<i class="bx bx-menu"></i>`}function a(){r.classList.remove(`hidden`),r.classList.add(`flex`),n.innerHTML=`<i class="bx bx-x"></i>`}return n.addEventListener(`click`,e=>{e.stopPropagation(),r.classList.contains(`flex`)?i():a()}),document.addEventListener(`click`,e=>{r.classList.contains(`flex`)&&!r.contains(e.target)&&!n.contains(e.target)&&i()}),t}var u=e((()=>{c()}));function d(){let e=s(`hero`),t=document.createElement(`section`);return t.id=`home`,t.className=`flex min-h-screen items-center bg-black pt-20 sm:pt-28 lg:pt-28`,t.innerHTML=`
        <div class="container mx-auto max-w-7xl px-4">
            <div class="flex flex-wrap items-center">
                
                <!-- TEXT SECTION -->
                <div class="w-full px-4 mb-12 lg:mb-0 lg:w-1/2">
                    <p class="animate-fade-in mb-4 font-mono text-xs text-primary sm:text-sm">
                        ${e.greet}
                    </p>

                    <h1 class="animate-fade-in-delay-1 mb-6 text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Dhammiko Bodhi Avatara
                    </h1>

                    <p class="animate-fade-in-delay-2 mb-8 text-base font-light leading-relaxed text-zinc-400 sm:text-lg lg:text-xl">
                        ${e.tagline}
                    </p>

                    <div class="animate-fade-in-delay-3 flex items-center gap-6">
                        <a href="#projects" class="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-primary">
                            ${e.viewWork} <span class="text-lg">→</span>
                        </a>

                        <a href="#contact" class="link-underline text-sm text-zinc-400 transition-colors hover:text-white">
                            ${e.getInTouch}
                        </a>
                    </div>
                </div>

                <!-- IMAGE SECTION -->
                <div class="relative w-full px-4 lg:w-1/2 flex justify-center lg:justify-end">
                    <div class="relative">
                        <img 
                            src="img/profile.png" 
                            alt="Dhammiko" 
                            class="relative z-10 mx-auto max-w-xs sm:max-w-sm lg:max-w-full lg:-mt-8"
                        />

                        <span class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 scale-75 sm:scale-100 md:scale-125">
                            <svg class="h-64 w-64 sm:h-72 sm:w-72" viewBox="0 0 200 200">
                                <path 
                                    fill="#ea580c" 
                                    d="M50.5,-71.2C62,-61.2,65.6,-41.8,66.6,-24.9C67.5,-8,65.9,6.4,63,22C60.1,37.6,55.9,54.4,45.2,60.3C34.4,66.2,17.2,61.3,2.4,58C-12.5,54.8,-25,53.1,-36.7,47.5C-48.4,42,-59.3,32.4,-66.7,19.4C-74.2,6.3,-78.1,-10.2,-74.3,-24.9C-70.5,-39.6,-59.1,-52.5,-45.4,-61.9C-31.7,-71.2,-15.9,-76.9,1.8,-79.4C19.5,-81.9,39,-81.2,50.5,-71.2Z"
                                    transform="translate(100 100)"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    `,t}var f=e((()=>{c()})),p,m=e((()=>{p=[`Python`,`OpenCV`,`FastAPI`,`MySQL`,`React`,`Tailwind`,`Docker`]}));function h(e=[]){let t=document.createElement(`div`);return t.className=`flex flex-wrap gap-3 mt-4`,e.forEach(e=>{let n=document.createElement(`span`);n.className=`rounded-sm bg-primary px-3 py-1.5 font-mono text-sm text-white`,n.textContent=e,t.appendChild(n)}),t}function g(){let e=s(`about`),t=document.createElement(`section`);t.id=`about`,t.className=`min-h-screen bg-zinc-900 py-24 sm:py-32 md:py-40 lg:py-56`,t.innerHTML=`
        <div class="container mx-auto max-w-7xl px-4 sm:px-6">
            <div class="grid gap-16 md:grid-cols-2 lg:gap-24">

                <!-- LEFT COLUMN -->
                <div>
                    <p class="mb-4 font-mono text-[11px] uppercase tracking-wider text-zinc-500 sm:text-xs">
                        ${e.label}
                    </p>

                    <h2 class="mb-6 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
                        ${e.title}
                    </h2>

                    <div class="space-y-4 leading-relaxed text-zinc-400 text-sm sm:text-base">
                        <p>
                            ${e.p1}
                        </p>
                        <p>
                            ${e.p2}
                        </p>
                    </div>

                    <a href="other/${e.resumeFile}.pdf"
                      download="Resume Dhammiko Bodhi Avatara"
                      class="mt-8 inline-flex items-center gap-2 border-2 border-transparent rounded-md bg-primary px-4 py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:border-primary hover:text-black hover:shadow-lg">
                        <i class="bx bx-save text-lg"></i> ${e.resume}
                    </a>
                </div>

                <!-- RIGHT COLUMN -->
                <div>
                    <p class="mb-3 font-mono text-[11px] uppercase tracking-wider text-zinc-500 sm:text-xs">
                        ${e.techLabel}
                    </p>
                    <!-- TechStack will be inserted here -->
                </div>
            </div>
        </div>
    `;let n=h(p);return t.querySelector(`div.grid > div:nth-child(2)`).appendChild(n),t}var _=e((()=>{m(),c()})),v,y=e((()=>{v=[{image:`img/basestation.png`,link:`https://github.com/dhaboav/robot-basestation`,text:{en:{title:`Basestation Robot Controller`,description:`A Python-built basestation used to control robots through a local network.`},id:{title:`Pengendali Robot Basestation`,description:`Basestation berbasis Python untuk mengendalikan robot melalui jaringan lokal.`},jp:{title:`ベースステーションロボットコントローラ`,description:`ローカルネットワークでロボットを制御するためのPythonベースのステーションです。`}}},{image:`img/bookshelf.png`,link:`https://github.com/dhaboav/bookshelf`,text:{en:{title:`Simple Personal Bookshelf App`,description:`A responsive web app using React, FastAPI, and Docker able to run CRUD operation.`},id:{title:`Aplikasi Sederhana Rak buku`,description:`Aplikasi web dengan React, FastAPI, dan Docker yang bisa menjalankan CRUD sederhana untuk buku`},jp:{title:`シンプルな個人用本棚アプリ`,description:`React、FastAPI、および Docker を使用した、CRUD 操作が可能なレスポンシブな Web アプリ。`}}},{image:`img/login.png`,link:`https://github.com/dhaboav/college-web-login`,text:{en:{title:`Simple Login Website`,description:`A web app using HTML, CSS, PHP, and MySQL with role-based access.`},id:{title:`Website Login Sederhana`,description:`Aplikasi web dengan HTML, CSS, PHP, MySQL dan akses berbasis peran.`},jp:{title:`シンプルなログインサイト`,description:`HTML、CSS、PHP、MySQL を使用したロールベースアクセスの Web アプリ。`}}}]}));function b({title:e,description:t,image:n,link:r,repo:i}){let a=document.createElement(`div`);return a.className=`w-full px-4 mb-8 sm:w-1/2 lg:w-1/3`,a.innerHTML=`
        <div class="flex h-full flex-col overflow-hidden rounded-xl bg-zinc-900 shadow-md transition-shadow lg:hover:shadow-primary">
            <img src="${n}" alt="${e}"
                 class="h-48 w-full object-cover sm:h-56 lg:h-64" />

            <div class="flex flex-col justify-between px-5 py-6">
                <div>
                    <h3 class="mb-3 text-lg font-semibold text-white sm:text-xl sm:truncate">
                        ${e}
                    </h3>

                    <p class="mb-6 text-sm font-medium text-gray-400 sm:text-base">
                        ${t}
                    </p>

                    <a href="${r}" target="_blank"
                       class="block w-full rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-white hover:opacity-80">
                        ${i}
                    </a>
                </div>
            </div>
        </div>
    `,a}function x(){let e=a(),t=s(`projects`),n=document.createElement(`section`);n.id=`projects`,n.className=`bg-black py-20 sm:py-28 md:py-32`,n.innerHTML=`
        <div class="container mx-auto max-w-7xl px-4 sm:px-6">

            <div class="mb-12 sm:mb-16">
                <p class="mb-3 font-mono text-[11px] uppercase tracking-wider text-zinc-500 sm:text-xs">
                    ${t.label}
                </p>

                <h2 class="text-2xl font-medium tracking-tight text-white sm:text-3xl md:text-4xl">
                    ${t.title}
                </h2>
            </div>

            <div class="flex flex-wrap -mx-4 projects-list"></div>
        </div>
    `;let r=n.querySelector(`.projects-list`);return v.forEach(n=>{let{image:i,link:a}=n,{title:o,description:s}=n.text[e];r.appendChild(b({title:o,description:s,image:i,link:a,repo:t.repo}))}),n}var S=e((()=>{y(),c()})),C,w=e((()=>{C=[{company:`University of Tanjungpura`,text:{en:{role:`B.S. in Computer Science`,period:`2021 — 2025`,description:`Fresh graduate majoring in Computer Science with a specialization in Computer Vision.`},id:{role:`S1 Informatika`,period:`2021 — 2025`,description:`Mempelajari Ilmu Komputer dengan fokus pada computer vision.`},jp:{role:`コンピュータサイエンス学士（新卒）`,period:`2021年 — 2025年`,description:`コンピュータビジョンを中心に計算機科学を専攻。`}}},{company:`PKM`,text:{en:{role:`Computer Vision Researcher`,period:`2024`,description:`Researched citrus ripeness using a Raspberry Pi camera to detect skin color.`},id:{role:`Peneliti Computer Vision`,period:`2024`,description:`Meneliti tingkat kematangan jeruk menggunakan kamera Raspberry Pi untuk mendeteksi warna kulit buah.`},jp:{role:`コンピュータビジョン研究者`,period:`2024年`,description:`Raspberry Pi カメラを用いて果皮の色を検出し、柑橘類の熟度を研究。`}}},{company:`Eon Terigas`,text:{en:{role:`Team Leader`,period:`2023 — 2024`,description:`Oversaw a small team to execute projects and achieve competitive goals.`},id:{role:`Ketua Tim`,period:`2023 — 2024`,description:`Memimpin tim kecil untuk menyelesaikan proyek dan mencapai target kompetitif.`},jp:{role:`チームリーダー`,period:`2023年 — 2024年`,description:`小規模チームを指揮し、プロジェクト遂行および競技目標の達成を担当。`}}},{company:`Eon Terigas`,text:{en:{role:`Robotics Vision Engineer`,period:`2022 — 2023`,description:`Developed computer vision systems for robots to detect objects.`},id:{role:`Insinyur Robotics Vision`,period:`2022 — 2023`,description:`Mengembangkan sistem computer vision pada robot untuk mendeteksi objek.`},jp:{role:`ロボティクスビジョンエンジニア`,period:`2022年 — 2023年`,description:`ロボットの物体検出のためのコンピュータビジョンシステムを開発。`}}}]}));function T({role:e,company:t,period:n,description:r}){let i=document.createElement(`div`);return i.className=`relative pl-6 sm:pl-8`,i.innerHTML=`
        <div class="absolute left-0 top-2 h-2 w-2 -translate-x-[2px] rounded-full bg-primary sm:-translate-x-[3px]"></div>
        
        <div class="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 class="text-sm sm:text-base font-medium text-primary">
                ${e}
                <span class="font-normal text-zinc-400"> @ ${t}</span>
            </h3>
            <span class="font-mono text-[10px] sm:text-xs text-zinc-500">${n}</span>
        </div>

        <p class="text-sm text-zinc-400 leading-relaxed">${r}</p>
    `,i}function E(){let e=a(),t=s(`experience`),n=document.createElement(`section`);n.id=`experience`,n.className=`bg-zinc-900 py-20 sm:py-28 md:py-32`,n.innerHTML=`
        <div class="container mx-auto max-w-7xl px-4 sm:px-6">

            <!-- Title -->
            <div class="mb-12 sm:mb-16">
                <h2 class="text-2xl font-medium tracking-tight text-white sm:text-3xl md:text-4xl">
                    ${t.title}
                </h2>
            </div>

            <!-- Timeline -->
            <div class="max-w-2xl">
                <div class="relative">
                    <div class="absolute left-[3px] top-2 bottom-2 w-px bg-zinc-800 sm:left-0"></div>
                    <div class="space-y-10 sm:space-y-12 experience-list"></div>
                </div>
            </div>
        </div>
    `;let r=n.querySelector(`.experience-list`);return C.forEach(t=>{let{role:n,period:i,description:a}=t.text[e];r.appendChild(T({role:n,company:t.company,period:i,description:a}))}),n}var D=e((()=>{w(),c()}));function O(){let e=s(`contact`),t=document.createElement(`section`);t.id=`contact`,t.className=`bg-black py-20 text-white sm:py-28 md:py-32`,t.innerHTML=`
        <div class="container mx-auto px-4">

            <!-- SECTION HEADER -->
            <div class="mx-auto mb-12 max-w-md text-center sm:mb-14 md:mb-16">
                <p class="text-muted-foreground mb-3 font-mono text-[10px] uppercase tracking-wider sm:text-xs">
                    ${e.label}
                </p>

                <h2 class="mb-3 text-xl font-medium tracking-tight sm:text-2xl md:text-3xl">
                    ${e.title}
                </h2>

                <p class="text-muted-foreground text-sm sm:text-base">
                    ${e.subtitle}
                </p>
            </div>

            <!-- FORM -->
            <div class="mx-auto max-w-sm sm:max-w-md">
                <form id="contact-form" class="mb-10 space-y-5 sm:space-y-6">
                    <div>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="${e.namePlaceholder}" 
                            required
                            class="w-full border-0 border-b border-gray-600 bg-transparent px-0 py-3 placeholder:text-muted-foreground focus:border-primary focus:outline-hidden"
                        />
                    </div>

                    <div>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="${e.emailPlaceholder}" 
                            required
                            class="w-full border-0 border-b border-gray-600 bg-transparent px-0 py-3 placeholder:text-muted-foreground focus:border-primary focus:outline-hidden"
                        />
                    </div>

                    <div>
                        <textarea 
                            name="message"
                            placeholder="${e.messagePlaceholder}" 
                            rows="4" 
                            required
                            class="w-full resize-none border-0 border-b border-gray-600 bg-transparent px-0 py-3 placeholder:text-muted-foreground focus:border-primary focus:outline-hidden"
                        ></textarea>
                    </div>

                    <!-- SUBMIT BUTTON -->
                    <button 
                        id="submit-btn"
                        type="submit"
                        class="w-full bg-white py-3 text-sm font-medium text-black transition-colors hover:bg-white/90 flex items-center justify-center gap-2"
                    >
                        <span id="btn-text">${e.send}</span>
                    </button>
                </form>

                <!-- ICON LINKS -->
                <div class="flex items-center justify-center gap-4 sm:gap-6">
                    <a href="https://github.com/dhaboav" class="transition-colors hover:text-gray-600 text-2xl">
                        <i class="bxl bx-github"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/dhaboav" class="transition-colors text-2xl hover:text-blue-600">
                        <i class="bxl bx-linkedin"></i>
                    </a>

                    <a href="https://www.instagram.com/dhaboav?igsh=MTJoZjk0bTZpYjY1Nw==" class="transition-colors hover:text-pink-600 text-2xl">
                        <i class="bxl bx-instagram"></i>
                    </a>
                </div>
            </div>
        </div>

        <!-- NOTIFICATION -->
        <div id="notification" 
            class="hidden fixed bottom-6 right-6 rounded-lg px-4 py-3 text-sm 
                   bg-zinc-900 border border-zinc-700 shadow-lg opacity-0 
                   transition-opacity duration-300">
        </div>
    `;let n=t.querySelector(`#contact-form`),r=t.querySelector(`#submit-btn`),i=t.querySelector(`#btn-text`),a=t.querySelector(`#notification`);function o(e,t=!0){a.textContent=e,a.classList.remove(`hidden`),a.classList.remove(`opacity-0`),a.classList.add(t?`text-green-400`:`text-red-400`),setTimeout(()=>{a.classList.add(`opacity-100`)},10),setTimeout(()=>{a.classList.remove(`opacity-100`),setTimeout(()=>a.classList.add(`hidden`),300)},4e3)}return n.addEventListener(`submit`,async t=>{t.preventDefault(),i.textContent=e.loading,r.disabled=!0,r.classList.add(`opacity-70`);let a=document.createElement(`span`);a.className=`animate-spin border-2 border-black border-t-transparent rounded-full w-4 h-4`,r.prepend(a);try{let t=new FormData(n);(await fetch(k,{method:`POST`,body:t})).ok?(o(`${e.success}`,!0),n.reset()):o(`${e.failure}`,!1)}catch(e){o(`Error: ${e}`,!1)}a.remove(),i.textContent=e.send,r.disabled=!1,r.classList.remove(`opacity-70`)}),t}var k,A=e((()=>{c(),k=`https://script.google.com/macros/s/AKfycbxMpAHVtSNb-KGhAuOIn5qZ5cyVvCbZ4PS0lL3mPyRUre53DNWfWBmlHi9ZfyUGPQKl/exec`}));function j(){let e=document.createElement(`footer`);e.className=`
        border-t border-zinc-800 bg-black 
        py-8 sm:py-10 text-white
    `;let t=a();e.innerHTML=`
        <div class="container mx-auto max-w-7xl px-4 sm:px-6">
            <div
                class="flex flex-col items-center justify-center gap-4 
                text-center text-xs text-zinc-500
                sm:flex-row sm:justify-between sm:gap-0 sm:text-sm"
            >
                <p class="font-mono">© 2025 Dhammiko Bodhi Avatara</p>

                <div class="relative">
                    <button
                        id="lang-btn"
                        class="flex items-center gap-2 px-3 py-2 text-sm
                        border border-zinc-700 rounded-lg
                        hover:bg-zinc-800 active:scale-95 transition"
                    >
                        <span id="lang-flag" class="text-lg">${r[t].flag}</span>
                        <span id="lang-code" class="font-medium">${r[t].label}</span>
                        <i class="bx bx-chevron-up text-lg opacity-80"></i>
                    </button>

                    <div
                        id="lang-menu"
                        class="absolute right-0 bottom-[115%] hidden w-40
                        rounded-lg bg-zinc-900 shadow-lg border border-zinc-700 overflow-hidden"
                    >
                        ${Object.keys(r).map(e=>`
                                    <button
                                        data-lang="${e}"
                                        class="flex w-full items-center gap-3 px-4 py-3 
                                        text-left text-sm hover:bg-zinc-800 transition"
                                    >
                                        <span class="text-lg">${r[e].flag}</span>
                                        <span>${r[e].full}</span>
                                    </button>
                                `).join(``)}
                    </div>
                </div>
            </div>
        </div>
    `;let n=e.querySelector(`#lang-btn`),i=e.querySelector(`#lang-menu`),o=e.querySelector(`#lang-flag`),s=e.querySelector(`#lang-code`);return n.addEventListener(`click`,()=>i.classList.toggle(`hidden`)),i.querySelectorAll(`button`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.lang;localStorage.setItem(`site-lang`,t),o.textContent=r[t].flag,s.textContent=r[t].label,i.classList.add(`hidden`),window.dispatchEvent(new Event(`language-change`))})}),e}var M=e((()=>{i(),c()}));function N(){let e=document.createElement(`a`);return e.href=`#home`,e.id=`to-top`,e.className=`fixed bottom-4 right-4 z-9999 hidden h-4 w-4 items-center justify-center rounded-full bg-orange-700 p-4 text-3xl text-white hover:animate-pulse`,e.innerHTML=`
        <i class="bx bx-chevron-up"></i>
    `,e}var P=e((()=>{}));function F(){let e=[[`navbar-container`,l],[`hero-container`,d],[`about-container`,g],[`projects-container`,x],[`experience-container`,E],[`contact-container`,O],[`footer-container`,j]];document.body.appendChild(N()),e.forEach(([e,t])=>{let n=document.getElementById(e);n&&(n.innerHTML=``,n.appendChild(t()))})}var I=e((()=>{u(),f(),_(),S(),D(),A(),M(),P()}));t((()=>{n(),I(),c(),o(),F(),window.addEventListener(`language-change`,()=>{o(),F()}),window.addEventListener(`scroll`,()=>{let e=document.querySelector(`header`),t=document.querySelector(`#to-top`);if(!e||!t)return;let n=e.offsetTop;window.scrollY>n?(e.classList.add(`navbar-fixed`),t.classList.remove(`hidden`),t.classList.add(`flex`)):(e.classList.remove(`navbar-fixed`),t.classList.add(`hidden`),t.classList.remove(`flex`))})}))();