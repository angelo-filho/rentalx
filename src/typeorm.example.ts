// Create a file named typeorm.config.ts to run properly
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
  entities: [
    process.env.NODE_ENV === "production"
      ? "./dist/modules/**/entities/*.js"
      : "./src/modules/**/entities/*.ts",
  ],
  migrations: [
    process.env.NODE_ENV === "production"
      ? "./dist/shared/infra/typeorm/migrations/*.js"
      : "./src/shared/infra/typeorm/migrations/*.ts",
  ],
};
