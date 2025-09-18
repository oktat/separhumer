import Router from 'express'
const router = Router()

import AuthController from '../controllers/authcontroller.js';
import UserController from '../controllers/usercontroller.js';
import RankController from '../controllers/rankcontroller.js';
import EmployeeController from '../controllers/employeecontroller.js';
import ProjectController from '../controllers/projectcontroller.js';
import verifyToken from '../middlewares/authjwt.js';
 
// router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', UserController.index)

router.get('/users/:id', UserController.show)
router.post('/users', UserController.create)
router.patch('/users/:id', UserController.update)
router.patch('/users/:id/password', UserController.updatePassword)
router.delete('/users/:id', UserController.destroy)

/*
Minta azonosítás beállítására:
router.get('/ranks', [verifyToken], RankController.index)
*/

router.get('/ranks', RankController.index)
router.get('/ranks/:id', RankController.show)
router.post('/ranks', RankController.create)
router.put('/ranks/:id', RankController.update)
router.delete('/ranks/:id', RankController.destroy)

router.get('/employees', EmployeeController.index)
router.get('/employees/:id', EmployeeController.show)
router.post('/employees', EmployeeController.create)
router.put('/employees/:id', EmployeeController.update)
router.delete('/employees/:id', EmployeeController.destroy)

router.post('/emp/:empId/proj/:projId', EmployeeController.addProject)
router.delete('/emp/:empId/proj/:projId', EmployeeController.delProject)

router.get('/projects', ProjectController.index)
router.get('/projects/:id', ProjectController.show)
router.post('/projects', ProjectController.create)
router.put('/projects/:id', ProjectController.update)
router.delete('/projects/:id', ProjectController.destroy)

export default router
