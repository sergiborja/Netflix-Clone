export class UnexistenceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnexistenceError";
  }
}
export class DuplicityError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DuplicityError";
  }
}
export class VoidError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "VoidError";
  }
}
export class ValueError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValueError";
  }
}
export class CredentialsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CredentialsError";
  }
}
