import { describe, expect, it } from "vitest";
import AcademicYear from "../academic/AcademicYear";
import {
  admin,
  examResult,
  program,
  student,
} from "../academic/test_data/data";
import Student from "./Student";

describe("Student test", () => {
  it("should create a student", () => {
    const date = new Date("2023-02-17T10:00:00");
    const student = new Student(
      "firstname",
      "lastname",
      "email@email.com",
      "password",
      "id",
      "current",
      new AcademicYear("name", new Date(), new Date(), true, admin),
      date,
      program,
      false,
      false,
      false,
      false,
      false,
      false,
      "prefName",
      "10"
    );
    expect(student.id).toBeDefined();
    expect(student.firstName).toBe("firstname");
    expect(student.lastName).toBe("lastname");
    expect(student.email.value).toBe("email@email.com");
    expect(student.password).toBe("password");
    expect(student.studentId).toBe("id");
    expect(student.currentClassLevel).toBe("current");
    expect(student.academicYear.id).toBeDefined();
    expect(student.dateAdmitted).toBe(date);
  });

  it("should add exam result", () => {
    const date = new Date("2023-02-17T10:00:00");
    const student = new Student(
      "firstname",
      "lastname",
      "email@email.com",
      "password",
      "id",
      "current",
      new AcademicYear("name", new Date(), new Date(), true, admin),
      date,
      program,
      false,
      false,
      false,
      false,
      false,
      false,
      "prefName",
      "10"
    );
    student.addExamResult(examResult);

    expect(student.examResults).length(1);
    expect(student.examResults[0].id).toBe(examResult.id);
  });

  it("should change promotion to level 200", () => {
    const date = new Date("2023-02-17T10:00:00");
    const student = new Student(
      "firstname",
      "lastname",
      "email@email.com",
      "password",
      "id",
      "current",
      new AcademicYear("name", new Date(), new Date(), true, admin),
      date,
      program,
      false,
      false,
      false,
      false,
      false,
      false,
      "prefName",
      "10"
    );
    student.changeIsPromotedToLevel200();

    expect(student.isPromotedToLevel200).toBe(true);
  });

  it("should change promotion to level 300", () => {
    const date = new Date("2023-02-17T10:00:00");
    const student = new Student(
      "firstname",
      "lastname",
      "email@email.com",
      "password",
      "id",
      "current",
      new AcademicYear("name", new Date(), new Date(), true, admin),
      date,
      program,
      false,
      false,
      false,
      false,
      false,
      false,
      "prefName",
      "10"
    );
    student.changeIsPromotedToLevel300();

    expect(student.isPromotedToLevel300).toBe(true);
  });

  it("should change promotion to level 400", () => {
    const date = new Date("2023-02-17T10:00:00");
    const student = new Student(
      "firstname",
      "lastname",
      "email@email.com",
      "password",
      "id",
      "current",
      new AcademicYear("name", new Date(), new Date(), true, admin),
      date,
      program,
      false,
      false,
      false,
      false,
      false,
      false,
      "prefName",
      "10"
    );
    student.changeIsPromotedToLevel400();

    expect(student.isPromotedToLevel400).toBe(true);
  });

  it("should change graduation status", () => {
    const date = new Date("2023-02-17T10:00:00");
    const student = new Student(
      "firstname",
      "lastname",
      "email@email.com",
      "password",
      "id",
      "current",
      new AcademicYear("name", new Date(), new Date(), true, admin),
      date,
      program,
      false,
      false,
      false,
      false,
      false,
      false,
      "prefName",
      "10"
    );
    student.changeIsGraduated();

    expect(student.isGratuated).toBe(true);
  });

  it("should change is withdrawn status", () => {
    const date = new Date("2023-02-17T10:00:00");
    const student = new Student(
      "firstname",
      "lastname",
      "email@email.com",
      "password",
      "id",
      "current",
      new AcademicYear("name", new Date(), new Date(), true, admin),
      date,
      program,
      false,
      false,
      false,
      false,
      false,
      false,
      "prefName",
      "10"
    );
    student.changeIsWithdrawn();

    expect(student.isWithdrawn).toBe(true);
  });

  it("should change is suspended status", () => {
    const date = new Date("2023-02-17T10:00:00");
    const student = new Student(
      "firstname",
      "lastname",
      "email@email.com",
      "password",
      "id",
      "current",
      new AcademicYear("name", new Date(), new Date(), true, admin),
      date,
      program,
      false,
      false,
      false,
      false,
      false,
      false,
      "prefName",
      "10"
    );
    student.changeIsSuspended();

    expect(student.isSuspended).toBe(true);
  });
});
