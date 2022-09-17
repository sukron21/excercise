/* eslint-disable camelcase */

const db = require('../config/db')
const commentModel = {
  // router list
  selectAll: () => {
    return new Promise((resolve, reject) => {
      // db.query('SELECT * FROM users ORDER BY username', (err, result) => {
      db.query('select* from comment',
        (err, result) => {
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
      db.query(`SELECT *FROM comment where id=${id}`, (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  },
  Detail: (id_user) => {
    return new Promise((resolve, reject) => {
      db.query(`select *from comment where id_user='${id_user}'`, (err, results) => {
        if (err) {
          reject(err)
        }
        resolve(results)
      })
    })
  },
  // router - insert
  store: (id, comment, id_user, id_recipe) => {
    return new Promise((resolve, reject) => {
      db.query(`
            INSERT INTO users (id,comment,id_user, id_recipe)
            VALUES
            (${id}, '${comment}','${id_user}','${id_recipe}')
            `, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      }
      )
    })
  },
  updateAccount: (id, comment, id_user, id_recipe) => {
    return new Promise((resolve, reject) => {
      // email = COALESCE('${email}', email),
      // password = COALESCE('${password}', password)
      db.query(
            `
              UPDATE users SET
              comment = COALESCE('${comment}', comment),
              id_user = COALESCE('${id_user}', id_user),
              id_recipe = COALESCE('${id_recipe}', id_recipe),
              WHERE id = ${id}
              `,
            // `UPDATE users SET
            // username = COALESCE($1, username),
            // email = COALESCE($2', email),
            // phone = COALESCE($3, phone),
            // password = COALESCE($4, password)
            // WHERE id = $5`,
            // [username, email, phone, password, id],
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
      db.query(`DELETE FROM comment WHERE id = ${id};`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  }

}
module.exports = commentModel
