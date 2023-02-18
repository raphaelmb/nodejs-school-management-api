import { describe, expect, it } from "vitest";
import User, { Role } from "../staff/User";
import ClassLevel from "./ClassLevel";
import Subject from "./Subject";

describe("ClassLevel test", () => {
  it("should create class level", () => {
    const admin = new User(
      "admin",
      "lastname",
      "name@email.com",
      "password",
      Role.admin
    );
    const classLevel = new ClassLevel("name", "description", admin);

    expect(classLevel.id).toBeDefined();
    expect(classLevel.name).toBe("name");
    expect(classLevel.description).toBe("description");
    expect(classLevel.createdBy.id).toBe(admin.id);
  });

  it("should not create class level with a non admin user", () => {
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
      () => new ClassLevel("name", "description", nonAdminTeacher)
    ).toThrow(new Error("Non admin cannot create class level"));
    expect(
      () => new ClassLevel("name", "description", nonAdminStudent)
    ).toThrow(new Error("Non admin cannot create class level"));
  });

  it("should add teacher to classLevel", () => {
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
    const classLevel = new ClassLevel("name", "description", admin);
    classLevel.addTeacher(teacher);

    expect(classLevel.teachers[0].id).toBe(teacher.id);
  });

  it("should not add a non teacher to classLevel", () => {
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
    const classLevel = new ClassLevel("name", "description", admin);

    expect(() => classLevel.addTeacher(nonTeacher)).toThrow(
      new Error("Cannot add a non teacher")
    );
  });

  it("should add student to classLevel", () => {
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
    const classLevel = new ClassLevel("name", "description", admin);
    classLevel.addStudent(student);

    expect(classLevel.students[0].id).toBe(student.id);
  });

  it("should not add a non student to classLevel", () => {
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
    const classLevel = new ClassLevel("name", "description", admin);

    expect(() => classLevel.addStudent(nonStudent)).toThrow(
      new Error("Cannot add a non student")
    );
  });

  it("should add subject to classLevel", () => {
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
    const subject = new Subject(
      "subject",
      "description",
      teacher,
      "4",
      admin,
      10
    );
    const classLevel = new ClassLevel("name", "description", admin);
    classLevel.addSubject(subject);

    expect(classLevel.subjects[0].id).toBe(subject.id);
  });
});
