import { DefaultError } from './default-error.js';
import { HTTP_STATUS } from './http-errors.js';

export class NotFoundError extends DefaultError {
  constructor(message, status = 'NOT_FOUND') {
    super({
      statusCode: HTTP_STATUS.NOT_FOUND,
      status,
      message,
    });
  }
}

export const notFoundError = new NotFoundError();
