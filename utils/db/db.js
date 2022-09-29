

const DB = require('better-sqlite3-helper');
// let dataPath=process.env.NODE_ENV === 'development'?path.join(remote.app.getPath('exe'), '../data/app.db'):path.join(remote.app.getPath('userData'), './data/app.db')
// let migrationPath=process.env.NODE_ENV === 'development'?path.join(remote.app.getPath('exe'), '../migrations'):path.join(remote.app.getPath('exe'), '../migrations')
// console.log('dataPath:', dataPath)
// console.log('migrationPath:', migrationPath)
const db=DB({
  path: './data/sqlite3.db',
//   path: './data/sqlite3.db', // this is the default
  readonly: false, // read only
  fileMustExist: false, // throw error if database not exists
  WAL: true, // automatically enable 'PRAGMA journal_mode = WAL'
  migrate: {  // disable completely by setting `migrate: false`
    force: false, // set to 'last' to automatically reapply the last migration-file
    table: 'migration', // name of the database table that is used to keep track
    migrationsPath: './migrations' // 跟随exe打包升级
  }
})
module.exports={
    db
}