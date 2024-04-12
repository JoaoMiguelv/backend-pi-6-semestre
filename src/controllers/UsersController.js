import CommonController from '../commons/CommonController.js';
import UsersService from '../services/UsersService.js';

export default class UsersController extends CommonController {
  constructor() {
    super(new UsersService());
  }
}
