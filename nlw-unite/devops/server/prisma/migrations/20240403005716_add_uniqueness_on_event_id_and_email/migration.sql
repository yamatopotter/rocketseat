/*
  Warnings:

  - A unique constraint covering the columns `[event_public_id,email]` on the table `attendees` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "attendees_event_public_id_email_key" ON "attendees"("event_public_id", "email");
