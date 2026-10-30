import express from 'express'
import data from "./src/data.json" with{ type:"json" }

const app = express()
const port = 3300


app.use(express.static('dist'))

app.get('/data', (req,res)=>{
    res.json(data)
})

app.listen(port,()=>{
    console.log('Running in port' + port)
})