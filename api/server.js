const express = require('express');
const helmet = require('helmet');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);


const usersRouter = require('../users/user-router');
const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
const sessionConfig = {
  name:'monster',
  secret:'keep it secret, keep it safe!',
  resave:false,
  saceUninitialized:true,
  cookie: {
    maxAge:1000 * 60 * 10,
    secure:false,
    httpOnly:true
  }
}


server.use(session(sessionConfig));
server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

module.exports = server;
