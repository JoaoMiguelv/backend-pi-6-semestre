
import CommonService from '../commons/CommonService.js';
import { ListedShareHistory } from '../models/ListedShareHistoryModel.js';

export default class ListedShareHistoryService extends CommonService {
  constructor() {
    super(ListedShareHistory);
    this.listedShareHistoryModel = ListedShareHistory;
  }
}
