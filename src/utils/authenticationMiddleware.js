import { Users } from '../models/UsersModel.js';
import TokenGeneratorService from './TokenGeneratorService.js';
import { Unauthorized } from '../errors/index.js';

export default async function authenticationMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw new Unauthorized('Uninformed token!');
    }

    const tokenGenerator = new TokenGeneratorService();
    const decoded = tokenGenerator.verifyToken(token);
    const user = await Users.findByPk(decoded.id);

    if (!user) {
      throw new Unauthorized('User not cadastred!', 'USER_NOT_FOUND');
    }

    Object.assign(req.session, { user, token });
    next();
  } catch (error) {
    return res.status(401).json({
      message: error.message,
      status: 'UNAUTHORIZED',
    });
  }
}
