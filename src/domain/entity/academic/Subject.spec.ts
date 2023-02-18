import { describe, expect, it } from "vitest";
import User, { Role } from "../staff/User";
import Subject from "./Subject";

describe("Subject test", () => {
  it("should create a subject", () => {
    const teacher = new User(
      "teacher",
      "lastname",
      "name@email.com",
      "password",
      Role.teacher
    );
    const admin = new User(
      "admin",
      "lastname",
      "name@email.com",
      "password",
      Role.admin
    );
    const subject = new Subject(
      "subject",
      "description",
      teacher,
      "4",
      admin,
      10
    );

    expect(subject.id).toBeDefined();
    expect(subject.name).toBe("subject");
    expect(subject.description).toBe("description");
    expect(subject.teacher.id).toBe(teacher.id);
    expect(subject.academicTerm).toBe("4");
    expect(subject.createdBy.id).toBe(admin.id);
    expect(subject.duration).toBe(10);
  });

  it("should not create a subject with a non admin role", () => {
    const teacher = new User(
      "teacher",
      "lastname",
      "name@email.com",
      "password",
      Role.teacher
    );
    const nonAdmin = new User(
      "nonAdmin",
      "lastname",
      "name@email.com",
      "password",
      Role.teacher
    );
    expect(
      () => new Subject("subject", "description", teacher, "4", nonAdmin, 10)
    ).toThrow(new Error("Non admin cannot create subject"));
  });
});
