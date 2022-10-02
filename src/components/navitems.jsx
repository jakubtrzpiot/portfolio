import { useEffect } from 'react';

export const BurgerIcon = props => (
  <button {...props}>
    <svg width="40" height="40" viewBox="0 0 100 100">
      <path
        className="line line1"
        strokeLinecap="round"
        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
      />
      <path strokeLinecap="round" className="line line2" d="M 20,50 H 80" />
      <path
        strokeLinecap="round"
        className="line line3"
        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
      />
    </svg>
  </button>
);

export const DarkModeToggle = () => {
  const setTheme = () => {
    if ('theme' in localStorage) {
      localStorage.theme === 'dark'
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };
  useEffect(() => {
    setTheme();
    const toggle = document.getElementById('dark-mode-toggle');
    localStorage.theme === 'dark'
      ? (toggle.checked = false)
      : (toggle.checked = true);
  }, []);

  const toggleTheme = () => {
    localStorage.theme === 'dark'
      ? (localStorage.theme = 'light') &&
        document.documentElement.classList.remove('dark')
      : (localStorage.theme = 'dark') &&
        document.documentElement.classList.add('dark');
  };
  return (
    <div className="flex h-fit w-fit">
      <label
        htmlFor="dark-mode-toggle"
        className="inline-flex relative items-center cursor-pointer"
      >
        <input
          onClick={() => toggleTheme()}
          type="checkbox"
          id="dark-mode-toggle"
          className="sr-only peer"
        />
        <div className="w-11 h-6 transition-all dark:bg-active peer-checked:bg-accent rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
      </label>
    </div>
  );
};
