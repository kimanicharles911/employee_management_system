import express from 'express';
import { createEmployee, getEmployees, getEmployee, searchEmployeesFunc, updateEmployee, deleteEmployee } from '../controllers/employees.controller.js';

const router = express.Router();

router.post('/employees', createEmployee);
router.get('/employees', getEmployees);
router.get('/employee/:id', getEmployee);
router.get('/search', searchEmployeesFunc);
router.patch('/employee/:id', updateEmployee);
router.delete('/employee/:id', deleteEmployee);

export { router as routes };