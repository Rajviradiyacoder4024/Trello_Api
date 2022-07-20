const express = require('express');
const router = express.Router();
const db  = require('./dbConnection');
const { signupValidation, loginValidation } = require('./validation');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
 
 
router.post("/login", loginValidation, (req, res, next) => {
    db.query(
      `SELECT id, email FROM users WHERE email = ${db.escape(req.body.email)} AND password = ${db.escape(req.body.password)};`,
      (err, result) => {
        if (result)
          return res.status(200).send({
            msg: "Logged in!",
            user: result,
            hyo: "yo",
          });
      }
    );
  });
  router.post("/signup", async (req, res) => {
    try {
      db.query(
        `INSERT INTO users (email, password,name, id) VALUES (${db.escape(req.body.email)}, ${db.escape(req.body.password)}, ${db.escape(req.body.name)},${db.escape(req.body.id)});`
      );
  
      res.json({
        success: true,
        msg :"Thay gyu re enter",
        error: null,
      });
    } catch (error) {
      console.error(error.message);
    }
  });

module.exports = router;