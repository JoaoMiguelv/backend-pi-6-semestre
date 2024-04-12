
import CommonService from '../commons/CommonService.js';
import { Profiles } from '../models/ProfilesModel.js';

export default class ProfilesService extends CommonService {
  constructor() {
    super(Profiles);
    this.profilesModel = Profiles;
  }
}
