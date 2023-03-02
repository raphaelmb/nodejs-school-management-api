import Student from "../staff/Student";
import AcademicTerm from "./AcademicTerm";
import AcademicYear from "./AcademicYear";
import ClassLevel from "./ClassLevel";
import Subject from "./Subject";

export enum ExamResultStatus {
  passed = "passed",
  failed = "failed",
}

export enum ExamRemarks {
  excellent = "excelent",
  good = "good",
  poor = "poor",
}

export default class ExamResult {
  constructor(
    readonly student: Student,
    readonly examId: string,
    readonly grade: number,
    readonly score: number,
    readonly passMark: number,
    readonly status: ExamResultStatus,
    readonly remarks: ExamRemarks,
    readonly position: number,
    readonly subject: Subject,
    readonly classLevel: ClassLevel,
    readonly academicTerm: AcademicTerm,
    readonly academicYear: AcademicYear,
    readonly isPublished: boolean,
    readonly id?: string
  ) {
    if (!this.id) this.id = crypto.randomUUID();
  }
}
