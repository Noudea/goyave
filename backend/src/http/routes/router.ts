import {FastifyInstance} from "fastify";
import apiRoutes from './api/api';


function router (fastify :FastifyInstance, opts :Object, done :Function) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
  fastify.register(apiRoutes,{ prefix: '/api' })
  done()
}

export default router