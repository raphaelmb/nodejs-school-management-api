import Admin from "../staff/Admin";
import Student from "../staff/Student";
import Teacher from "../staff/Teacher";
import { Role } from "../staff/User";
import Subject from "./Subject";

export default class ClassLevel {
  readonly students: Student[] = [];
  readonly teachers: Teacher[] = [];
  readonly subjects: Subject[] = [];

  constructor(
    readonly name: string,
    readonly description: string,
    readonly createdBy: Admin,
    readonly id?: string
  ) {
    if (!this.id) this.id = crypto.randomUUID();
    this.validate();
  }

  validate(): void {
    if (this.createdBy.role != Role.admin)
      throw new Error("Non admin cannot create class level");
  }

  addTeacher(teacher: Teacher): void {
    if (teacher.role !== Role.teacher)
      throw new Error("Cannot add a non teacher");
    this.teachers.push(teacher);
  }

  addStudent(student: Student): void {
    if (student.role !== Role.student)
      throw new Error("Cannot add a non student");
    this.students.push(student);
  }

  addSubject(subject: Subject): void {
    this.subjects.push(subject);
  }
}
