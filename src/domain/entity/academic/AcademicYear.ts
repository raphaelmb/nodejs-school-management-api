import User, { Role } from "../staff/User";

export default class AcademicYear {
  students: User[] = [];
  teachers: User[] = [];

  constructor(
    readonly name: string,
    readonly fromYear: Date,
    readonly toYear: Date,
    readonly isCurrent: boolean,
    readonly createdBy: User,
    readonly id?: string
  ) {
    if (!this.id) this.id = crypto.randomUUID();
    this.validate();
  }

  validate(): void {
    if (this.createdBy.role != Role.admin)
      throw new Error("Non admin cannot create academic year");
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
}
