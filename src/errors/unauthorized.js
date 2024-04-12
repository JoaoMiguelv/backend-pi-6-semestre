import { DefaultError } from './default-error.js';
import { HTTP_STATUS } from './http-errors.js';

export class Unauthorized extends DefaultError {
  constructor(message, status = 'UNAUTHORIZED') {
    super({
      statusCode: HTTP_STATUS.UNAUTHORIZED,
      status,
      message,
    });
  }
}

export const unauthorized = new Unauthorized();
