import { Router } from 'express';
import authenticationMiddleware from '../utils/authenticationMiddleware.js';

export default class CommonRoute {
  constructor(controller) {
    this.controller = controller;
    this.router = Router();

    this.initCommonRoutes();
  }

  initCommonRoutes() {
    this.router.use((req, res, next) => authenticationMiddleware(req, res, next)); // Middleware de autenticação para todas as rotas
    this.router.get('/', (req, res, next) => this.controller.getAll(req, res, next));
    this.router.get('/:id', (req, res, next) => this.controller.getById(req, res, next));
    this.router.post('/', (req, res, next) => this.controller.create(req, res, next));
    this.router.put('/:id', (req, res, next) => this.controller.update(req, res, next));
    this.router.delete('/:id', (req, res, next) => this.controller.destroy(req, res, next));
  }
}
