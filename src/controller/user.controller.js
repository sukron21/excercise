const userModel = require('../model/user.model')
const userController = {
  // method
  list: (req, res) => {
    const limit = parseInt(req.query.limit) || 3
    const page = parseInt(req.query.page) || 1
    const offset = (page - 1) * limit
    userModel
      .list(limit, offset)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  },
  detail: (req, res) => {
    const id = req.params.id
    userModel
      .selectDetail(id)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  },
  detailofname: (req, res) => {
    const nama = req.params.username
    userModel
      .Detail(nama)
      .then((results) => {
        res.json(results)
      })
      .catch((err) => {
        res.json(err)
      })
  },
  insert: (req, res) => {
    const { id, username, email, phone, password } = req.body
    userModel
      .store(id, username, email, phone, password)
      .then((result) => {
        res.json('Account added successfully')
      })
      .catch((err) => {
        res.json(err)
      })
  },
  update: (req, res) => {
    const id = req.params.id
    const { username, email, phone, password } = req.body
    userModel
      .updateAccount(id, username, email, phone, password)
      .then((result) => {
        res.json('Account Updated')
      })
      .catch((err) => {
        res.json(err)
      })
  },
  destroy: (req, res) => {
    userModel
      .delete(req.params.id)
      .then((result) => {
        res.json('Account Deleted')
      })
      .catch((err) => {
        res.json(err)
      })
  }
}

module.exports = userController
