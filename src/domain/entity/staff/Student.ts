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
    readonly studentId: string,
    readonly classLevels: ClassLevel[],
    readonly currentClassLevel: string,
    readonly academicYear: AcademicYear,
    readonly dateAdmitted: Date = new Date(),
    readonly examResults: ExamResult[],
    readonly program: Program,
    private isPromotedToLevel200: boolean,
    private isPromotedToLevel300: boolean,
    private isPromotedToLevel400: boolean,
    private isGraduated: boolean,
    private isWithdrawn: boolean,
    private isSuspended: boolean,
    readonly prefecName: string,
    readonly yearGraduated: string,
    readonly id?: string
  ) {
    super(firstName, lastName, emailInput, password, Role.student, id);
  }

  addExamResult(examResult: ExamResult): void {
    this.examResults.push(examResult);
  }

  changeIsPromotedToLevel200(): void {
    this.isPromotedToLevel200 = !this.isPromotedToLevel200;
  }

  changeIsPromotedToLevel300(): void {
    this.isPromotedToLevel300 = !this.isPromotedToLevel300;
  }

  changeIsPromotedToLevel400(): void {
    this.isPromotedToLevel400 = !this.isPromotedToLevel400;
  }

  changeIsGraduated(): void {
    this.isGraduated = !this.isGraduated;
  }

  changeIsWithdrawn(): void {
    this.isWithdrawn = !this.isWithdrawn;
  }

  changeIsSuspended(): void {
    this.isSuspended = !this.isSuspended;
  }
}
