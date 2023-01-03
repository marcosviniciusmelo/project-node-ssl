const controller = require(__filename.replace('routes', 'controllers'))

app.post('/confirm', controller.validateTokens)

module.exports = app
