import { EmailValidatorAdpter } from './email-validator-adapter'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

describe('EmailValidator Adapter', () => {
  test('Schould return false if validator returs false', () => {
    const sut = new EmailValidatorAdpter()

    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)

    const isValid = sut.isValid('invalid_emaill@mail.com')

    expect(isValid).toBeFalsy()
  })

  test('Schould return true if validator returs true', () => {
    const sut = new EmailValidatorAdpter()
    const isValid = sut.isValid('invalid_email@mail.com')

    expect(isValid).toBeTruthy()
  })
})
