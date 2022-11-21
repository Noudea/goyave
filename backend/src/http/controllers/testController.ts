import {FastifyPluginAsync, FastifyReply, FastifyRequest, RouteHandler} from "fastify";


class TestController {

  public get: RouteHandler = async (request: FastifyRequest, res: FastifyReply) => {
    try {
      console.log('request')
      return res.status(200).send({ hello: "Hello World" })
    } catch (err) {
      return res.send({ hello: "Error fetching data" })
    }
  }


}

export default TestController;