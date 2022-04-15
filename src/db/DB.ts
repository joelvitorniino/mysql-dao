import { Connection, createConnection } from "mysql";
import { DbException } from "./DbException";
import dotenv from 'dotenv';

dotenv.config();

export class DB {
    private conn: Connection = null;

    public getConnection(): Connection {
        if(this.conn === null) {
            try {
                const config = this.loadConfig();
                this.conn = createConnection(config);
            } catch(e) {
                throw new DbException(e.message);
            };
        };

        return this.conn;
    };

    public closeConnection(): void {
        try {
            this.conn.end();
        } catch(e) {
            throw new DbException(e.message);
        };
    };

    private loadConfig(): Object {
        const config = {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
        };

        return config;
    };
};