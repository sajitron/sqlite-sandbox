import { createPerson } from "./prismadb";
import { prismaMock } from "./singleton";
import { v4 as uuid } from "uuid";

describe("it should create a test person", () => {
  it("should create a new person", async () => {
    const person = {
      id: uuid(),
      first_name: "Test",
      last_name: "Person",
    };

    prismaMock.personTable.create.mockResolvedValue(person);

    await expect(createPerson(person)).resolves.toEqual(person);
  });
});
