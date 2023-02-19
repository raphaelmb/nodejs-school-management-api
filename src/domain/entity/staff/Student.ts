import AcademicYear from "../academic/AcademicYear";
import ClassLevel from "../academic/ClassLevel";
import ExamResult from "../academic/ExamResult";
import Program from "../academic/Program";
import User, { Role } from "./User";

export default class Student extends User {
  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly emailInput: string,
    readonly password: string,
    readonly role: Role,
    readonly studentId: string,
    readonly classLevels: ClassLevel,
    readonly currentClassLevel: string,
    readonly academicYear: AcademicYear,
    readonly dateAdmitted: Date,
    readonly examResults: ExamResult[],
    readonly program: Program,
    readonly isPromotedToLevel200: boolean,
    readonly isPromotedToLevel300: boolean,
    readonly isPromotedToLevel400: boolean,
    readonly isGraduated: boolean,
    readonly isWithdrawn: boolean,
    readonly isSuspended: boolean,
    readonly prefecName: string,
    readonly yearGraduated: string,
    readonly id?: string
  ) {
    super(firstName, lastName, emailInput, password, role, id);
  }
}
