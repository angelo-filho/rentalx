import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
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
});

export function createConnection(): Promise<DataSource> {
  return AppDataSource.initialize();
}

export default AppDataSource;
