import { useEffect } from 'react';

const ThemeToggle = () => {
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

export default ThemeToggle;
