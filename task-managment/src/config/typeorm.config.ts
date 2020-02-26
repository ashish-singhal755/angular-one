import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: "192.168.1.109",
    port: 3306,
    username: "user",
    password: "user@549",
    database: "test_db",
    entities: [__dirname + "/../**/*.entity.ts"],
    synchronize: false,
}