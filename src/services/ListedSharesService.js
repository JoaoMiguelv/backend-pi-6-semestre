
import CommonService from '../commons/CommonService.js';
import { ListedShares } from '../models/ListedSharesModel.js';

export default class ListedSharesService extends CommonService {
  constructor() {
    super(ListedShares);
    this.listedSharesModel = ListedShares;
  }

  async create(req) {
    // Define o id_profile como 0 (perfil 'undefined') caso não seja informado
    req.body.id_profile = req.body.id_profile ? req.body.id_profile : 0;
    return await super.create(req);
  }

  async redefineProfileId(historyByListedShare, listedShareId) {

    let weightedSum = 0;
    let totalWeight = 0;

    // Calcula a soma ponderada e o total de pesos
    historyByListedShare.forEach((history, index) => {
      const weight = index + 1; // Peso é index + 1 para dar mais peso para datas mais recentes
      const profileId = history.id_profile;

      weightedSum += weight * profileId;
      totalWeight += weight;
    });

    // Calcula a média ponderada dos id_profile
    const weightedAverage = weightedSum / totalWeight;

    // Arredonda a média ponderada para o valor mais próximo de id_profile inteiro
    const newProfileId = Math.round(weightedAverage);

    // Atualiza o id_profile da ação
    await this.listedSharesModel.update({ id_profile: newProfileId }, { where: { id: listedShareId } });
    console.log('\n### PERFIL ', newProfileId, ' REDEFINIDO PARA AÇÃO ', listedShareId, ' ###\n');

    return newProfileId;
  }
}
