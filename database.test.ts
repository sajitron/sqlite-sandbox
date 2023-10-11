import { db, createPerson } from "./database";

describe("test db", () => {
  beforeAll(async () => {
    await db.schema
      .createTable("person")
      .addColumn("id", "integer", (cb) => cb.primaryKey().autoIncrement())
      .addColumn("first_name", "varchar(255)")
      .addColumn("last_name", "varchar(255)")
      .execute();
  });
  it("should create a person", async () => {
    await createPerson({ first_name: "John", last_name: "Doe" });
  });
});
