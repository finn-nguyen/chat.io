import HttpStatusCode from 'http-status-codes';

export default class ForbiddenError extends Error {
  constructor(message) {
    super(message);

    this.statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR;
  }
}
