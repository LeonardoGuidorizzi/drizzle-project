import "dotenv/config";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: [
    "./drizzle/src/db/entities/family/schema.ts",
    "./drizzle/src/db/entities/user/schema.ts",
  ], // Ensure this path is correct
  out: "./drizzle/migrations", //--> pra onde vai todas as migrations feitas
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
