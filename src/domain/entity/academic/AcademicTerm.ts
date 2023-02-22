import Admin from "../staff/Admin";
import User, { Role } from "../staff/User";

export default class AcademicTerm {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly durationInMonths: number,
    readonly createdBy: Admin,
    readonly id?: string
  ) {
    if (!this.id) this.id = crypto.randomUUID();
    this.validate();
  }

  validate(): void {
    if (this.createdBy.role != Role.admin)
      throw new Error("Non admin cannot create academic term");
  }
}
