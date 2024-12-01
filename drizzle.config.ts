import "dotenv/config";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  out: "./drizzle",
  schema: "./drizzle/src/db/schema.ts", // Ensure this path is correct
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
