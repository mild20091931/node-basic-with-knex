require('dotenv').config();
const knex = require('knex')('development');
const config = require('../../../knexfile');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = knex(config[NODE_ENV]);
