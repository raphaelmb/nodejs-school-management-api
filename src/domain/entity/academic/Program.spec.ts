import { describe, expect, it } from "vitest";
import User, { Role } from "../staff/User";
import Program from "./Program";
import Subject from "./Subject";
import { academicTerm, admin, student, teacher } from "./test_data/data";

describe("Program test", () => {
  it("should create a program", () => {
    const program = new Program(
      "program",
      "description",
      5,
      "program123",
      admin
    );

    expect(program.id).toBeDefined();
    expect(program.name).toBe("program");
    expect(program.description).toBe("description");
    expect(program.code).toBe("program123");
    expect(program.createdBy.id).toBe(admin.id);
  });

  it("should not create a program with a non admin role", () => {
    expect(
      () => new Program("program", "description", 5, "program123", teacher)
    ).toThrow(new Error("Non admin cannot create program"));
    expect(
      () => new Program("program", "description", 5, "program123", student)
    ).toThrow(new Error("Non admin cannot create program"));
  });

  it("should add teacher to program", () => {
    const program = new Program(
      "program",
      "description",
      5,
      "program123",
      admin
    );
    program.addTeacher(teacher);

    expect(program.teachers[0].id).toBe(teacher.id);
  });

  it("should add student to program", () => {
    const program = new Program(
      "program",
      "description",
      5,
      "program123",
      admin
    );
    program.addStudent(student);

    expect(program.students[0].id).toBe(student.id);
  });

  it("should add subject to program", () => {
    const program = new Program(
      "program",
      "description",
      5,
      "program123",
      admin
    );
    const subject = new Subject(
      "subject",
      "description",
      academicTerm,
      admin,
      4,
      teacher
    );
    program.addSubject(subject);

    expect(program.subjects[0].id).toBe(subject.id);
  });
});
