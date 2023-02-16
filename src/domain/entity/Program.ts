import Subject from "./Subject";
import User, { Role } from "./User";

// TODO: autogenerate code property
export default class Program {
  constructor(readonly name: string, readonly description: string, readonly duration: number, readonly code: string, readonly createdBy: User, readonly teachers: User[], readonly students: User[], readonly subjects: Subject[], readonly id?: string) {
    if (!this.id) this.id = crypto.randomUUID()
    this.validate()
  }

  validate(): void {
    if (this.createdBy.role != Role.admin) throw new Error("Non admin cannot create subject")
  }
}