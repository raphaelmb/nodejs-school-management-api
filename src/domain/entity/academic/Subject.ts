import Admin from "../staff/Admin";
import Teacher from "../staff/Teacher";
import User, { Role } from "../staff/User";

export default class Subject {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly teacher: Teacher,
    readonly academicTerm: string,
    readonly createdBy: Admin,
    readonly durationInMonths: number,
    readonly id?: string
  ) {
    if (!this.id) this.id = crypto.randomUUID();
    this.validate();
  }

  validate(): void {
    if (this.createdBy.role !== Role.admin)
      throw new Error("Non admin cannot create subject");
  }
}
