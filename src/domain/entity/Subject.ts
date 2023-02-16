import User, { Role } from "./User";

export default class Subject {
  constructor(readonly name: string, readonly description: string, readonly teacher: User, readonly academicTerm: string, readonly createdBy: User, readonly duration: number, readonly id?: string) {
    if (!this.id) this.id = crypto.randomUUID()
    this.validate()
  }

  validate(): void {
    if (this.createdBy.role != Role.admin) throw new Error("Non admin cannot create subject")
  }
}