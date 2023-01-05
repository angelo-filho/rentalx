import { hash } from "bcrypt";
import { v4 as uuiV4 } from "uuid";

import { createConnection } from "../data-source";

async function bootstrap() {
  const connection = await createConnection("localhost");

  const id = uuiV4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO USERS(id,name,email, password, "isAdmin", created_at, driver_license) 
    values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXXX')`
  );

  await connection.destroy();
}

bootstrap().then(() => console.log("User admin created"));
