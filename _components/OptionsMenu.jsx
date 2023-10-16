export default function ({ comp }) {
  const themes = ['olive', 'chestnut', 'cyan', 'blue', 'purple', 'cerise', 'coral', 'cocoa']

  return (
    <div className='options' id='options' style={{ }}>
      <label htmlFor="theme-select">Tema: </label>
      <select name='theme-select' id='theme-select'>
        {
          themes.map((theme) => {
            return <option key={theme} value={theme}>{theme.charAt(0).toUpperCase() + theme.substring(1)}</option>
          })
        }
      </select>
    </div>
  )
}
