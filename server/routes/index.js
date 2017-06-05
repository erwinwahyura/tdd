var express = require('express')
var router = express.Router()

router.get('/', function(res,req) {
  res.send('alive')
})

// router.get('/api/articles', )



module.exports = router
