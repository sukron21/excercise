/* eslint-disable camelcase */

const db = require('../config/db')
const recipeModel = {
  // router list
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM recipe ORDER BY name_recipe', (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  },
  selectDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT *FROM recipe where id=${id}`, (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  },
  nameDetail: (name_recipe) => {
    return new Promise((resolve, reject) => {
      db.query(`select *from recipe where name_recipe='${name_recipe}'`,
        (err, result) => {
          if (err) {
            reject(err)
          }
          resolve(result)
        })
    })
  },
  // router - insert
  store: (id, name_recipe, ingredients) => {
    return new Promise((resolve, reject) => {
      db.query(`
            INSERT INTO recipe (id,name_recipe,ingredients)
            VALUES
            (${id}, '${name_recipe}','${ingredients}')
            `, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      }
      )
    })
  },
  updateAccount: (id, name_recipe, ingredients) => {
    return new Promise((resolve, reject) => {
      db.query(
            `
              UPDATE recipe SET
              name_recipe = COALESCE('${name_recipe}', name_recipe),
              ingredients = COALESCE('${ingredients}', ingredients)
              WHERE id = ${id}
              `,
            (err, res) => {
              if (err) {
                reject(err)
              }
              resolve(res)
            }
      )
    })
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM recipe WHERE id = ${id};`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  }

}
module.exports = recipeModel
