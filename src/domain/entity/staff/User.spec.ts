import { describe, expect, it } from "vitest";
import User, { Role } from "./User";

describe("User test", () => {
  it("should create a user", () => {
    const user = new User(
      "first",
      "last",
      "user@email.com",
      "password",
      Role.admin
    );
    expect(user.firstName).toBe("first");
    expect(user.lastName).toBe("last");
    expect(user.email.value).toBe("user@email.com");
    expect(user.password).toBe("password");
    expect(user.role).toBe(Role.admin);
  });

  it("should not create a user with empty first name", () => {
    expect(
      () => new User("", "last", "user@email.com", "password", Role.admin)
    ).toThrow(new Error("First name and last name cannot be empty"));
  });

  it("should not create a user with empty last name", () => {
    expect(
      () => new User("first", "", "user@email.com", "password", Role.admin)
    ).toThrow(new Error("First name and last name cannot be empty"));
  });

  it("should not create a user with invalid password length", () => {
    expect(
      () => new User("first", "last", "user@email.com", "pass", Role.admin)
    ).toThrow(new Error("Password must be at least 5 characters long"));
  });
});
