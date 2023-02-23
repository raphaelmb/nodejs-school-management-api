import Admin from "../../../domain/entity/staff/Admin";
import StaffInterface from "../../../domain/repository/StaffRepository";

export default class AdminRepositoryMemory implements StaffInterface<Admin> {
  adminList: Admin[] = [];

  async create(entity: Admin): Promise<void> {
    this.adminList.push(entity);
  }

  async update(entity: Admin): Promise<void> {}

  async find(id: string): Promise<Admin> {
    const admin = this.adminList.find((admin) => admin.id === id);
    if (!admin) throw new Error("Admin not found");
    return admin;
  }

  async findAll(): Promise<Admin[]> {
    return this.adminList;
  }
}
