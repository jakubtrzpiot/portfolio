const toUrl = title => {
  return title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replaceAll(' ', '-');
};

const articles = [
  {
    url: toUrl('Ale dziwna ryba. Naukowcy nie moga uwierzyc. LO CIE BABEN'),
    title: 'Ale dziwna ryba. Naukowcy nie moga uwierzyc. LO CIE BABEN',
    image: '/fish.jpg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula eu lectus id semper. Sed nunc felis, rhoncus non massa id, porttitor ultricies lectus. Mauris tincidunt at ante mattis porttitor. Mauris sed ligula vel est blandit accumsan quis in purus. Duis lacus nibh, dapibus vitae ornare vitae, maximus in nunc.',
    date: 'August 27, 2022',
  },
  {
    url: toUrl('Szpilkowa wieza! Zobacz zdjecia.'),
    title: 'Szpilkowa wieza! Zobacz zdjecia.',
    image: '/tower.jpg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula eu lectus id semper. Sed nunc felis, rhoncus non massa id, porttitor ultricies lectus. Mauris tincidunt at ante mattis porttitor. Mauris sed ligula vel est blandit accumsan quis in purus. Duis lacus nibh, dapibus vitae ornare vitae, maximus in nunc.',
    date: 'August 21, 2022',
  },
  {
    url: toUrl('Jak zyja koreancy?'),
    title: 'Jak zyja koreancy?',
    image: '/korea.jpg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula eu lectus id semper. Sed nunc felis, rhoncus non massa id, porttitor ultricies lectus. Mauris tincidunt at ante mattis porttitor. Mauris sed ligula vel est blandit accumsan quis in purus. Duis lacus nibh, dapibus vitae ornare vitae, maximus in nunc.',
    date: 'August 10, 2022',
  },
  {
    url: toUrl('Zarowki sprzedawane hurtowo.'),
    title: 'Zarowki sprzedawane hurtowo.',
    image: '/led.jpg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula eu lectus id semper. Sed nunc felis, rhoncus non massa id, porttitor ultricies lectus. Mauris tincidunt at ante mattis porttitor. Mauris sed ligula vel est blandit accumsan quis in purus. Duis lacus nibh, dapibus vitae ornare vitae, maximus in nunc.',
    date: 'August 16, 2022',
  },
  {
    url: toUrl('Top 10 piosenek.'),
    title: 'Top 10 piosenek.',
    image: '/song.jpg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula eu lectus id semper. Sed nunc felis, rhoncus non massa id, porttitor ultricies lectus. Mauris tincidunt at ante mattis porttitor. Mauris sed ligula vel est blandit accumsan quis in purus. Duis lacus nibh, dapibus vitae ornare vitae, maximus in nunc.',
    date: 'February 3, 2022',
  },
];
const links = [
  { text: 'Home', href: '/' },
  { text: 'About Me', href: '/about' },
  { text: 'Blog', href: '/blog' },
  { text: 'Projects', href: '/projects' },
  { text: 'Contact', href: '/contact' },
];
//change to fetch this data with fetcher instead of accessing it directly
export { articles, links };
