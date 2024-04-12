export class DefaultError extends Error {
  constructor({ message, statusCode, status }) {
    super(message);
    this.statusCode = statusCode;
    this.status = status;
  }
}
