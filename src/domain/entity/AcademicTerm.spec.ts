import { describe, expect, it } from "vitest";
import AcademicTerm from "./AcademicTerm";
import User, { Role } from "./User";

describe("AcademicTerm test", () => {
  it("should create an academic term", () => {
  const admin = new User("admin", "lastname", "name@email.com", "password", Role.admin)
  const academicTerm = new AcademicTerm("name", "description", 4, admin)

  expect(academicTerm.id).toBeDefined()
  expect(academicTerm.name).toBe("name")
  expect(academicTerm.description).toBe("description")
  expect(academicTerm.duration).toBe(4)
  expect(academicTerm.createdBy.id).toBe(admin.id)
  })

  it("should not create an academic term with a non admin user", () => {
  const nonAdminTeacher = new User("nonAdmin", "lastname", "name@email.com", "password", Role.teacher)
  const nonAdminStudent = new User("nonAdmin", "lastname", "name@email.com", "password", Role.student)

  expect(() => new AcademicTerm("name", "description", 5, nonAdminTeacher)).toThrow(new Error("Non admin cannot create academic term"))
  expect(() => new AcademicTerm("name", "description", 5, nonAdminStudent)).toThrow(new Error("Non admin cannot create academic term"))
  })
})