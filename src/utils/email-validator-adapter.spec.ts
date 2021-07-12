import { EmailValidatorAdpter } from './email-validator-adapter'

describe('EmailValidator Adapter', () => {
  test('Schould return false if validator returs false', () => {
    const sut = new EmailValidatorAdpter()
    const isValid = sut.isValid('invalid_email@mail.com')

    expect(isValid).toBeFalsy()
  })

  test('Schould return false if validator returs false', () => {
    const sut = new EmailValidatorAdpter()
    const isValid = sut.isValid('invalid_email@mail.com')

    expect(isValid).toBeFalsy()
  })
})
