import User, { Role } from "../staff/User";
import AcademicYear from "./AcademicYear";

export default class YearGroup {
  constructor(
    readonly name: string,
    readonly createdBy: User,
    readonly academicYear: AcademicYear,
    readonly id?: string
  ) {
    if (!this.id) this.id = crypto.randomUUID();
    this.validate();
  }

  validate(): void {
    if (this.createdBy.role != Role.admin)
      throw new Error("Non admin cannot create year group");
  }
}
