import AcademicYear from "../academic/AcademicYear";
import ClassLevel from "../academic/ClassLevel";
import ExamResult from "../academic/ExamResult";
import Program from "../academic/Program";
import User, { Role } from "./User";

export default class Student extends User {
  readonly classLevels: ClassLevel[] = [];
  readonly examResults: ExamResult[] = [];

  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly emailInput: string,
    readonly password: string,
    readonly studentId: string,
    readonly currentClassLevel: string,
    readonly academicYear: AcademicYear,
    readonly dateAdmitted: Date = new Date(),
    readonly program: Program,
    private _isPromotedToLevel200: boolean,
    private _isPromotedToLevel300: boolean,
    private _isPromotedToLevel400: boolean,
    private _isGraduated: boolean,
    private _isWithdrawn: boolean,
    private _isSuspended: boolean,
    readonly prefecName: string,
    readonly yearGraduated: string,
    readonly id?: string
  ) {
    super(firstName, lastName, emailInput, password, Role.student, id);
    if (!this.id) this.id = crypto.randomUUID();
  }

  get isPromotedToLevel200() {
    return this._isPromotedToLevel200;
  }

  get isPromotedToLevel300() {
    return this._isPromotedToLevel300;
  }

  get isPromotedToLevel400() {
    return this._isPromotedToLevel400;
  }

  get isGratuated() {
    return this._isGraduated;
  }

  get isWithdrawn() {
    return this._isWithdrawn;
  }

  get isSuspended() {
    return this._isSuspended;
  }

  addExamResult(examResult: ExamResult): void {
    this.examResults.push(examResult);
  }

  changeIsPromotedToLevel200(): void {
    this._isPromotedToLevel200 = !this._isPromotedToLevel200;
  }

  changeIsPromotedToLevel300(): void {
    this._isPromotedToLevel300 = !this._isPromotedToLevel300;
  }

  changeIsPromotedToLevel400(): void {
    this._isPromotedToLevel400 = !this._isPromotedToLevel400;
  }

  changeIsGraduated(): void {
    this._isGraduated = !this._isGraduated;
  }

  changeIsWithdrawn(): void {
    this._isWithdrawn = !this._isWithdrawn;
  }

  changeIsSuspended(): void {
    this._isSuspended = !this._isSuspended;
  }
}
