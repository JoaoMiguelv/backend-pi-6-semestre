
import CommonRoute from '../../commons/CommonRoute.js';
import ListedShareHistoryController from '../../controllers/ListedShareHistoryController.js';

export default class ListedShareHistoryRouter extends CommonRoute {
  constructor() {
    super(new ListedShareHistoryController());
    this.initCustomRoutes();
  }

  initCustomRoutes() {
    // Rotas customizadas
  }
}
