const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Oke')
})
app.get('/post', (req, res) => {
    res.send("Post")
})
app.listen(3000, () => {
    console.log("Server is running")
})