import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adpter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'
import { SignUpController } from '../../presentation/controllers/singup/signup'
import { EmailValidatorAdpter } from '../../utils/email-validator-adapter'

export const makeSignUpController = (): SignUpController => {
  const emailValidatorAdpter = new EmailValidatorAdpter()
  const bcryptAdapter = new BcryptAdapter(12)
  const aAccountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, aAccountMongoRepository)

  return new SignUpController(emailValidatorAdpter, dbAddAccount)
}
