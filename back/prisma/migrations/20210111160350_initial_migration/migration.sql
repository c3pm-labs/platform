-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT E'',
    "apiKey" TEXT NOT NULL,
    "resetPasswordToken" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Package" (
    "name" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,

    PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Version" (
    "packageName" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "readme" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "license" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("version","packageName")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User.username_unique" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User.apiKey_unique" ON "User"("apiKey");

-- CreateIndex
CREATE UNIQUE INDEX "User.resetPasswordToken_unique" ON "User"("resetPasswordToken");

-- AddForeignKey
ALTER TABLE "Package" ADD FOREIGN KEY("authorId")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Version" ADD FOREIGN KEY("packageName")REFERENCES "Package"("name") ON DELETE CASCADE ON UPDATE CASCADE;
