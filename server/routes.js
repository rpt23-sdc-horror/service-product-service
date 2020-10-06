var controller = require('../api/controller.js');
var router = require('express').Router();
var express = require('express');


router.get('/product', controller.product.get);
router.get('/product/clear', controller.product.clear);
router.get('/product/initialize', controller.product.initialize);


module.exports = router;
