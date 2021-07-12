import { EmailValidatorAdpter } from './email-validator-adapter'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

const makeSut = (): EmailValidatorAdpter => {
  return new EmailValidatorAdpter()
}

describe('EmailValidator Adapter', () => {
  test('Schould return false if validator returs false', () => {
    const sut = makeSut()

    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)

    const isValid = sut.isValid('invalid_emaill@mail.com')

    expect(isValid).toBeFalsy()
  })

  test('Schould return true if validator returs true', () => {
    const sut = makeSut()

    const isValid = sut.isValid('invalid_email@mail.com')

    expect(isValid).toBeTruthy()
  })

  test('Schould call validator with correct email', () => {
    const sut = makeSut()

    const isEmailSpy = jest.spyOn(validator, 'isEmail')

    sut.isValid('any_email@mail.com')

    expect(isEmailSpy).toHaveBeenCalledWith('any_email@mail.com')
  })
})
