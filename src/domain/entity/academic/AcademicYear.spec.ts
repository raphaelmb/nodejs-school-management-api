import { describe, expect, it } from "vitest";
import User, { Role } from "../staff/User";
import AcademicYear from "./AcademicYear";
import { admin, student, teacher } from "./test_data/data";

describe("AcademicYear test", () => {
  it("should create an academid year", () => {
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
    expect(
      () =>
        new AcademicYear(
          "name",
          new Date("2023-02-17T10:00:00"),
          new Date("2023-02-17T10:00:00"),
          true,
          teacher
        )
    ).toThrow(new Error("Non admin cannot create academic year"));
  });

  it("should add teacher to academic year", () => {
    const academicYear = new AcademicYear(
      "name",
      new Date("2023-02-17T10:00:00"),
      new Date("2023-02-17T10:00:00"),
      true,
      admin
    );
    academicYear.addTeacher(teacher);

    expect(academicYear.teachers[0].id).toBe(teacher.id);
  });

  it("should add student to academic year", () => {
    const academicYear = new AcademicYear(
      "name",
      new Date("2023-02-17T10:00:00"),
      new Date("2023-02-17T10:00:00"),
      true,
      admin
    );
    academicYear.addStudent(student);
    expect(academicYear.students[0].id).toBe(student.id);
  });
});
