-- AlterTable
ALTER TABLE `users` ADD COLUMN `followers` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT false;
