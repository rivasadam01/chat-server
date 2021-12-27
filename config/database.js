const {db_user,db_password,db_host,db_database} = require('../startup/config')

module.exports={
  "development": {
    "username": db_user,
    "password": db_password,
    "database": db_database,
    "host": db_host,
    "dialect": "postgres"
  },
  "test": {
    "username": db_user,
    "password": db_password,
    "database": db_database,
    "host": db_host,
    "dialect": "postgres"
  },
  "production": {
    "username": db_user,
    "password": db_password,
    "database": db_database,
    "host": db_host,
    "dialect": "postgres"
  }
}
