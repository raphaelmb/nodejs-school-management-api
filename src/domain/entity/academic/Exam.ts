import Teacher from "../staff/Teacher";
import { Role } from "../staff/User";
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
  readonly questions: Question[] = [];

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
    readonly classLevel: ClassLevel,
    readonly createdBy: Teacher,
    readonly academicYear: AcademicYear,
    readonly id?: string
  ) {
    if (!this.id) this.id = crypto.randomUUID();
    this.validate();
  }

  validate(): void {
    if (this.createdBy.role !== Role.teacher)
      throw new Error("Only a teacher can create an exam");
  }

  addQuestions(question: Question): void {
    this.questions.push(question);
  }
}
