import LoginService from '../services/LoginService.js';

export default class LoginController {
  constructor() {
    this.loginService = new LoginService();
  }

  async login(req, res, next) {
    try {
      const user = await this.loginService.validateLogin(req);
      return res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
}
