const express = require('express')
const Router = express.Router()
const path = require('path')

const rootDir = require('../utililies/path')
const adminData = require('./admin')

Router.get('/' ,( req, res, next) => {

   const product = adminData.product
  res.render('shop', {prods: product, docTitle: 'Shop'})
}) //Middleware recibe tres parameteos
   // solicitud(resp), respuesta(res)
   // y next(es una funcion que express pasa al middeware) y se usa para pasar
   //al sgt middleware

   module.exports = Router