import Fastify, {fastify, FastifyInstance, FastifyPluginAsync, FastifyPluginCallback} from "fastify";
import middie from "@fastify/middie";


class Server {
  public server: FastifyInstance;
  public port = 3000;
  public router;

  constructor(router: (fastify :FastifyInstance, opts :Object, done :Function) => void, port: number) {
    this.server = Fastify({logger: true});
    this.port = port;
    this.router = router;
    this.initializeMiddlewares();
    this.initRouter();
  }

  private initRouter() {
    this.server.register(this.router);
  }

  private initializeMiddlewares() {
    this.server.register(middie)
  }

  public async start() {
    try {
      await this.server.listen({port: this.port});
      const address = this.server.server.address();
      const port = typeof address === 'string' ? address : address?.port
      console.log("Server listening on port 3000, address: ", address);
    } catch (err) {
      this.server.log.error(err);
      process.exit(1);
    }
  }


}

export default Server