import Admin from "../staff/Admin";
import Teacher from "../staff/Teacher";
import { Role } from "../staff/User";
import AcademicTerm from "./AcademicTerm";

export default class Subject {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly academicTerm: AcademicTerm,
    readonly createdBy: Admin,
    readonly durationInMonths: number,
    private _teacher: Teacher,
    readonly id?: string
  ) {
    if (!this.id) this.id = crypto.randomUUID();
    this.validate();
  }

  validate(): void {
    if (this.createdBy.role !== Role.admin)
      throw new Error("Non admin cannot create subject");
  }

  get teacher() {
    return this._teacher;
  }
}
