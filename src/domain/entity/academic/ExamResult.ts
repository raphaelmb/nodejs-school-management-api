import Student from "../staff/Student";
import AcademicTerm from "./AcademicTerm";
import AcademicYear from "./AcademicYear";
import ClassLevel from "./ClassLevel";
import Exam from "./Exam";
import Subject from "./Subject";

enum ExamStatus {
  passed = "passed",
  failed = "failed",
}

enum ExamRemarks {
  excellent = "excelent",
  good = "good",
  poor = "poor",
}

export default class ExamResult {
  constructor(
    readonly student: Student,
    readonly exam: Exam,
    readonly grade: number,
    readonly score: number,
    readonly passMark: number,
    readonly status: ExamStatus,
    readonly remarks: ExamRemarks,
    readonly position: number,
    readonly subject: Subject,
    readonly classLevel: ClassLevel,
    readonly academicTerm: AcademicTerm,
    readonly academicYear: AcademicYear,
    readonly isPublished: boolean
  ) {}
}
