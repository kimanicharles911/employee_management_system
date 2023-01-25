import { Schema, model } from 'mongoose';

const employeesSchema = new Schema({
  first_name : {
    type: String,
    required: true,
  },
  last_name : {
    type: String,
    required: true,
  },
  email : {
    type: String,
    required: true,
  },
  employment_number: {
    type: Number,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  }
},
{
  timestamps: true,
});

const Employee = model('employees', employeesSchema, 'employees');

export { Employee };