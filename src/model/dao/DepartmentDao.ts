import { Department } from "../entities/Department";

export interface DepartmentDao {
    insert(obj: Department);
    findAll(): void;
}