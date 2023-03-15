import { DataSourceOptions } from "typeorm";

export const config: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: process.env.NODE_ENV === "test" ? "rentx_test" : "rentx",
  synchronize: false,
  logging: false,
  entities: ["./src/modules/**/entities/*.ts"],
  migrations: [`./src/shared/infra/typeorm/migrations/*.ts`],
};
