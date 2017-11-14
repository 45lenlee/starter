var express = require('express')
var router = express.Router()

router.get('/:resource', function(req, res){
  res.json({
    confirmation: 'success',
    resource: req.params.resource,
    query: req.query // from the url query string
  })
})

router.get('/:resource/:id', function(req, res){
  res.json({
    confirmation: 'success',
    resource: req.params.resource,
    id: req.params.id,
    query: req.query
  })
})

module.exports = router 
