import Fastify, {FastifyInstance, RouteShorthandOptions} from "fastify";

const server: FastifyInstance = Fastify({logger: true});

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string'
          }
        }
      }
    }
  }
}

server.get('/ping', opts, async (request, reply) => {
  return { pong: 'it worked!' }
})

const start  = async () => {
  try {
    await server.listen({port: 3000});
    const address = server.server.address();
    const port = typeof address === 'string' ? address : address?.port
    console.log("Server listening on port 3000, address: ", address);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

start();