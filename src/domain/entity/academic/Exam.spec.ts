import exp from "constants";
import { describe, expect, it } from "vitest";
import { Role } from "../staff/User";
import AcademicYear from "./AcademicYear";
import ClassLevel from "./ClassLevel";
import Exam, { ExamStatus, ExamType } from "./Exam";
import {
  academicTerm,
  admin,
  program,
  question,
  student,
  subject,
  teacher,
} from "./test_data/data";

describe("Exam test", () => {
  it("should create an exam", () => {
    const date = new Date();
    const exam = new Exam(
      "name",
      "name",
      subject,
      program,
      80,
      100,
      academicTerm,
      10,
      date,
      ExamType.quiz,
      ExamStatus.live,
      new ClassLevel("name", "description", admin),
      teacher,
      new AcademicYear("name", new Date(), new Date(), true, admin)
    );

    expect(exam.id).toBeDefined();
    expect(exam.name).toBe("name");
    expect(exam.subject.id).toBe(subject.id);
    expect(exam.program.id).toBe(program.id);
    expect(exam.passMark).toBe(80);
    expect(exam.totalMark).toBe(100);
    expect(exam.academicTerm.id).toBe(academicTerm.id);
    expect(exam.duration).toBe(10);
    expect(exam.examDate).toBe(date);
    expect(exam.examType).toBe(ExamType.quiz);
    expect(exam.examStatus).toBe(ExamStatus.live);
    expect(exam.classLevel.id).toBeDefined();
    expect(exam.createdBy.role).toBe(Role.teacher);
    expect(exam.academicYear.id).toBeDefined();
  });

  it("should add a question to an exam", () => {
    const date = new Date();
    const exam = new Exam(
      "name",
      "name",
      subject,
      program,
      80,
      100,
      academicTerm,
      10,
      date,
      ExamType.quiz,
      ExamStatus.live,
      new ClassLevel("name", "description", admin),
      teacher,
      new AcademicYear("name", new Date(), new Date(), true, admin)
    );

    exam.addQuestions(question);

    expect(exam.questions).length(1);
  });
});
