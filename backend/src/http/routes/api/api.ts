import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import TestController from "../../controllers/testController";


function router (fastify :FastifyInstance, opts :Object, done :Function) {

  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' },
          },
        },
        201 : {
          type: 'object',
          properties: {
            hello: { type: 'string' },
          }
        }
      }
    },
    handler : new TestController().get
  })
  done()
}

export default router