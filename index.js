const path = require('path');
const fastify = require('fastify')({ logger: true });

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
});

fastify.get('/data', async (request, reply) => {
  let delay = request.query.delay || 0;
  let size = request.query.size || 0;
  let contentType = request.query.contentType || 'text/plain';
  await sleep(delay);
  reply.header('Content-Type', contentType);
  reply.send('x'.repeat(size));
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}