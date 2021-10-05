const path = require('path')
const express = require('express')
const Router = express.Router()

const rootDir = require('../utililies/path')

const product = []

Router.get('/add-product' ,( req, res, next) => {

   console.log('In the middleware!!!')
   res.render('add-product',{pageTitle: 'Add Product'})
}) //Middleware recibe tres parameteos

Router.post('/add-product', (req, res, next) => {

   product.push({ title: req.body.title}) 
   res.redirect('/')
})

exports.Router = Router
exports.product = product
