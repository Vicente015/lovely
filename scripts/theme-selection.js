const setTheme = (theme) => document.documentElement.className = theme

document.getElementById('theme-select')
  .addEventListener('change', () => {
    console.debug('setting theme', this.value)
    setTheme(this.value)
  })
