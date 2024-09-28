import Bun from 'bun'

Bun.serve({
  port: 3001,
  fetch(req, server) {}, // upgrade logic
  websocket: {
    message(ws, message) {
      ws.send('Message Received')
    }, // a message is received
    open(ws) {
      ws.send('Socket Opened')
    }, // a socket is opened
    close(ws, code, message) {}, // a socket is closed
    drain(ws) {}, // the socket is ready to receive more data
  },
})
