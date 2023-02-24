import AcademicTerm from "../academic/AcademicTerm";
import AcademicYear from "../academic/AcademicYear";
import ClassLevel from "../academic/ClassLevel";
import Exam from "../academic/Exam";
import Program from "../academic/Program";
import Subject from "../academic/Subject";
import Admin from "./Admin";
import User, { Role } from "./User";

export enum ApplicationStatus {
  pending = "pending",
  approved = "approved",
  rejected = "rejected",
}

export default class Teacher extends User {
  readonly examsCreated: Exam[] = [];

  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly emailInput: string,
    readonly password: string,
    readonly teacherId: string,
    private isWithdrawn: boolean,
    private isSuspended: boolean,
    private applicationStatus: ApplicationStatus,
    readonly program: Program,
    readonly classLevel: ClassLevel,
    readonly academicYear: AcademicYear,
    readonly createdBy: Admin,
    readonly academicTerm: AcademicTerm,
    private subject?: Subject,
    readonly id?: string
  ) {
    super(firstName, lastName, emailInput, password, Role.teacher, id);
    if (!this.id) this.id = crypto.randomUUID();
  }

  createExam(exam: Exam): void {
    this.examsCreated.push(exam);
  }

  changeApplicationStatus(status: ApplicationStatus): void {
    this.applicationStatus = status;
  }

  changeWithdrawnStatus(): void {
    this.isWithdrawn = !this.isWithdrawn;
  }

  changeSuspensionStatus(): void {
    this.isSuspended = !this.isSuspended;
  }

  addSubject(subject: Subject): void {
    this.subject = subject;
  }
}
