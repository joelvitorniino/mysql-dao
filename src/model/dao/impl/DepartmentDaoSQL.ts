import { Connection } from "mysql";
import { Department } from "../../entities/Department";
import { DepartmentDao } from "../DepartmentDao";

export class DepartmentDaoSQL implements DepartmentDao {
    private conn: Connection;
    private list: Department[];

    constructor(conn: Connection) {
        this.conn = conn;
    }

    insert(obj: Department) {
        const sql = `INSERT INTO department (name, email) VALUES (?, ?)`;
        const values = [obj.getName(), obj.getEmail()];

        this.conn.query(sql, values, (err, result) => {
            if(err) throw err;
            console.log(`Rows affected: ${result.affectedRows}`);
        });
    };

    findAll(): void {
        this.conn.query("SELECT * FROM department", (err, result, fields) => {
            if(err) {
                throw err;
            } else {
                this.setValue(result);
            };
        });
    };

    private setValue(value: Department[]) {
        this.list = value;
        console.log(value);
    }
};