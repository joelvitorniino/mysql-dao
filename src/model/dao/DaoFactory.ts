import { DB } from "../../db/DB";
import { DepartmentDao } from "./DepartmentDao";
import { DepartmentDaoSQL } from "./impl/DepartmentDaoSQL";

export class DaoFactory {
    public createDepartmentDao(): DepartmentDao {
        return new DepartmentDaoSQL(new DB().getConnection());
    };
};