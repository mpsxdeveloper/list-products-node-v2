const express = require('express')
const productController = require('../controllers/productController')

const router = express.Router()

// list
router.get("/", productController.product_list)
// create
router.get('/product', productController.product_create)
// save
router.post('/product', productController.product_save)
// read
router.get('/product/:id', productController.product_read)
// update
router.put('/product', productController.product_update)
// delete
router.get('/product/delete/:id', productController.product_delete)
// search
router.get('/product/search/:slug', productController.product_search)
// 404
router.all('*', productController.page_notfound)

module.exports = {
    router
}
