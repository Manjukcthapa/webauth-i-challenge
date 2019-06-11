const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session); 


module.exports = {
    name:'monster',
    secret:'keep it secret, keep it safe!',
    resave:false,
    saceUninitialized:true,
    cookie: {
      maxAge:1000 * 60 * 10,
      secure:false,
      httpOnly:true
    },
    store: new KnexSessionStore({
      knex: require('../database/dbconfig.js'),
      tablename: 'sessions',
      sidfieldname: 'sid',
      createtable: true,
      clearInterval: 1000 * 60 * 30,
    }),
  }