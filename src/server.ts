import express from "express";
import swaggerUi from "swagger-ui-express";

import { createConnection } from "./database/data-source";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

createConnection();

const app = express();
const PORT = 3333;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
