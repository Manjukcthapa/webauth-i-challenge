const express = require('express');
const helmet = require('helmet');
const session = require('express-session');
const sessionConfig = require('../auth/sessionConfig')

const usersRouter = require('../users/user-router');
const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use(session(sessionConfig));
server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

module.exports = server;
