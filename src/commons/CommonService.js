import { BadRequestError, NotFoundError } from '../errors/index.js';
const { INITIAL_PAGE, PAGE_SIZE } = process.env;

export default class CommonService {
  constructor(model) {
    this.model = model;
  }

  async getAll(options, include = []) {
    const { page = INITIAL_PAGE, size = PAGE_SIZE, ...query } = options.query;

    const items = await this.model.findAll({
      include,
      where: { ...query },
      limit: size,
      offset: (page - 1) * size,
      order: [['created_at', 'DESC']],
    });

    const totalItems = await this.model.count({ where: { ...query } });

    return {
      items,
      totalItems,
    };
  }

  async getById(req, include = []) {
    const { id } = req.params;
    const result = await this.model.findOne({
      include,
      where: { id },
    });

    if (!result) {
      throw new NotFoundError(`Id ${id} not found for model ${this.model.name}!`);
    }

    return result;
  }

  async create(req) {
    return await this.model.create(req.body);
  }

  async update(req) {
    const options = req.options;

    if (!options.where) {
      throw new BadRequestError('Missing where clause!');
    }

    const result = await this.model.update(req.body, { ...options });

    if (result[0] == 0) {
      throw new NotFoundError(`Updated was not possible for model ${this.model.name}!`);
    }

    return {
      message: `${this.model.name} updated successfully!`,
    };
  }

  async destroy(req) {
    const { id } = req.params;
    if (!id) {
      throw new BadRequestError('Missing id!');
    }

    return await this.model.destroy({ where: { id } });
  }
}
