import CommonController from '../commons/CommonController.js';
import ClientsService from '../services/ClientsService.js';

export default class ClientsController extends CommonController {
  constructor() {
    super(new ClientsService());
  }
}
