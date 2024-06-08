import { Router } from 'express'
import User from './app/controller/UserController.js'

const router = Router()

// ROTAS

router.get('/users', User.index)
router.get('/selecoes/:id', User.show)
router.post('/selecoes', User.store)
router.put('/selecoes/:id', User.update)
router.delete('/selecoes/:id', User.delete)

export default router