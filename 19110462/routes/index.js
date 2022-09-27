const homeRouter = require('./home.route');
const _19110462Router = require('./19110462.route');
const messageRouter = require('./message.route');
const logMiddleware = require('../middleware/log.middleware')

function route(app) {
    app.use('/', logMiddleware , homeRouter)
    app.use('/19110462', logMiddleware , _19110462Router)
    app.use('/message', logMiddleware , messageRouter)
}

module.exports = route