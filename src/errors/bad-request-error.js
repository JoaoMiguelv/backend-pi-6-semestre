import { DefaultError } from './default-error.js';
import { HTTP_STATUS } from './http-errors.js';

export class BadRequestError extends DefaultError {
  constructor(message, status = 'BAD_REQUEST') {
    super({
      statusCode: HTTP_STATUS.BAD_REQUEST,
      status,
      message,
    });
  }
}

export const badRequestError = new BadRequestError();
