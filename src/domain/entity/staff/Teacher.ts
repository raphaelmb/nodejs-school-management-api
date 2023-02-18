import AcademicTerm from "../academic/AcademicTerm";
import AcademicYear from "../academic/AcademicYear";
import ClassLevel from "../academic/ClassLevel";
import Exam from "../academic/Exam";
import Program from "../academic/Program";
import Subject from "../academic/Subject";
import User, { Role } from "./User";

enum ApplicationStatus {
  pending = "pending",
  approved = "approved",
  rejected = "rejected",
}

export default class Teacher extends User {
  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly emailInput: string,
    readonly password: string,
    readonly role: Role,
    readonly teacherId: string,
    readonly isWithdrawn: boolean,
    readonly isSuspended: boolean,
    readonly subject: Subject,
    readonly applicationStatus: ApplicationStatus,
    readonly program: Program,
    readonly classLevel: ClassLevel,
    readonly academicYear: AcademicYear,
    readonly examsCreated: Exam[],
    readonly createdBy: User,
    readonly academicTerm: AcademicTerm,
    readonly id?: string
  ) {
    super(firstName, lastName, emailInput, password, role, id);
  }
}
