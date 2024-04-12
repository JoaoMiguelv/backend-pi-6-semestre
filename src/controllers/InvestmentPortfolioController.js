
import CommonController from '../commons/CommonController.js';
import InvestmentPortfolioService from '../services/InvestmentPortfolioService.js';

export default class InvestmentPortfolioController extends CommonController {
  constructor() {
    super(new InvestmentPortfolioService());
  }
}
