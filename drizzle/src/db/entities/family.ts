import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const familyTable = pgTable("family", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  familyName: varchar({ length: 225 }).notNull(),
});
/**
 * In the drizzle.config.ts file, you need to specify the path to your schema folder. 
 * With this configuration, Drizzle will read from the schema folder and find all the files recursively 
 * and get all the drizzle tables from there. For more information about the (drizzle.config.ts)
 * file and migrations with Drizzle, please check:
 * in short: it will take all s 

import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: './src/db/schema'
})
 */
