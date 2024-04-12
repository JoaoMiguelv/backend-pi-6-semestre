import { Users } from '../models/UsersModel.js';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import TokenGeneratorService from '../utils/TokenGeneratorService.js';
import bcrypt from 'bcrypt';
import { Op } from 'sequelize';

export default class UsersService {
  constructor() {
    this.usersModel = Users;
  }

  async validateLogin(req) {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new BadRequestError('Missing username or password', 'CREDENTIALS_INVALID');
    }

    const user = await this.usersModel.findOne({
      where: {
        [Op.or]: [
          { cpf: username.replace(/[^\d]/g, '') },
          { email: { [Op.like]: `${username.replace(/@.*/, '').trim()}@%` } },
        ],
      },
    });

    if (!user || !user.active) {
      throw new NotFoundError('User not found!');
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password_hash);
    if (!passwordIsValid) {
      throw new NotFoundError('Credentials are invalid!', 'CREDENTIALS_INVALID');
    }

    const tokenGenerator = new TokenGeneratorService();
    const accessToken = tokenGenerator.generateToken({
      id: user.id,
      username: user.username,
    });

    const result = {
      user: { ...user.dataValues, password_hash: undefined },
      access_token: accessToken,
    };

    return result;
  }
}
