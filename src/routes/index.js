import interceptExceptionMiddleware from '../utils/interceptExceptionMiddleware.js';
import LoginRoute from './api/Login.js';
import SignUpRoute from './api/SignUp.js';
import UsersRoute from './api/Users.js';
import ClientsRouter from './api/Clients.js';
import ProfilesRouter from './api/Profiles.js';
import ListedSharesRouter from './api/ListedShares.js';

const routes = [
  { path: '/sign-in', router: new LoginRoute().router },
  { path: '/sign-up', router: new SignUpRoute().router },
  { path: '/users', router: new UsersRoute().router },
  { path: '/clients', router: new ClientsRouter().router },
  { path: '/profiles', router: new ProfilesRouter().router },
  { path: '/listed-shares', router: new ListedSharesRouter().router },
];

export default function setupRoutes(app) {
  routes.forEach((route) => {
    app.use(route.path, route.router);
  });

  app.use(interceptExceptionMiddleware); // Middleware de interceptação de exceções
}
