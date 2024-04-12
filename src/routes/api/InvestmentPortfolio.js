
import CommonRoute from '../../commons/CommonRoute.js';
import InvestmentPortfolioController from '../../controllers/InvestmentPortfolioController.js';

export default class InvestmentPortfolioRouter extends CommonRoute {
  constructor() {
    super(new InvestmentPortfolioController());
    this.initCustomRoutes();
  }

  initCustomRoutes() {
    // Rotas customizadas
  }
}
