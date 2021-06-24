// import express from "express"
const express = require('express');


const router = express.Router()

const db = require("./database/db.js")

router.get('/posts', (req, res) => {
  db.all(
    `
    SELECT id, title, description, image, published_at 
    FROM posts
    `,
    function (err, rows) {
      if (err) {
        return console.log(err)
      }
      return res.json(rows)
    }
  )

})

router.get('/posts/:id', (req, res) => {
  const id = req.params.id
  db.all(`SELECT * FROM posts WHERE id = ${id}`, function (err, row) {
    if (err) {
      return console.log(err)
    }

    const posts = row
    return res.json(posts)
  })
})

// export default router
module.exports = router