var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"https://picolab.prismic.io/api"',
  MAIL_URL: '"http://localhost:3000"'
})
