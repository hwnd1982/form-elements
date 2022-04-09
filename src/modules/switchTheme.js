const switchTheme = () => {
  const themeSwitcher = document.getElementById('tabs');
  const switcherButtons = document.querySelectorAll('.content__tab');

  themeSwitcher.addEventListener('click', ({ target }) => {
    if(target.classList.contains('content__tab')) {
      document.body.dataset.theme = target.dataset.setTheme;
      switcherButtons.forEach(button => button.classList.remove('content__tab_active'));
      target.classList.add('content__tab_active');
    }
  });
};

export default switchTheme;