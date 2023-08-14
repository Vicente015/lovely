import Peer from 'peerjs'

const createNewPeer = async (): Promise<Peer> => {
  const peer = new Peer()

  return await new Promise((resolve) => {
    peer.on('open', () => {
      resolve(peer)
    })
  })
}

function usePeer () {
  const peer = new Peer()

  const connect = (id: string) => peer.connect(id)
  const destroy = () => { peer.destroy() }

  console.debug(peer.id)

  return { peer, connect, destroy }
}

export { createNewPeer, usePeer }
