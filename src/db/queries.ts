"use server";

import { and, asc, between, count, desc, eq, gte, like, lte, or, sql } from 'drizzle-orm';
import { userTable } from './schema';
import { db } from '.';

//------- Sorting -------//
const orderByFunc = (sort: string) => {
  switch (sort) {
    case "":
      return asc(userTable.username);
    case "last":
      return desc(userTable.lastSignedIn);
    case "joined":
      return asc(userTable.joined);
    default:
      return asc(userTable.id);
  }
}
//------- General Search -------//
const whereFunc = (search: string) => or(
  like(userTable.username, `%${search}%`),
  like(userTable.name, `%${search}%`),
  like(userTable.email, `%${search}%`),
  like(userTable.joined, `%${search}%`),
  like(userTable.lastSignedIn, `%${search}%`),
)

//================== Users ==================//
export async function getUsers(currentPage: number, limit: number, search: string, sort: string) {
  const actualPage = Math.max(currentPage - 1, 0);

  return await db.select().from(userTable)
    .where(whereFunc(search))
    .orderBy(orderByFunc(sort))
    .limit(limit).offset(actualPage * limit);
}

export async function getUsersCount(search: string, sort: string) {
  return await db.select({ count: count() }).from(userTable)
    .where(whereFunc(search))
    .orderBy(orderByFunc(sort));
}