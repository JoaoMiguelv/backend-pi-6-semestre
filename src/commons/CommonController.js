export default class CommonController {
  constructor(service) {
    this.service = service;
  }

  async getAll(req, res, next) {
    try {
      const result = await this.service.getAll(req);
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const result = await this.service.getById(req);
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const result = await this.service.create(req);
      return res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      req.options = { where: { id: req.params.id } };
      const result = await this.service.update(req);
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  async destroy(req, res, next) {
    try {
      const result = await this.service.destroy(req);
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}
