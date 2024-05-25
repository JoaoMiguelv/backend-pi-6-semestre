
import CommonService from '../commons/CommonService.js';
import { ListedShareHistory } from '../models/ListedShareHistoryModel.js';
import { BadRequestError } from '../errors/index.js';
import ListedSharesService from './ListedSharesService.js';
import axios from "axios";

export default class ListedShareHistoryService extends CommonService {
  constructor() {
    super(ListedShareHistory);
    this.listedShareHistoryModel = ListedShareHistory;
    this.listedSharesService = new ListedSharesService();
  }

  async create(req) {
    delete req.body.id_profile; // id_profile será definido pela IA

    const body = req.body;
    const orderedArray = [
      body.last_value,
      body.opening,
      body.high,
      body.low,
      body.trading_volume,
      body.percentage_change,
      body.id_listed_shares
    ];

    const reqOptions = {
      url: "https://training-pi-6.onrender.com/training",
      method: "POST",
      headers: { "Accept": "*/*", "Content-Type": "application/json" },
      data: JSON.stringify({ "data": orderedArray }),
    };

    try {
      const response = await axios.request(reqOptions);
      req.body.id_profile = response.data.id_profile;
    } catch (error) {
      throw new BadRequestError(error);
    }

    console.log('\n### MOVIMENTAÇÃO ', orderedArray, ' // PERFIL ', req.body.id_profile, ' ###\n');
    req.body.date = new Date(req.body.date).setUTCHours(3, 0, 0, 0);
    const response = await super.create(req);

    // Redefine o id_profile da ação com base na nova inserção na listed_share_history
    const historyByListedShare = await this.listedShareHistoryModel.findAll({ where: { id_listed_shares: body.id_listed_shares }, order: [['created_at', 'ASC']] });
    await this.listedSharesService.redefineProfileId(historyByListedShare, body.id_listed_shares);

    return response
  }
}
