import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { usersTable } from "./db/entities/user";
const db = drizzle(process.env.DATABASE_URL!); // onde guarda toda a magia

async function main() {
  const user: typeof usersTable.$inferSelect = {
    id: 0, //-->inferSelect é a melhor opção pq  ele campos gerados pelo banco como o id
    name: "Leonardo", //----> a magia
    age: 22,
    email: "Y7Gd0@example.com",
  };
  await db.insert(usersTable).values(user); // ---> o comando para guardar a magia
  console.log("User inserted successfully");
}
main();
/**
 * melhorias arquitetura:
 * 1: criar tabela family(X)
 * 2: criar uma pasta para entidades drizzle e mover as tabelas para la(X)
 * 3: adicionar vinculo de family vs usuarios
 * 4: criar uma classe de serviço que gerencia os dados de cada tabela. Separe a classes de serviço em uma pasta especifica
 * 5: criar uma função de teste para usuarios, familias e vinculos entre familias
 * 6: criar argumentos na função main passando um arquivo json para alimentar as tabelas
 * 7: criar uma funcionalidade chamada MarriageService que case dois usuarios de diferentes familias
 */
