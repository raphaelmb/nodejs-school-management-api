import Student from "../../../domain/entity/staff/Student";
import StaffInterface from "../../../domain/repository/StaffRepository";

export default class StudentRepositoryMemory
  implements StaffInterface<Student>
{
  studentList: Student[] = [];

  async create(entity: Student): Promise<void> {
    this.studentList.push(entity);
  }

  async update(entity: Student): Promise<void> {}

  async find(id: string): Promise<Student> {
    const student = this.studentList.find((student) => student.id === id);
    if (!student) throw new Error("Student not found");
    return student;
  }

  async findAll(): Promise<Student[]> {
    return this.studentList;
  }
}
