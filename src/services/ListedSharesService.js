
import CommonService from '../commons/CommonService.js';
import { ListedShares } from '../models/ListedSharesModel.js';

export default class ListedSharesService extends CommonService {
  constructor() {
    super(ListedShares);
    this.listedSharesModel = ListedShares;
  }

  async create(req) {
    delete req.body.id_profile; // Não permitir que o usuário informe o id_profile

    const profile = 2; // Será retornado pela IA
    req.body.id_profile = profile;

    return await super.create(req);
  }
}
