import User, { Role } from "./User";

export default class Admin extends User {
  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly emailInput: string,
    readonly password: string,
    readonly id?: string
  ) {
    super(firstName, lastName, emailInput, password, Role.admin, id);
  }
}
