import HttpStatusCode from 'http-status-codes';

export default class BadRequestError extends Error {
  constructor(message) {
    super(message);

    this.statusCode = HttpStatusCode.BAD_REQUEST;
  }
}
