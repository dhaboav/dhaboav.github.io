import type { ProjectItem } from './types';

export const projectsData: ProjectItem[] = [
  {
    image: 'img/trueformat.png',
    link: 'https://github.com/dhaboav/trueformat-backend',
    text: {
      en: {
        title: 'TrueFormat',
        description:
          'Backend service built with FastAPI and OpenCV to automatically validate passport photos through computer vision.',
      },
      id: {
        title: 'TrueFormat',
        description:
          'Layanan backend menggunakan FastAPI dan OpenCV untuk memvalidasi pas foto secara otomatis dengan teknologi computer vision.',
      },
    },
  },
  {
    image: 'img/bookshelf.png',
    link: 'https://github.com/dhaboav/bookshelf',
    text: {
      en: {
        title: 'Bookshelf Management System',
        description:
          'Fullstack web application built with React, FastAPI, MySQL, and Docker for managing personal book collections.',
      },
      id: {
        title: 'Aplikasi Manajemen Buku',
        description:
          'Aplikasi web fullstack menggunakan React, FastAPI, MySQL, dan Docker untuk mengelola koleksi buku pribadi.',
      },
    },
  },
  {
    image: 'img/basestation.png',
    link: 'https://github.com/dhaboav/robot-basestation',
    text: {
      en: {
        title: 'Multi-Robot Control System',
        description:
          'Python-based control station for monitoring and controlling multiple robots over a local network.',
      },
      id: {
        title: 'Sistem Kendali Multi Robot',
        description:
          'Sistem kendali berbasis Python untuk memantau dan mengendalikan beberapa robot melalui jaringan lokal.',
      },
    },
  },
];
