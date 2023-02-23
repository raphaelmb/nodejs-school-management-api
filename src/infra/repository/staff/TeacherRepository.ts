import Teacher from "../../../domain/entity/staff/Teacher";
import StaffInterface from "../../../domain/repository/StaffRepository";

export default class TeacherRepositoryMemory
  implements StaffInterface<Teacher>
{
  teacherList: Teacher[] = [];

  async create(entity: Teacher): Promise<void> {
    this.teacherList.push(entity);
  }

  async update(entity: Teacher): Promise<void> {}

  async find(id: string): Promise<Teacher> {
    const teacher = this.teacherList.find((teacher) => teacher.id === id);
    if (!teacher) throw new Error("Teacher not found");
    return teacher;
  }

  async findAll(): Promise<Teacher[]> {
    return this.teacherList;
  }
}
