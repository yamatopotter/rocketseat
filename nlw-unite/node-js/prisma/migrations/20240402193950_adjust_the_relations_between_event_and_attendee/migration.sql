/*
  Warnings:

  - A unique constraint covering the columns `[public_id]` on the table `events` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "attendees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "event_public_id" TEXT NOT NULL,
    CONSTRAINT "attendees_event_public_id_fkey" FOREIGN KEY ("event_public_id") REFERENCES "events" ("public_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "events_public_id_key" ON "events"("public_id");
