export const ws = new WebSocket('ws://localhost:3001')

ws.onopen = () => {
  console.log('WebSocket connection opened')
}

ws.onmessage = (event) => {
  console.log('Message from server:', event.data)
}

ws.onerror = (error) => {
  console.error('WebSocket error:', error)
}

ws.onclose = (event) => {
  console.log('WebSocket connection closed', event)
}
