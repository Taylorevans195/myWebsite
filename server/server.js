const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

console.log(__dirname)

app.get('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname))
})

app.listen(4000, console.log(`App running on 4000`))