const express = require('express')
const path = require('path')
const { router } = require('./routes/productRoutes')

const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use('/css', express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")))
app.use('/font', express.static(path.join(__dirname, "node_modules/bootstrap-icons/font")))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

app.set('view engine', 'ejs')

app.listen(PORT, () => {
    console.log('Server started...')
})