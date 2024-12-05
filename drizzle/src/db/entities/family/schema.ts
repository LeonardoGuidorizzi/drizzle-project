import { relations } from "drizzle-orm";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { usersTable } from "../user/schema";

export const familyTable = pgTable("family", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  familyName: varchar({ length: 225 }).notNull(),
  userId: integer("userId").references(() => usersTable.id),
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
export const familyRelations = relations(familyTable, ({ one }) => ({
  author: one(usersTable, {
    fields: [familyTable.userId],
    references: [usersTable.id],
  }),
}));
