import { describe, expect, it } from "vitest";
import User, { Role } from "../staff/User";
import ClassLevel from "./ClassLevel";
import Subject from "./Subject";
import { academicTerm, admin, student, teacher } from "./test_data/data";

describe("ClassLevel test", () => {
  it("should create class level", () => {
    const classLevel = new ClassLevel("name", "description", admin);

    expect(classLevel.id).toBeDefined();
    expect(classLevel.name).toBe("name");
    expect(classLevel.description).toBe("description");
    expect(classLevel.createdBy.id).toBe(admin.id);
  });

  it("should not create class level with a non admin user", () => {
    expect(() => new ClassLevel("name", "description", teacher)).toThrow(
      new Error("Non admin cannot create class level")
    );
    expect(() => new ClassLevel("name", "description", student)).toThrow(
      new Error("Non admin cannot create class level")
    );
  });

  it("should add teacher to classLevel", () => {
    const classLevel = new ClassLevel("name", "description", admin);
    classLevel.addTeacher(teacher);

    expect(classLevel.teachers[0].id).toBe(teacher.id);
  });

  it("should add student to classLevel", () => {
    const classLevel = new ClassLevel("name", "description", admin);
    classLevel.addStudent(student);

    expect(classLevel.students[0].id).toBe(student.id);
  });

  it("should add subject to classLevel", () => {
    const subject = new Subject(
      "subject",
      "description",
      academicTerm,
      admin,
      4,
      teacher
    );
    const classLevel = new ClassLevel("name", "description", admin);
    classLevel.addSubject(subject);

    expect(classLevel.subjects[0].id).toBe(subject.id);
  });
});
