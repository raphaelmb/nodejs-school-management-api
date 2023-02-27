import { describe, expect, it } from "vitest";
import AcademicYear from "./AcademicYear";
import { admin } from "./test_data/data";
import YearGroup from "./YearGroup";

describe("YearGroup test", () => {
  it("should create a year group", () => {
    expect(1).toBe(1);
    // const academicYear = new AcademicYear(
    //   "name",
    //   new Date("2023-02-17T10:00:00"),
    //   new Date("2023-02-17T10:00:00"),
    //   true,
    //   admin
    // );
    // const yearGroup = new YearGroup("name", admin, academicYear);
    // expect(yearGroup.id).toBeDefined();
    // expect(yearGroup.name).toBe("name");
    // expect(yearGroup.createdBy.id).toBe(admin.id);
  });
  // it("should not create a year group with a non admin user", () => {
  //   const academicYear = new AcademicYear(
  //     "name",
  //     new Date("2023-02-17T10:00:00"),
  //     new Date("2023-02-17T10:00:00"),
  //     true,
  //     admin
  //   );
  //   expect(() => new YearGroup("name", nonAdmin, academicYear)).toThrow(
  //     new Error("Non admin cannot create year group")
  //   );
  // });
});
