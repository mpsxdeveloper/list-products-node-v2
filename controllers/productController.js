const { Sequelize } = require('sequelize')
const Product = require('../models/Product')

const product_create = (req, res) => {
    res.render('create', { title: 'Create'})
}

const product_list = async (req, res) => {
    
    const slug = req.params.slug
    
        await Product.findAll({
            order: [
                ['id', 'DESC']
            ],
            limit: 10
        })
        .then((data) => {              
            res.render('home', { products: data, title: 'Home' })
        })
        .catch((error) => { console.log(error) } )       

}

const product_save = async (req, res) => {
    
    const { description, quantity } = req.body    
    await Product.create({ description, quantity })
    .then((data) => {
        res.send(data)
    })
    .catch((error) => console.log('error creating product' + error))

}

const product_read = async (req, res) => {
    
    await Product.findOne({
        where: {
            id: req.params.id
        }
    })
    .then((data) => {               
        res.render('edit', { product: data, title: 'Edit' })
    })
    .catch((error) => { console.log(error) })

}

const product_update = async (req, res) => {

    const { id, description, quantity } = req.body
    
    await Product.update(
        { description, quantity },
        { where: { id } }
    )
    .then((data) => {        
        res.send(data)
    })
    .catch((error) => { console.log(error) })

}

const product_delete = async (req, res) => {
    
    await Product.destroy({
        where: { id: req.params.id }
    })
    .then((data) => {               
        res.redirect('/')
    })
    .catch((error) => { console.log(error) })

}

const product_search = async (req, res) => {

    const slug = req.params.slug
    const Op = Sequelize.Op

    await Product.findAll({
        where: {
            description: {
                [Op.like]: '%' + slug + '%'
            }
        }
    })    
    .then((data) => {
        if(data.length > 0) {
            res.send({ products: data })
        }
        else {
            res.send({ products: null })
        }
    })
    .catch((error) => console.log(error))    

}

const page_notfound = async (req, res) => {
    res.status(404).render('404', { title: '404 - Not Found'})
}

module.exports = {
    product_list,
    product_create,
    product_save,
    product_read,
    product_update,
    product_delete,
    product_search,
    page_notfound
}
