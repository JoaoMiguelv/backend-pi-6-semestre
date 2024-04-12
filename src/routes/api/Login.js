import { Router } from 'express';
import LoginController from '../../controllers/LoginController.js';

export default class LoginRouter {
  constructor() {
    this.loginController = new LoginController();
    this.router = Router();
    this.init();
  }

  init() {
    const { login } = this.loginController;
    // Rota sem autenticação
    this.router.post('/', (req, res, next) => login.bind(this.loginController)(req, res, next));
  }
}
