import CommonRoute from '../../commons/CommonRoute.js';
import UsersController from '../../controllers/UsersController.js';

export default class UsersRouter extends CommonRoute {
  constructor() {
    super(new UsersController());
    this.initCustomRoutes();
  }

  initCustomRoutes() {
    // Rotas customizadas
  }
}
