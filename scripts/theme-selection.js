const setTheme = (theme) => document.documentElement.className = theme

window.onload = () => {
  document.getElementById('theme-select')
    .addEventListener('change', (event) => setTheme(event.target.value))
}

