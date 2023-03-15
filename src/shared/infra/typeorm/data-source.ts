import { DataSource } from "typeorm";

import { config } from "../../../typeorm.config";

const AppDataSource = new DataSource(config);

export function createConnection(): Promise<DataSource> {
  return AppDataSource.initialize();
}

export default AppDataSource;
