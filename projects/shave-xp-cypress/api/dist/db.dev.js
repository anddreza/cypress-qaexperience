"use strict";

var _require = require('pg'),
    Pool = _require.Pool;

var dbConfig = {
  host: 'babar.db.elephantsql.com',
  user: 'knwprhil',
  password: 'LszmKao6wNjC76J2K5NXow-7DlTX40zG',
  database: 'knwprhil',
  port: 5432
};
var pool = new Pool(dbConfig);

function deleteUser(email) {
  return regeneratorRuntime.async(function deleteUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(pool.query('DELETE FROM users WHERE email = $1', [email]));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

function insertUser(user) {
  var sql, data, result, id;
  return regeneratorRuntime.async(function insertUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          sql = 'INSERT INTO users (name, email, password, is_shaver) VALUES ($1, $2, $3, $4) returning id';
          data = [user.name, user.email, user.password, user.is_shaver];
          _context2.next = 4;
          return regeneratorRuntime.awrap(pool.query(sql, data));

        case 4:
          result = _context2.sent;
          id = result.rows[0].id;
          return _context2.abrupt("return", id);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function findToken(email) {
  var sql, result;
  return regeneratorRuntime.async(function findToken$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          sql = 'select B.token from' + 'users A INNER JOIN user_tokens B' + 'ON A.id = B.user_id where' + 'A.email = $1' + 'ORDER bY B.created_at DESC LIMIT 1';
          _context3.next = 3;
          return regeneratorRuntime.awrap(pool.query(sql, [email]));

        case 3:
          result = _context3.sent;
          console.log(result.rows[0]);
          return _context3.abrupt("return", result.rows[0]);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
}

module.exports = {
  deleteUser: deleteUser,
  insertUser: insertUser,
  findToken: findToken
};
//# sourceMappingURL=db.dev.js.map
