import { Op } from 'sequelize';
import CommonService from '../commons/CommonService.js';
import { Clients } from '../models/ClientsModel.js';

const { INITIAL_PAGE, PAGE_SIZE } = process.env;

export default class ClientsService extends CommonService {
  constructor() {
    super(Clients);
  }

  async getAll(req) {
    if (req.query.name) {
      const { page = INITIAL_PAGE, size = PAGE_SIZE } = req.query;

      const items = await this.model.findAll({
        where: {
          name: {
            [Op.iLike]: `${req.query.name}%`,
          },
        },
        limit: size,
        offset: (page - 1) * size,
      });

      const totalItems = await this.model.count({
        where: {
          name: {
            [Op.iLike]: `${req.query.name}%`,
          },
        },
      });

      return {
        items,
        totalItems,
      };
    }

    return super.getAll(req);
  }
}
