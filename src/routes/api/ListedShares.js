
import CommonRoute from '../../commons/CommonRoute.js';
import ListedSharesController from '../../controllers/ListedSharesController.js';

export default class ListedSharesRouter extends CommonRoute {
  constructor() {
    super(new ListedSharesController());
    this.initCustomRoutes();
  }

  initCustomRoutes() {
    // Rotas customizadas
  }
}
