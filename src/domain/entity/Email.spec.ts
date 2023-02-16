import { describe, expect, it} from "vitest"
import Email from "./Email"

describe("Email test", () => {
  it("should be able to create a valid email", () => {
    const email = new Email("bob@gmail.com")
    expect(email.value).toBe("bob@gmail.com")
  })

  const wrongEmail = ["", "abc.com", "abc@", "@.com"]

  it.each(wrongEmail)("should not create email with invalid input", email => {
    expect(() => new Email(email)).toThrow(new Error("Invalid email"))
  })
})