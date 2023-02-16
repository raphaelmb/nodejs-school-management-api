import Email from "./Email";

export enum Role {
  admin,
  teacher,
  student
}

export default class User {
  email: Email

  constructor(readonly firstName: string, readonly lastName: string, readonly emailInput: string, readonly password: string, readonly role: Role, readonly id?: string) {
    if (!this.id) this.id = crypto.randomUUID()
    this.email = new Email(emailInput)
    this.validate()
  }

  private validate(): void {
    if (!this.firstName || !this.lastName) throw new Error("First name and last name cannot be empty")
    if (this.password.length < 5) throw new Error("Password must be at least 5 characters long")
  }
}