
import CommonService from '../commons/CommonService.js';
import { InvestmentPortfolio } from '../models/InvestmentPortfolioModel.js';

export default class InvestmentPortfolioService extends CommonService {
  constructor() {
    super(InvestmentPortfolio);
    this.investmentPortfolioModel = InvestmentPortfolio;
  }

  async create(req) {
    delete req.body.invested_amount;
    const investedAmount = parseInt(req.body.quantity_purchased) * parseFloat(req.body.share_price);
    req.body.invested_amount = investedAmount;

    return await super.create(req);
  }
}
