import { describe, expect, it } from "vitest";
import AcademicTerm from "./AcademicTerm";
import Admin from "../staff/Admin";
import { student, teacher } from "./test_data/data";

describe("AcademicTerm test", () => {
  it("should create an academic term", () => {
    const admin = new Admin("admin", "lastname", "name@email.com", "password");
    const academicTerm = new AcademicTerm("name", "description", 4, admin);

    expect(academicTerm.id).toBeDefined();
    expect(academicTerm.name).toBe("name");
    expect(academicTerm.description).toBe("description");
    expect(academicTerm.durationInMonths).toBe(4);
    expect(academicTerm.createdBy.id).toBe(admin.id);
  });

  it("should not create an academic term with a non admin user", () => {
    expect(() => new AcademicTerm("name", "description", 5, teacher)).toThrow(
      new Error("Non admin cannot create academic term")
    );
    expect(() => new AcademicTerm("name", "description", 5, student)).toThrow(
      new Error("Non admin cannot create academic term")
    );
  });
});
