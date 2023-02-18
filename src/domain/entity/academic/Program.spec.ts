import { describe, expect, it } from "vitest";
import User, { Role } from "../staff/User";
import Program from "./Program";
import Subject from "./Subject";

describe("Program test", () => {
  it("should create a program", () => {
    const admin = new User(
      "admin",
      "lastname",
      "name@email.com",
      "password",
      Role.admin
    );
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
    const nonAdminTeacher = new User(
      "nonAdmin",
      "lastname",
      "name@email.com",
      "password",
      Role.teacher
    );
    const nonAdminStudent = new User(
      "nonAdmin",
      "lastname",
      "name@email.com",
      "password",
      Role.student
    );

    expect(
      () =>
        new Program("program", "description", 5, "program123", nonAdminTeacher)
    ).toThrow(new Error("Non admin cannot create program"));
    expect(
      () =>
        new Program("program", "description", 5, "program123", nonAdminStudent)
    ).toThrow(new Error("Non admin cannot create program"));
  });

  it("should add teacher to program", () => {
    const admin = new User(
      "admin",
      "lastname",
      "name@email.com",
      "password",
      Role.admin
    );
    const teacher = new User(
      "teacher",
      "lastname",
      "name@email.com",
      "password",
      Role.teacher
    );
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

  it("should not add a non teacher to program", () => {
    const admin = new User(
      "admin",
      "lastname",
      "name@email.com",
      "password",
      Role.admin
    );
    const nonTeacher = new User(
      "student",
      "lastname",
      "name@email.com",
      "password",
      Role.student
    );
    const program = new Program(
      "program",
      "description",
      5,
      "program123",
      admin
    );

    expect(() => program.addTeacher(nonTeacher)).toThrow(
      new Error("Cannot add a non teacher")
    );
  });

  it("should add student to program", () => {
    const admin = new User(
      "admin",
      "lastname",
      "name@email.com",
      "password",
      Role.admin
    );
    const student = new User(
      "student",
      "lastname",
      "name@email.com",
      "password",
      Role.student
    );
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

  it("should not add a non student to program", () => {
    const admin = new User(
      "admin",
      "lastname",
      "name@email.com",
      "password",
      Role.admin
    );
    const nonStudent = new User(
      "teacher",
      "lastname",
      "name@email.com",
      "password",
      Role.teacher
    );
    const program = new Program(
      "program",
      "description",
      5,
      "program123",
      admin
    );

    expect(() => program.addStudent(nonStudent)).toThrow(
      new Error("Cannot add a non student")
    );
  });

  it("should add subject to program", () => {
    const admin = new User(
      "admin",
      "lastname",
      "name@email.com",
      "password",
      Role.admin
    );
    const program = new Program(
      "program",
      "description",
      5,
      "program123",
      admin
    );
    const teacher = new User(
      "teacher",
      "lastname",
      "name@email.com",
      "password",
      Role.teacher
    );
    const subject = new Subject(
      "subject",
      "description",
      teacher,
      "4",
      admin,
      10
    );
    program.addSubject(subject);

    expect(program.subjects[0].id).toBe(subject.id);
  });
});
