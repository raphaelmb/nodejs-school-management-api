import { describe, expect, it } from "vitest";
import AcademicYear from "../academic/AcademicYear";
import ClassLevel from "../academic/ClassLevel";
import Program from "../academic/Program";
import Teacher, { ApplicationStatus } from "./Teacher";
import { admin, academicTerm, exam, subject } from "../academic/test_data/data";

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
      academicTerm
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
    expect(teacher.applicationStatus).toBe(ApplicationStatus.pending);
  });

  it("should create an exam", () => {
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
      academicTerm
    );
    teacher.createExam(exam);

    expect(teacher.examsCreated).length(1);
    expect(teacher.examsCreated[0].id).toBe(exam.id);
  });

  it("should change withdrawn status", () => {
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
      academicTerm
    );
    teacher.changeWithdrawnStatus();

    expect(teacher.isWithdrawn).toBe(true);
  });

  it("should change suspension status", () => {
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
      academicTerm
    );
    teacher.changeSuspensionStatus();

    expect(teacher.isSuspended).toBe(true);
  });

  it("should add a subject", () => {
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
      academicTerm
    );
    teacher.addSubject(subject);

    expect(teacher.subject?.id).toBe(subject.id);
  });
});
