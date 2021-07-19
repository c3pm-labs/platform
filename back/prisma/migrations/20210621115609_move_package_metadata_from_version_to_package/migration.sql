-- AlterTable
ALTER TABLE "Package" ADD COLUMN     "contributors" TEXT[],
ADD COLUMN     "documentation" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "website" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "repository" TEXT NOT NULL DEFAULT E'';
