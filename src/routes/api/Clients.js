import CommonRoute from '../../commons/CommonRoute.js';
import ClientsController from '../../controllers/ClientsController.js';

export default class ClientsRouter extends CommonRoute {
  constructor() {
    super(new ClientsController());
    this.initCustomRoutes();
  }

  initCustomRoutes() {
    // Rotas customizadas
  }
}
