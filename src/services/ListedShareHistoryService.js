
import CommonService from '../commons/CommonService.js';
import { ListedShareHistory } from '../models/ListedShareHistoryModel.js';
import { BadRequestError } from '../errors/index.js';
import axios from "axios";

export default class ListedShareHistoryService extends CommonService {
  constructor() {
    super(ListedShareHistory);
    this.listedShareHistoryModel = ListedShareHistory;
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

    console.log(orderedArray);

    const reqOptions = {
      url: "https://training-pi-6.onrender.com/training",
      method: "POST",
      headers: { "Accept": "*/*", "Content-Type": "application/json" },
      data: JSON.stringify({ "data": orderedArray }),
    };

    try {
      const response = await axios.request(reqOptions);
      console.log(response.data);
      req.body.id_profile = response.data.id_profile;
    } catch (error) {
      throw new BadRequestError(error);
    }

    console.log(req.body);

    return await super.create(req);
  }
}
