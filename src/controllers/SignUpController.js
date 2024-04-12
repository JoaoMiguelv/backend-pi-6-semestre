import UsersService from '../services/UsersService.js';

export default class SignUpController {
  constructor() {
    this.usersService = new UsersService();
  }

  async signUp(req, res, next) {
    try {
      const user = await this.usersService.create(req);
      return res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
}
