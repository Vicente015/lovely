import { useEffect, useState } from 'react'
import './App.css'
import 'remixicon/fonts/remixicon.css'
import Peer from 'peerjs'

/*
  # TODOS
  * Loading screen while peer is not connected
*/

function App () {
  const [peer, setPeer] = useState<Peer | null>(null)

  const copyPeerId = () => {
    if (peer != null) void navigator.clipboard.writeText(`${window.location.href}${peer.id}`)
  }

  useEffect(() => {
    const newPeer = new Peer()

    newPeer.on('open', () => {
      setPeer(newPeer)
    })
    newPeer.on('connection', (connection) => {
      console.debug('Send data: hi')
      connection.send('hi')
    })

    return () => {
      newPeer.destroy()
    }
  }, [])

  useEffect(() => {
    if (peer !== null) {
    }
  }, [peer])

  return (
    <>
      <nav className=' flex flex-row gap-8 justify-center bg-neutral-700 py-2 drop-shadow-mds border-b-[1px] border-b-neutral-900'>
        <div className='flex flex-row gap-1 items-center text-neutral-100'>
          <i className='ri-mail-line ri-xl'></i>
          <span className='text-3xl font-semibold'>Lovely</span>
        </div>
      </nav>
      <main className='flex flex-col px-12 bg-neutral-800 h-[100vh]'>
        <div className='mt-8 p-4 rounded-xl shadow-md border-[1px] border-solid border-neutral-700 bg-neutral-900 hover:border-neutral-600'>
          <ul className='flex flex-row gap-2'>
            <button className='rounded-xl py-0 px-2 list-none flex flex-row items-center gap-1 bg-neutral-800 border-[1px] border-neutral-600 hover:border-neutral-500 text-neutral-200'>
              <i className='ri-bold ri-md'></i>
              <span className='text-lg'>Bold</span>
            </button>

          </ul>
          <p id='content' className='text-neutral-100'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum temporibus fuga beatae magnam laboriosam! Enim, illo sint repudiandae esse, et omnis corporis nam quam assumenda dolore natus saepe vel odit.
          </p>
        </div>
        <div className='flex justify-end mt-4'>
            <a type='button' className='flex flex-row gap-2 rounded-xl px-4 py-1 bg-blue-800 hover:bg-blue-700 text-neutral-100' onClick={copyPeerId}>
              <i className='ri-send-plane-line'></i>
              Send
            </a>
        </div>
        <div>
          <span className='text-slate-50'>
            my peer id is: {peer?.id ?? 'Cargando...'}
          </span>
        </div>
      </main>
    </>
  )
}

export default App
