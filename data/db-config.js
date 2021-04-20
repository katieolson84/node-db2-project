// no need to change this file
const knex = require('knex')
const configs = require('../knexfile.js')
const env = process.env.NODE_ENV || 'development'

const db = knex(configs[env])

module.exports = db
