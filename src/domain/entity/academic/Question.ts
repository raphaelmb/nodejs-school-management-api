import User from "../staff/User";

export default class Question {
  constructor(
    readonly question: string,
    readonly optionA: string,
    readonly optionB: string,
    readonly optionC: string,
    readonly optionD: string,
    readonly correctAnswer: string,
    readonly isCorrect: boolean,
    readonly createdBy: User
  ) {}
}
