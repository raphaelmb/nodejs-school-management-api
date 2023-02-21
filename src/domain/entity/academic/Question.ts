import Teacher from "../staff/Teacher";
import { Role } from "../staff/User";

enum CorrectAnswer {
  optionA = "A",
  optionB = "B",
  optionC = "C",
  optionD = "D",
}

export default class Question {
  constructor(
    readonly question: string,
    readonly optionA: string,
    readonly optionB: string,
    readonly optionC: string,
    readonly optionD: string,
    readonly correctAnswer: CorrectAnswer,
    readonly isCorrect: boolean,
    readonly createdBy: Teacher
  ) {
    this.validate();
  }

  validate(): void {
    if (this.createdBy.role !== Role.teacher)
      throw new Error("Only a teacher can create a question");
  }
}
