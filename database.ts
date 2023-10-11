import SQLite from "better-sqlite3";
import { Generated, Insertable, Kysely, SqliteDialect } from "kysely";

interface PersonTable {
  id: Generated<number>;
  first_name: string;
  last_name: string;
}

interface Database {
  person: PersonTable;
}

export type NewPerson = Insertable<PersonTable>;

const dialect = new SqliteDialect({
  database: new SQLite("db.sqlite"),
});

export async function createPerson(person: NewPerson) {
  return db
    .insertInto("person")
    .values(person)
    .returningAll()
    .executeTakeFirstOrThrow();
}

export const db = new Kysely<Database>({ dialect });
