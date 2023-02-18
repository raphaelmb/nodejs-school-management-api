import User from "../staff/User";
import AcademicTerm from "./AcademicTerm";
import AcademicYear from "./AcademicYear";
import ClassLevel from "./ClassLevel";
import Program from "./Program";
import Question from "./Question";
import Subject from "./Subject";

enum ExamType {
  quiz = "quiz",
}

enum ExamStatus {
  pending = "pending",
  live = "live",
}

export default class Exam {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly subject: Subject,
    readonly program: Program,
    readonly passMark: number,
    readonly totalMark: number,
    readonly academicTerm: AcademicTerm,
    readonly duration: number,
    readonly examDate: Date,
    readonly examType: ExamType,
    readonly examStatus: ExamStatus,
    readonly questions: Question[],
    readonly classLevel: ClassLevel,
    readonly createdBy: User,
    readonly academicYear: AcademicYear,
    readonly id?: string
  ) {
    if (!this.id) this.id = crypto.randomUUID();
  }
}
