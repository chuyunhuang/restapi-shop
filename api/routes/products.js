const express = require('express');
const productRouter = express.Router();

productRouter.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'handling GET request to /products'
  })
})

productRouter.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'handling POST request to /products'
  })
})

module.exports = productRouter;