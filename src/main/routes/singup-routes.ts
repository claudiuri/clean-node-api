import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adpter'
import { makeSignUpController } from '../factories/singup'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
}
