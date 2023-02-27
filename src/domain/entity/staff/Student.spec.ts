import { describe, expect, it } from "vitest";
import AcademicYear from "../academic/AcademicYear";
import { admin, program } from "../academic/test_data/data";
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
});
