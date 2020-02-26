import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "Employee",
    entities: [__dirname + "/../**/*.entity.ts"],
    synchronize: false,
}