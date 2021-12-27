const express = require('express')
const config =require('./startup/config')

const app = express()

require('./startup/routes')(app);

const {port:PORT}=config;

app.listen(PORT,()=>{
    console.log(`NODE_ENV: ${process.env?.NODE_ENV}`)
    if(process.env?.NODE_ENV!=="production")
        console.log(`Server listening on port ${PORT}`)
});