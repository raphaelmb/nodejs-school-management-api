import { describe, expect, it } from "vitest";
import AcademicYear from "../academic/AcademicYear";
import ClassLevel from "../academic/ClassLevel";
import Program from "../academic/Program";
import Subject from "../academic/Subject";
import Teacher, { ApplicationStatus } from "./Teacher";
import { admin, academicTerm } from "../academic/test_data/data";

describe("Teacher test", () => {
  it("should create a teacher", () => {
    const teacher = new Teacher(
      "firstname",
      "lastname",
      "email@email.com",
      "password",
      "id",
      false,
      false,
      ApplicationStatus.pending,
      new Program("name", "description", 10, "code", admin),
      new ClassLevel("name", "description", admin),
      new AcademicYear("name", new Date(), new Date(), true, admin),
      admin,
      academicTerm,
      new Subject("name", "descripiton", academicTerm, admin, 12)
    );

    expect(teacher.id).toBeDefined();
    expect(teacher.firstName).toBe("firstname");
    expect(teacher.lastName).toBe("lastname");
    expect(teacher.email.value).toBe("email@email.com");
    expect(teacher.password).toBe("password");
    expect(teacher.teacherId).toBe("id");
    expect(teacher.program.id).toBeDefined();
    expect(teacher.classLevel.id).toBeDefined();
    expect(teacher.academicYear.id).toBeDefined();
    expect(teacher.createdBy.role).toBe(admin.role);
    expect(teacher.academicTerm.id).toBeDefined();
    expect(teacher.isWithdrawn).toBe(false);
    expect(teacher.isSuspended).toBe(false);
  });
});
