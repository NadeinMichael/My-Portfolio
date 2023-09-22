const btnDarkMode = document.querySelector('.dark-mode-btn');

const addDarkTheme = () => {
  btnDarkMode.classList.add('dark-mode-btn--active');

  document.body.classList.add('dark');
};

const removeDarkTheme = () => {
  btnDarkMode.classList.remove('dark-mode-btn--active');

  document.body.classList.remove('dark');
};

// Checking dark theme in system settings
if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  addDarkTheme();
}

// Checking dark theme in local storage
if (localStorage.getItem('darkMode') === 'dark') {
  addDarkTheme();
} else {
  removeDarkTheme();
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (event) => {
    const newColorTheme = event.matches ? 'dark' : 'light';

    if (newColorTheme === 'dark') {
      addDarkTheme();
    } else {
      removeDarkTheme();
    }
  });

// toggler dark theme
btnDarkMode.onclick = () => {
  btnDarkMode.classList.toggle('dark-mode-btn--active');

  const isDark = document.body.classList.toggle('dark');

  if (isDark) {
    localStorage.setItem('darkMode', 'dark');
  } else {
    localStorage.setItem('darkMode', 'light');
  }
};
