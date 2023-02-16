import { describe, expect, it } from "vitest";
import Program from "./Program";
import Subject from "./Subject";
import User, { Role } from "./User";

describe("Program test", () => {
  it("should create a program", () => {
  const admin = new User("admin", "lastname", "name@email.com", "password", Role.admin)
  const teachers = [new User("teacher", "lastname", "name@email.com", "password", Role.teacher)]
  const students = [new User("student", "lastname", "name@email.com", "password", Role.student)]
  const subjects = [new Subject("subject", "description", teachers[0], "4", admin, 10)]
  const program = new Program("program", "description", 5, "program123", admin, teachers, students, subjects)

  expect(program.id).toBeDefined()
  expect(program.name).toBe("program")
  expect(program.description).toBe("description")
  expect(program.code).toBe("program123")
  expect(program.createdBy.id).toBe(admin.id)
  expect(program.teachers[0].id).toBe(teachers[0].id)
  expect(program.students[0].id).toBe(students[0].id)
  expect(program.subjects[0].id).toBe(subjects[0].id)
  })

  it("should not create a program with a non admin role", () => {
  const admin = new User("admin", "lastname", "name@email.com", "password", Role.admin)
  const nonAdmin = new User("nonAdmin", "lastname", "name@email.com", "password", Role.teacher)
  const teachers = [new User("teacher", "lastname", "name@email.com", "password", Role.teacher)]
  const students = [new User("student", "lastname", "name@email.com", "password", Role.student)]
  const subjects = [new Subject("subject", "description", teachers[0], "4", admin, 10)]
  expect(() => new Program("program", "description", 5, "program123", nonAdmin, teachers, students, subjects)).toThrow(new Error("Non admin cannot create subject"))


  })
})