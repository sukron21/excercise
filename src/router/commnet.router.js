// deklare exprees
const express = require('express')
// D:\belajar pijar\excercise_beginner_backend\src\controller\comment.controller.js
const { list, destroy, detail, insert, update, detailofname } = require('../controller/comment.controller.js')

const router = express.Router()

router
  .get('/commen', list)
  .get('/commen/:id', detail)
  .get('/commen/:username', detailofname)
  .post('/commen', insert)
  .put('/commen/:id', update)
  .delete('/commen/:id', destroy)

module.exports = router
