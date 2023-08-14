import Peer from 'peerjs'
import { useEffect, useState } from 'react'

function Page ({ peerId }: { peerId: string }) {
  const [peer, setPeer] = useState<Peer | null>(null)
  const [state, setState] = useState(false)

  useEffect(() => {
    const newPeer = new Peer()

    newPeer.on('open', () => {
      setPeer(newPeer)
    })

    return () => {
      newPeer.destroy()
    }
  }, [])

  useEffect(() => {
    if (peer !== null) {
      console.debug('connecting to peer')
      const connection = peer.connect(peerId)
      setState(true)
      connection.on('open', () => {
        connection.on('data', (data) => {
          console.debug('Received data:', data)
        })
      })
    }
  }, [peer, peerId])

  return (
    <div>
      <p>
        Id destinatario: {peer?.id ?? 'loading...'}
      </p>
      <p>
        Id remitente: {peerId}
      </p>
      <p>
        Conectado: {state ? 'Conectado!' : 'Desconectado!'}
      </p>
    </div>
  )
}

export default Page
