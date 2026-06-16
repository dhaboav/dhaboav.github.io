import type { ProjectItem } from '@/types/projects';

export const projectsData: ProjectItem[] = [
  {
    image: 'img/basestation.png',
    link: 'https://github.com/dhaboav/robot-basestation',
    text: {
      en: {
        title: 'Basestation Robot Controller',
        description: 'A Python-built basestation used to control robots through a local network.',
      },
      id: {
        title: 'Pengendali Robot Basestation',
        description:
          'Basestation berbasis Python untuk mengendalikan robot melalui jaringan lokal.',
      },
      jp: {
        title: 'ベースステーションロボットコントローラ',
        description:
          'ローカルネットワークでロボットを制御するためのPythonベースのステーションです。',
      },
    },
  },
  {
    image: 'img/bookshelf.png',
    link: 'https://github.com/dhaboav/bookshelf',
    text: {
      en: {
        title: 'Simple Personal Bookshelf App',
        description:
          'A responsive web app using React, FastAPI, and Docker able to run CRUD operation.',
      },
      id: {
        title: 'Aplikasi Sederhana Rak buku',
        description:
          'Aplikasi web dengan React, FastAPI, dan Docker yang bisa menjalankan CRUD sederhana untuk buku',
      },
      jp: {
        title: 'シンプルな個人用本棚アプリ',
        description:
          'React、FastAPI、および Docker を使用した、CRUD 操作が可能なレスポンシブな Web アプリ。',
      },
    },
  },
  {
    image: 'img/login.png',
    link: 'https://github.com/dhaboav/college-web-login',
    text: {
      en: {
        title: 'Simple Login Website',
        description: 'A web app using HTML, CSS, PHP, and MySQL with role-based access.',
      },
      id: {
        title: 'Website Login Sederhana',
        description: 'Aplikasi web dengan HTML, CSS, PHP, MySQL dan akses berbasis peran.',
      },
      jp: {
        title: 'シンプルなログインサイト',
        description: 'HTML、CSS、PHP、MySQL を使用したロールベースアクセスの Web アプリ。',
      },
    },
  },
];
