const recipeModel = require('../model/komen.model')
const recipeController = {
  // method
  list: (req, res) => {
    recipeModel
      .selectAll()
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  }
//   detail: (req, res) => {
//     const id = req.params.id
//     recipeModel
//       .selectDetail(id)
//       .then((result) => {
//         res.json(result)
//       })
//       .catch((err) => {
//         res.json(err)
//       })
//   },
//   detailname: (req, res) => {
//     const id = req.params.name_recipe
//     recipeModel
//       .nameDetail(id)
//       .then((result) => {
//         res.json(result)
//       })
//       .catch((err) => {
//         res.json(err)
//       })
//   },
//   insert: (req, res) => {
//     // eslint-disable-next-line camelcase
//     const { id, name_recipe, ingredients } = req.body
//     recipeModel
//       .store(id, name_recipe, ingredients)
//       .then((result) => {
//         res.json('Account added successfully')
//       })
//       .catch((err) => {
//         res.json(err)
//       })
//   },
//   update: (req, res) => {
//     const id = req.params.id
//     // eslint-disable-next-line camelcase
//     const { name_recipe, ingredients } = req.body
//     recipeModel
//       .updateAccount(id, name_recipe, ingredients)
//       .then((result) => {
//         res.json('Account Updated')
//       })
//       .catch((err) => {
//         res.json(err)
//       })
//   },
//   destroy: (req, res) => {
//     recipeModel
//       .delete(req.params.id)
//       .then((result) => {
//         res.json('Account Deleted')
//       })
//       .catch((err) => {
//         res.json(err)
//       })
//   }
}

module.exports = recipeController
