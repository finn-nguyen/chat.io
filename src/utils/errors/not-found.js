import HttpStatusCode from 'http-status-codes';

export default class NotFoundError extends Error {
  constructor(message) {
    super(message);

    this.statusCode = HttpStatusCode.NOT_FOUND;
  }
}
