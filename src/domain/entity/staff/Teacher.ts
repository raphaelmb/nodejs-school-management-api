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
    private _isWithdrawn: boolean,
    private _isSuspended: boolean,
    private _applicationStatus: ApplicationStatus,
    readonly program: Program,
    readonly classLevel: ClassLevel,
    readonly academicYear: AcademicYear,
    readonly createdBy: Admin,
    readonly academicTerm: AcademicTerm,
    private _subject?: Subject,
    readonly id?: string
  ) {
    super(firstName, lastName, emailInput, password, Role.teacher, id);
    if (!this.id) this.id = crypto.randomUUID();
  }

  get isWithdrawn() {
    return this._isWithdrawn;
  }

  get isSuspended() {
    return this._isSuspended;
  }

  get applicationStatus() {
    return this._applicationStatus;
  }

  get subject() {
    return this._subject;
  }

  createExam(exam: Exam): void {
    this.examsCreated.push(exam);
  }

  changeWithdrawnStatus(): void {
    this._isWithdrawn = !this.isWithdrawn;
  }

  changeSuspensionStatus(): void {
    this._isSuspended = !this.isSuspended;
  }

  addSubject(subject: Subject): void {
    this._subject = subject;
  }
}
