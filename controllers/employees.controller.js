import { Employee } from '../models/employees.model.js';

const createEmployee = async(req, res) => {
  try {
    const { first_name, last_name, email, employment_number, salary } = req.body;
    const employee = await Employee.create({
      first_name,
      last_name,
      email,
      employment_number,
      salary,
    });
    return res.status(201).json(employee);
  }catch(error){
    return res.status(400).json(`Problem creating employee record! ${error.message}`);
  }
};

const getEmployees = async(req, res) => {
  try{
    const employees = await Employee.find();
    return res.status(200).json(employees);
  }catch(error){
    return res.status(400).json(`Problem getting the employees records! ${error.message}`);
  }
};

const getEmployee = async(req, res) => {
  try{
    const { id } = req.params;
    const employee = await Employee.findById(id);
    return res.status(200).json(employee);
  }catch(error){
    return res.status(400).json(`Problem getting the employee's record! ${error.message}`);
  }
};

const searchEmployeesFunc = async (req, res) => {
  try {
    if (req.query.employeeEmail) {
      const { employeeEmail } = req.query;
      const result = await Employee.find({ email: employeeEmail });
      return res.status(200).send(result);
    }
  } catch (err) {
    return res
      .status(400)
      .send(`Problem getting an employee with that email. ${err.message}`);
  }
};

const updateEmployee = async(req, res) => {
  try{
    const { id } = req.params;
    const {
      first_name,
      last_name,
      email,
      employment_number,
      salary,
    } = req.body;
    const updatedEmployee = {
      _id: id,
      first_name,
      last_name,
      email,
      employment_number,
      salary,
    }
    const employee = await Employee.findByIdAndUpdate(id, updatedEmployee, {
      new: true,
    });
    return res.status(200).json(employee);
  }catch(error){
    return res.status(400).send(`Problem updating employee record. ${err.message}`);
  }
};

const deleteEmployee = async(req, res) => {
  try{
    const { id } = req.params;
    const result = await Employee.deleteOne({ _id: id });
    return res.status(200).send(result);
  }catch(error){
    return res.status(400).json(`Problem deleting the employee's record! ${error.message}`)
  }
};

export { createEmployee, getEmployees, getEmployee, searchEmployeesFunc, updateEmployee, deleteEmployee };