
import CommonController from '../commons/CommonController.js';
import ListedShareHistoryService from '../services/ListedShareHistoryService.js';

export default class ListedShareHistoryController extends CommonController {
  constructor() {
    super(new ListedShareHistoryService());
  }
}
