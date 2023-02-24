import AcademicTerm from "../academic/AcademicTerm";
import AcademicYear from "../academic/AcademicYear";
import ClassLevel from "../academic/ClassLevel";
import Program from "../academic/Program";
import YearGroup from "../academic/YearGroup";
import Student from "./Student";
import Teacher from "./Teacher";
import User, { Role } from "./User";

export default class Admin extends User {
  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly emailInput: string,
    readonly password: string,
    // readonly academicTerms: AcademicTerm[],
    // readonly programs: Program[],
    // readonly yearGroups: YearGroup[],
    // readonly academicYears: AcademicYear[],
    // readonly classLevels: ClassLevel[],
    // readonly teachers: Teacher[],
    // readonly students: Student[],
    readonly id?: string
  ) {
    super(firstName, lastName, emailInput, password, Role.admin, id);
    if (!this.id) this.id = crypto.randomUUID();
  }
}
