var fs = require('fs');
const { drizzle } = require('drizzle-orm/better-sqlite3');
const Database = require('better-sqlite3');
const { integer, sqliteTable, text } = require('drizzle-orm/sqlite-core');
const { faker } = require('@faker-js/faker');
const { eq } = require('drizzle-orm');

console.log("\n============== Seeder ==============");

console.log("seeder> Creating db connection");
const betterSqlite = new Database('.sqlite.db');
const db = drizzle(betterSqlite);

console.log("seeder> Creating table object");
const userTable = sqliteTable('user', {
  id: integer('id').primaryKey(),

  name: text('name').notNull(), // Name
  username: text('username').notNull(), // Username
  email: text('email').notNull(), // Email
  lastSignedIn: integer('last_sign_in', { mode: 'timestamp' }).notNull(),
  joined: integer('joined', { mode: 'timestamp' }).notNull(),
});


numberOfUsers = 10000
async function seed() {
  for (let i = 0; i < numberOfUsers; i++) {
    firstname = faker.person.firstName();
    lastname = faker.person.lastName();
    const user = {
      username: faker.internet.userName({firstName: firstname, lastName: lastname}),
      name: firstname + ' ' + lastname,
      email: faker.internet.email({firstName: firstname, lastName: lastname, allowSpecialCharacters: true}),
      lastSignedIn: faker.date.recent({days: 40}),
      joined: faker.date.past({years: 2}),
    };
  
    // console.log(user);
    
    process.stdout.write(`seeder> Generating users ${(i * 100 / numberOfUsers).toFixed(2)}%\r`);
    await db.insert(userTable).values(user);
  }
  console.log(`\nseeder> Generated ${numberOfUsers} users`);
}

seed();