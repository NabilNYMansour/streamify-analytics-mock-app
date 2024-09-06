import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const userTable = sqliteTable('user', {
  id: integer('id').primaryKey(),

  name: text('name').notNull(),
  username: text('username').notNull(),
  email: text('email').notNull(),
  lastSignedIn: integer('last_sign_in', { mode: 'timestamp' }).notNull(),
  joined: integer('joined', { mode: 'timestamp' }).notNull(),
});

export type InsertUser = typeof userTable.$inferInsert;
export type SelectUser = typeof userTable.$inferSelect;