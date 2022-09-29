// import sqlite.db from './sqlite.db'
const sqlite = require('./db')
 const runSQL = function (sql) {
    sqlite.db.exec('BEGIN')
    try {
      sqlite.db.exec(sql)
      sqlite.db.exec('COMMIT')
    } catch (err) {
      sqlite.db.exec('ROLLBACK')
      throw err
    }
  }
  const findOne = function (sql, args) {
    const stmt = sqlite.db.prepare(sql)
    if (args) {
      return stmt.get(args)
    } else {
      return stmt.get()
    }
  }
  const findData = function  (sql, args) {
    const stmt = sqlite.db.prepare(sql)
    if (args) {
      return stmt.all(args)
    } else {
      return stmt.all()
    }
  }
  const addData = function  (sql, args) {
    const stmt = sqlite.db.prepare(sql)
    if (args instanceof Array) {
      const many = sqlite.db.transaction((args) => {
        for (const arg of args) stmt.run(arg)
      })
      return many(args)
    } else {
      return stmt.run(args)
    }
  }
  const deleData = function  (sql, args) {
    const stmt = sqlite.db.prepare(sql)
    if (args instanceof Array) {
      const many = sqlite.db.transaction((args) => {
        for (const arg of args) stmt.run(arg)
      })
      return many(args)
    } else {
      return stmt.run(args)
    }
  }
  const updateData = function  (sql, args) {
    const stmt = sqlite.db.prepare(sql)
    return stmt.run(args)
  }

module.exports = {
    runSQL,
    findData,
    findOne,
    deleData,
    updateData,
    addData
}