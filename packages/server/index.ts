const games = new Map()

const server = Bun.serve({
  port: 3001,
  fetch(req, server) {
    // Handle WebSocket upgrade
    if (server.upgrade(req)) {
      return // WebSocket connection upgrade, no need to return a Response
    }

    // Handle normal HTTP requests
    return new Response('This is a WebSocket server', { status: 400 })
  },
  websocket: {
    open(ws) {
      console.log('WebSocket connection opened')
      ws.send('Socket Opened')
    },
    message(ws, message) {
      console.log('Message received:', message)
      ws.send('Message received')
    },
    close(ws, code, message) {
      console.log('WebSocket closed')
    },
  },
})

console.log('WebSocket server running on port 3001')
