// deklare exprees
const express = require('express')
const { list, destroy, detail, insert, update, detailofname } = require('../controller/comment.controller')

const router = express.Router()

router
  .get('/comments', list)
  .get('/comments/:id', detail)
  .get('/comments/:username', detailofname)
  .post('/comments', insert)
  .put('/comments/:id', update)
  .delete('/comments/:id', destroy)

module.exports = router
