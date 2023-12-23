"use strict";

var bcrypt = require('bcrypt');

var Joi = require('joi');

var express = require('express');

var validator = require('express-joi-validation').createValidator({
  passError: true
});

var app = express();
app.use(express.json());

var _require = require('./db'),
    deleteUser = _require.deleteUser,
    insertUser = _require.insertUser,
    findToken = _require.findToken;

var userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  is_shaver: Joi["boolean"]().required()
});
app.get('/welcome', function (req, res) {
  res.json({
    message: 'Olá'
  });
});
app.get('/token/:email', function _callee(req, res) {
  var email, token;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          email = req.params.email;
          _context.next = 3;
          return regeneratorRuntime.awrap(findToken(email));

        case 3:
          token = _context.sent;
          res.status(200).end(token);

          if (token) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(404).end());

        case 7:
          res.status(200).json(token);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
});
app["delete"]('/user/:email', function _callee2(req, res) {
  var email;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          email = req.params.email;
          _context2.next = 3;
          return regeneratorRuntime.awrap(deleteUser(email));

        case 3:
          res.status(204).end();

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.post('/user', validator.body(userSchema), function _callee3(req, res) {
  var _req$body, name, email, password, is_shaver, hashPass, user, id;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password, is_shaver = _req$body.is_shaver;
          _context3.next = 3;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 8));

        case 3:
          hashPass = _context3.sent;
          user = {
            name: name,
            email: email,
            password: hashPass,
            is_shaver: is_shaver
          }; // debito técnico porque ainda não consegue validar o is_shaver da maneira correta
          //	if(!user.name || !user.email || !user.password){
          //		return res.status(400).json({ message: 'Every fields is mandatory.'})
          //	}

          console.log(user);
          _context3.prev = 6;
          _context3.next = 9;
          return regeneratorRuntime.awrap(deleteUser(user.email));

        case 9:
          _context3.next = 11;
          return regeneratorRuntime.awrap(insertUser(user));

        case 11:
          id = _context3.sent;
          res.status(201).json({
            user_id: id
          });
          _context3.next = 18;
          break;

        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](6);
          res.status(500).json({
            error: 'Ocorreu um erro.',
            stack: _context3.t0
          });

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[6, 15]]);
});
app.use(function (err, req, res, next) {
  if (err && err.error && err.error.isJoi) {
    // we had a joi error, let's return a custom 400 json response
    res.status(400).json({
      type: err.type,
      // will be "query" here, but could be "headers", "body", or "params"
      message: err.error.toString()
    });
  } else {
    // pass on to another error handler
    next(err);
  }
});
app.listen(5000);
//# sourceMappingURL=app.dev.js.map
