import { describe, expect, it } from "vitest";
import Admin from "../staff/Admin";
import User, { Role } from "../staff/User";
import AcademicYear from "./AcademicYear";
import YearGroup from "./YearGroup";

describe("YearGroup test", () => {
  it("should create a year group", () => {
    const admin = new Admin("admin", "lastname", "name@email.com", "password");
    const academicYear = new AcademicYear(
      "name",
      new Date("2023-02-17T10:00:00"),
      new Date("2023-02-17T10:00:00"),
      true,
      admin
    );
    const yearGroup = new YearGroup("name", admin, academicYear);

    expect(yearGroup.id).toBeDefined();
    expect(yearGroup.name).toBe("name");
    expect(yearGroup.createdBy.id).toBe(admin.id);
  });

  it("should not create a year group with a non admin user", () => {
    const admin = new User(
      "admin",
      "lastname",
      "name@email.com",
      "password",
      Role.admin
    );
    const nonAdmin = new User(
      "nonAdmin",
      "lastname",
      "name@email.com",
      "password",
      Role.teacher
    );
    const academicYear = new AcademicYear(
      "name",
      new Date("2023-02-17T10:00:00"),
      new Date("2023-02-17T10:00:00"),
      true,
      admin
    );

    expect(() => new YearGroup("name", nonAdmin, academicYear)).toThrow(
      new Error("Non admin cannot create year group")
    );
  });
});
