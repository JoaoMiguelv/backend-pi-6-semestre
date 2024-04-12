
import CommonController from '../commons/CommonController.js';
import ProfilesService from '../services/ProfilesService.js';

export default class ProfilesController extends CommonController {
  constructor() {
    super(new ProfilesService());
  }
}
