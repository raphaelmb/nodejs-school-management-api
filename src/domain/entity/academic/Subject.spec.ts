import { describe, expect, it } from "vitest";
import User, { Role } from "../staff/User";
import Subject from "./Subject";
import { academicTerm, admin, teacher } from "./test_data/data";

describe("Subject test", () => {
  it("should create a subject", () => {
    const subject = new Subject(
      "subject",
      "description",
      academicTerm,
      admin,
      4
    );

    expect(subject.id).toBeDefined();
    expect(subject.name).toBe("subject");
    expect(subject.description).toBe("description");
    expect(subject.academicTerm.id).toBeDefined();
    expect(subject.createdBy.id).toBe(admin.id);
    expect(subject.durationInMonths).toBe(4);
  });

  it("should not create a subject with a non admin role", () => {
    expect(() => {
      return new Subject("subject", "description", academicTerm, teacher, 4);
    }).toThrow(new Error("Non admin cannot create subject"));
  });
});
