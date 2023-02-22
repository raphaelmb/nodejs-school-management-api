import { describe, expect, it } from "vitest";
import Admin from "./Admin";
import { Role } from "./User";

describe("Admin test", () => {
  it("should create an admin", () => {
    const admin = new Admin("name", "lastname", "email@gmail.com", "password");
    expect(admin.firstName).toBe("name");
    expect(admin.lastName).toBe("lastname");
    expect(admin.email.value).toBe("email@gmail.com");
    expect(admin.password).toBe("password");
    expect(admin.role).toBe(Role.admin);
  });
});
