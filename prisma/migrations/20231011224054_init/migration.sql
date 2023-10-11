/*
  Warnings:

  - The primary key for the `PersonTable` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PersonTable" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL
);
INSERT INTO "new_PersonTable" ("first_name", "id", "last_name") SELECT "first_name", "id", "last_name" FROM "PersonTable";
DROP TABLE "PersonTable";
ALTER TABLE "new_PersonTable" RENAME TO "PersonTable";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
