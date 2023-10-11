import prisma from "./client";

type Person = {
  first_name: string;
  last_name: string;
};

export async function createPerson(person: Person) {
  return await prisma.personTable.create({
    data: person,
  });
}
