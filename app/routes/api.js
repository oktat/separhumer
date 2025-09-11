import Router from 'express'
const router = Router()

import AuthController from '../controllers/authcontroller.js';
import UserController from '../controllers/usercontroller.js';
import verifyToken from '../middlewares/authjwt.js';
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)

router.get('/users/:id', [verifyToken], UserController.show)
router.post('/users', [verifyToken], UserController.create)
router.put('/users/:id', [verifyToken], UserController.update)
router.delete('/users/:id', [verifyToken], UserController.destroy)

router.get('/ranks', [verifyToken], UserController.index)
router.get('/ranks/:id', [verifyToken], UserController.show)
router.post('/ranks', [verifyToken], UserController.create)
router.put('/ranks/:id', [verifyToken], UserController.update)
router.delete('/ranks/:id', [verifyToken], UserController.destroy)

router.get('/employees', [verifyToken], UserController.index)
router.get('/employees/:id', [verifyToken], UserController.show)
router.post('/employees', [verifyToken], UserController.create)
router.put('/employees/:id', [verifyToken], UserController.update)
router.delete('/employees/:id', [verifyToken], UserController.destroy)

router.get('/projects', [verifyToken], UserController.index)
router.get('/projects/:id', [verifyToken], UserController.show)
router.post('/projects', [verifyToken], UserController.create)
router.put('/projects/:id', [verifyToken], UserController.update)
router.delete('/projects/:id', [verifyToken], UserController.destroy)

export default router
