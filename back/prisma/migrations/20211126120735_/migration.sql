-- DropForeignKey
ALTER TABLE "Package" DROP CONSTRAINT "Package_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Version" DROP CONSTRAINT "Version_packageName_fkey";

-- AddForeignKey
ALTER TABLE "Package" ADD CONSTRAINT "Package_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Version" ADD CONSTRAINT "Version_packageName_fkey" FOREIGN KEY ("packageName") REFERENCES "Package"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "User.apiKey_unique" RENAME TO "User_apiKey_key";

-- RenameIndex
ALTER INDEX "User.email_unique" RENAME TO "User_email_key";

-- RenameIndex
ALTER INDEX "User.resetPasswordToken_unique" RENAME TO "User_resetPasswordToken_key";

-- RenameIndex
ALTER INDEX "User.username_unique" RENAME TO "User_username_key";
