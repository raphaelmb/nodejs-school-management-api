import { describe, expect, it } from "vitest";
import User, { Role } from "../staff/User";
import AcademicYear from "./AcademicYear";

describe("AcademicYear test", () => {
  it("should create an academid year", () => {
    const admin = new User(
      "admin",
      "lastname",
      "name@email.com",
      "password",
      Role.admin
    );

    const academicYear = new AcademicYear(
      "name",
      new Date("2023-02-17T10:00:00"),
      new Date("2023-02-17T10:00:00"),
      true,
      admin
    );

    expect(academicYear.id).toBeDefined();
    expect(academicYear.name).toBe("name");
    expect(academicYear.fromYear).toBeDefined();
    expect(academicYear.toYear).toBeDefined();
    expect(academicYear.isCurrent).toBe(true);
    expect(academicYear.createdBy.id).toBe(admin.id);
  });

  it("should not create an academid year with non admin user", () => {
    const nonAdmin = new User(
      "nonAdmin",
      "lastname",
      "name@email.com",
      "password",
      Role.teacher
    );

    expect(
      () =>
        new AcademicYear(
          "name",
          new Date("2023-02-17T10:00:00"),
          new Date("2023-02-17T10:00:00"),
          true,
          nonAdmin
        )
    ).toThrow(new Error("Non admin cannot create academic year"));
  });

  it("should add teacher to academic year", () => {
    const admin = new User(
      "admin",
      "lastname",
      "name@email.com",
      "password",
      Role.admin
    );
    const academicYear = new AcademicYear(
      "name",
      new Date("2023-02-17T10:00:00"),
      new Date("2023-02-17T10:00:00"),
      true,
      admin
    );
    const teacher = new User(
      "teacher",
      "lastname",
      "name@email.com",
      "password",
      Role.teacher
    );
    academicYear.addTeacher(teacher);

    expect(academicYear.teachers[0].id).toBe(teacher.id);
  });

  it("should not add a non teacher to academicYear", () => {
    const admin = new User(
      "admin",
      "lastname",
      "name@email.com",
      "password",
      Role.admin
    );
    const academicYear = new AcademicYear(
      "name",
      new Date("2023-02-17T10:00:00"),
      new Date("2023-02-17T10:00:00"),
      true,
      admin
    );
    const nonTeacher = new User(
      "student",
      "lastname",
      "name@email.com",
      "password",
      Role.student
    );

    expect(() => academicYear.addTeacher(nonTeacher)).toThrow(
      new Error("Cannot add a non teacher")
    );
  });

  it("should add student to academic year", () => {
    const admin = new User(
      "admin",
      "lastname",
      "name@email.com",
      "password",
      Role.admin
    );
    const academicYear = new AcademicYear(
      "name",
      new Date("2023-02-17T10:00:00"),
      new Date("2023-02-17T10:00:00"),
      true,
      admin
    );
    const student = new User(
      "student",
      "lastname",
      "name@email.com",
      "password",
      Role.student
    );
    academicYear.addStudent(student);

    expect(academicYear.students[0].id).toBe(student.id);
  });

  it("should not add a non student to academic year", () => {
    const admin = new User(
      "admin",
      "lastname",
      "name@email.com",
      "password",
      Role.admin
    );
    const academicYear = new AcademicYear(
      "name",
      new Date("2023-02-17T10:00:00"),
      new Date("2023-02-17T10:00:00"),
      true,
      admin
    );
    const nonStudent = new User(
      "student",
      "lastname",
      "name@email.com",
      "password",
      Role.teacher
    );
    expect(() => academicYear.addStudent(nonStudent)).toThrow(
      new Error("Cannot add a non student")
    );
  });
});
