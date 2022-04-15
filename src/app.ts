import { DB } from "./db/DB";
import { DaoFactory } from "./model/dao/DaoFactory";
import { DepartmentDao } from "./model/dao/DepartmentDao";
import { Department } from "./model/entities/Department";

const departmentDao: DepartmentDao = new DaoFactory().createDepartmentDao();

console.log("INSERT");
const obj = new Department("Joel", "joel@gmail.com");
const department = departmentDao.insert(obj);
console.log(department);

console.log("findAll");
console.log(departmentDao.findAll());