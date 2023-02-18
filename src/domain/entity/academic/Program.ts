import User, { Role } from "../staff/User";
import Subject from "./Subject";

// TODO: autogenerate code property
export default class Program {
  teachers: User[] = [];
  students: User[] = [];
  subjects: Subject[] = [];

  constructor(
    readonly name: string,
    readonly description: string,
    readonly duration: number,
    readonly code: string,
    readonly createdBy: User,
    readonly id?: string
  ) {
    if (!this.id) this.id = crypto.randomUUID();
    this.validate();
  }

  validate(): void {
    if (this.createdBy.role != Role.admin)
      throw new Error("Non admin cannot create program");
  }

  addTeacher(teacher: User): void {
    if (teacher.role !== Role.teacher)
      throw new Error("Cannot add a non teacher");
    this.teachers.push(teacher);
  }

  addStudent(student: User): void {
    if (student.role !== Role.student)
      throw new Error("Cannot add a non student");
    this.students.push(student);
  }

  addSubject(subject: Subject): void {
    this.subjects.push(subject);
  }
}
