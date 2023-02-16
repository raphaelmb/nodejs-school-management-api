export default class Email {

  constructor(readonly value: string) {
    if (!this.validate(value)) throw new Error("Invalid email")
    this.value = value
  }

  private validate(email: string): Boolean {
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return pattern.test(email)
  }
}
