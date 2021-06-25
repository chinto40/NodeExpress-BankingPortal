const fs = require('fs')
const path = require('path')
const express = require('express')


const app = express()
app.set(express.static(path.join(__dirname, 'public/')))
app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')

