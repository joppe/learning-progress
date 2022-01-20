export class AlreadyAddedError extends Error {
  public constructor(message: string) {
    super(message);

    this.name = 'AlreadyAddedError';
  }
}
