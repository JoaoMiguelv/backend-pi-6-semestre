
import CommonController from '../commons/CommonController.js';
import ListedSharesService from '../services/ListedSharesService.js';

export default class ListedSharesController extends CommonController {
  constructor() {
    super(new ListedSharesService());
  }
}
