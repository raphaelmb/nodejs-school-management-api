import Admin from "../staff/Admin";
import Student from "../staff/Student";
import Teacher from "../staff/Teacher";
import { Role } from "../staff/User";
import AcademicYear from "./AcademicYear";
import Subject from "./Subject";

export default class YearGroup {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly academicYear: AcademicYear,
    readonly subjects: Subject[] = [],
    readonly students: Student[] = [],
    readonly teachers: Teacher[] = [],
    readonly createdBy: Admin,
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
