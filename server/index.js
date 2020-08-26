const express = require('express')
const messagesCtrl = require('./controllers/messages_controller')

const app = express()

app.use(express.json())

app.get('/api/messages', messagesCtrl.read)
app.post('/api/messages', messagesCtrl.create)
app.put('/api/messages/:id', messagesCtrl.update)
app.delete('/api/messages/:id', messagesCtrl.delete)

const SERVER_PORT = 3001
app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`)
})


