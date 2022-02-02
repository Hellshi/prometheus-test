const Router = require('express').Router();
const client = require('prom-client')


Router.get('/metrics', async (req, res) => {
    const register = new client.Registry()
    client.collectDefaultMetrics({
      prefix: 'payment_',
      gcDurationBuckets: [0.001, 0.01, 0.1, 1, 2, 5],
      register
    })
    res.setHeader('Content-Type', register.contentType)
    const response = await register.metrics()
    res.send(response)
})

module.exports = Router