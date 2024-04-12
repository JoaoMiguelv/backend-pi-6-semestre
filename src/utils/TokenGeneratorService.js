import jwt from 'jsonwebtoken';

export default class TokenGeneratorService {
  constructor() {
    this.secret = process.env.JWT_SECRET;
    this.expiration = process.env.JWT_EXPIRATION;
  }

  generateToken(payload) {
    return jwt.sign(payload, this.secret, { expiresIn: this.expiration });
  }

  verifyToken(token) {
    return jwt.verify(token, this.secret);
  }
}
