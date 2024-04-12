import CommonService from '../commons/CommonService.js';
import { BadRequestError, Unauthorized } from '../errors/index.js';
import { Users } from '../models/UsersModel.js';
import bcrypt from 'bcrypt';

export default class UsersService extends CommonService {
  constructor() {
    super(Users);
    this.usersModel = Users;
  }

  async create(req) {
    const { cpf, email, name, password } = req.body;

    if (!cpf || !email || !name || !password) {
      throw new BadRequestError('Missing data');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new BadRequestError('Invalid email! Must be in the format:name@email.com', 'EMAIL_INVALID');
    }

    /*
    1. `(?=.* [a - z])`: At least one lowercase letter.
    2. `(?=.* [A - Z])`: At least one uppercase letter.
    3. `(?=.*\d)`: At least one number.
    4. `(?=.* [!@#$ %^&*])`: At least one special character `!@#$ %^&* `.
  */
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password)) {
      throw new BadRequestError(
        'Invalid password! Must contain 8 or more characters, at least one uppercase letter, one lowercase letter, one number, and one special character.',
        'PASSWORD_INVALID',
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    Object.assign(req.body, {
      password_hash: hashedPassword,
      active: true,
      is_admin: false,
      cpf: cpf.replace(/[^\d]/g, ''),
    });

    return await super.create(req);
  }

  async update(req) {
    const { id, is_admin } = req.session.user;
    const idParams = req.params.id;
    const { cpf, email, password } = req.body;
    delete req.body.password_hash;

    if (!is_admin && id !== idParams) {
      throw new Unauthorized('You cannot update another user!');
    }

    if (cpf || email) {
      throw new BadRequestError('CPF and email cannot be changed!');
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      req.body.password_hash = hashedPassword;
    }

    req.options = { where: { id: idParams } };

    return await super.update(req);
  }
}
