const express = require("express");
const fs = require('fs')
const fileUpload = require("express-fileupload");
const cors = require('cors')
const ex = express()
var path = require('path')


ex.use(express.json())
ex.use(fileUpload({
     useTempFile: true, 
    tempFileDir: path.join(__dirname, 'temp')
}
   
))
ex.use(cors())

ex.get('/form', (req, res) => {
    res.json([{'form:' : 'teste'}]) 
})
ex.post('/add', (req, res) => {
    res.json([{'form:' : 'recebido'}]) 
})


ex.listen(5000, () => console.log('server is running in port 5000'))