/* eslint-disable camelcase */
const commentModel = require('../model/comment.model')
const commentController = {
  // method
  list: (req, res) => {
    commentModel
      .selectAll()
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  },
  detail: (req, res) => {
    const id = req.params.id
    commentModel
      .selectDetail(id)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  },
  detailofname: (req, res) => {
    const nama = req.params.id_recipe
    commentModel
      .Detail(nama)
      .then((results) => {
        res.json(results)
      })
      .catch((err) => {
        res.json(err)
      })
  },
  insert: (req, res) => {
    const { id, comment, id_user, id_recipe } = req.body
    commentModel
      .store(id, comment, id_user, id_recipe)
      .then((result) => {
        res.json('Account added successfully')
      })
      .catch((err) => {
        res.json(err)
      })
  },
  update: (req, res) => {
    const id = req.params.id
    const { comment, id_user, id_recipe } = req.body
    commentModel
      .updateAccount(id, comment, id_user, id_recipe)
      .then((result) => {
        res.json('Account Updated')
      })
      .catch((err) => {
        res.json(err)
      })
  },
  destroy: (req, res) => {
    commentModel
      .delete(req.params.id)
      .then((result) => {
        res.json('Account Deleted')
      })
      .catch((err) => {
        res.json(err)
      })
  }
}

module.exports = commentController
