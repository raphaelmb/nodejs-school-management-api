import User, { Role } from "./User";

export default class AcademicTerm {
  constructor(readonly name: string, readonly description: string, readonly duration: number, readonly createdBy: User, readonly id?: string) {
    if (!this.id) this.id = crypto.randomUUID()
    this.validate()
  }

  validate(): void {
    if (this.createdBy.role != Role.admin) throw new Error("Non admin cannot create academic term")
  }
}