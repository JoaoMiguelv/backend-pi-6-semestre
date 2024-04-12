import { Router } from 'express';
import SignUpController from '../../controllers/SignUpController.js';

export default class SignUpRouter {
  constructor() {
    this.signUpController = new SignUpController();
    this.router = Router();
    this.init();
  }

  init() {
    const { signUp } = this.signUpController;
    // Rota sem autenticação
    this.router.post('/', (req, res, next) => signUp.bind(this.signUpController)(req, res, next));
  }
}
