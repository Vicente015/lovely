export default function ({ comp }) {
  const themes = ['olive', 'chestnut', 'cyan', 'blue', 'purple', 'cerise', 'coral', 'cocoa']

  return (
    <div className='options' id='options' style={{ display: 'flex', justifyItems: 'center', alignContent: 'center', marginBottom: '1em' }}>
      <select name='theme-select' id='theme-select' style={{ color: 'var(--heading-color)', padding: '6px 10px', backgroundColor: 'var(--bg-color)', border: '2px solid var(--zoom-bg-color)', borderRadius: '15px' }}>
        {
          themes.map((theme) => {
            return <option key={theme} value={theme}>{theme.charAt(0).toUpperCase() + theme.substring(1)}</option>
          })
        }
      </select>
    </div>
  )
}
