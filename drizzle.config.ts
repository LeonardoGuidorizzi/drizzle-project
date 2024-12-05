import "dotenv/config";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./drizzle/src/db/entities", // Ensure this path is correct
  out: "./drizzle/migrations", //--> pra onde vai todas as migrations feitas
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
