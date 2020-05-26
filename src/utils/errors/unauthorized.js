import HttpStatusCode from 'http-status-codes';

export default class UnauthorizedError extends Error {
  constructor(message) {
    super(message);

    this.statusCode = HttpStatusCode.UNAUTHORIZED;
  }
}
