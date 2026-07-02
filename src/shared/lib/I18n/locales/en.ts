import type { WebUiTranslations } from '../types';

export const en: WebUiTranslations = {
  webTitle: "Dhaboav's Website",
  notfound: {
    pageTitle: 'Page not found.',
    pageDesc:
      "Oops! Page not found. We can't seem to find the page you're looking for. Go back to home.",
    buttonLabel: 'Back to Home',
  },
  navbar: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    blogTeaser: 'Recent Notes',
    blogArchive: 'All Articles',
    contact: "Let's talk",
  },
  hero: {
    greet: "Hi, I'm",
    tagline:
      'Backend Developer experienced in building REST APIs with FastAPI, Computer Vision applications with OpenCV, and IoT systems using Raspberry Pi & ESP32.',
    viewProjectLabel: 'View work',
    resumeFile: 'resume-en',
  },
  about: {
    aboutLabel: 'About me',
    aboutMeHeader: 'Building with purpose',
    aboutMeParagraph:
      'I enjoy solving real-world problems by building backend services, computer vision applications, and IoT systems. My projects range from REST APIs with FastAPI to embedded systems powered by Raspberry Pi and ESP32. Outside programming, I enjoy reading books, anime, and strategy games.',
    techStackLabel: 'Tech Stack',
    experienceLabel: 'Experience',
  },
  projects: {
    projectLabel: 'Selected work',
    projectHeader: 'Projects',
    gitHubRepoLabel: 'Repository',
  },
  blog: {
    blogLabel: 'Blog',
    blogHeader: {
      word1: 'Learning',
      word2: 'Notes',
    },
    blogDescription:
      'A place where I document my learning process, experiments, thoughts, and interesting ideas worth sharing.',
    blogAllButton: 'View all',
    blogLinkButton: 'Read more',
    blogArchiveLabel: 'Archive',
    blogArchiveSearchLabel: 'Type to search',
    blogNotFoundLabel: 'No results found for',
    blogCardLinkLabel: 'Read Entry',
    blogDetailBackLabel: 'Back to Articles',
    blogDetailAuthorLabel: 'About the Author',
    blogDetailAuthorDescLabel:
      'Writes about many things, with technology and software engineering as the main theme. Sharing thoughts, insights, and experience through written words.',
    blogDetailAuthorLinkLabel: 'Click here to learn more',
    blogDetailLoadPageLabel: 'Loading the article...',
  },
  contact: {
    label: 'Contact',
    header: "Have an idea? Let's talk.",
    description:
      "I'm currently seeking Backend Developer, Software Engineer, or IoT Engineer opportunities. Feel free to reach out.",
    namePlaceholder: 'Name',
    messagePlaceholder: 'Message',
    sendStatus: 'Send message',
    loadingStatus: 'Sending...',
    successStatus: 'Message sent successfully!',
    failureStatus: 'Failed to send message.',
  },
};
