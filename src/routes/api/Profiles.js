
import CommonRoute from '../../commons/CommonRoute.js';
import ProfilesController from '../../controllers/ProfilesController.js';

export default class ProfilesRouter extends CommonRoute {
  constructor() {
    super(new ProfilesController());
    this.initCustomRoutes();
  }

  initCustomRoutes() {
    // Rotas customizadas
  }
}
