-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "hasTag" DROP NOT NULL,
ALTER COLUMN "hasTag" SET DATA TYPE TEXT;
