import { DefaultError } from './default-error.js';
import { HTTP_STATUS } from './http-errors.js';

export class MethodNotAllowed extends DefaultError {
  constructor(message, status = 'METHOD_NOT_ALLOWED') {
    super({
      statusCode: HTTP_STATUS.METHOD_NOT_ALLOWED,
      status,
      message,
    });
  }
}

export const methodNotAllowed = new MethodNotAllowed();
