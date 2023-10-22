-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "username" VARCHAR(45) NOT NULL,
    "email" VARCHAR(45) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deals" (
    "id" SERIAL NOT NULL,
    "image" VARCHAR(100) NOT NULL,
    "title" VARCHAR(45) NOT NULL,
    "price" INTEGER NOT NULL,
    "yield" INTEGER NOT NULL,
    "sold" INTEGER NOT NULL,
    "tiket" INTEGER NOT NULL,
    "daysLeft" INTEGER NOT NULL,
    "usersId" INTEGER NOT NULL,

    CONSTRAINT "Deals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Deals_title_key" ON "Deals"("title");

-- AddForeignKey
ALTER TABLE "Deals" ADD CONSTRAINT "Deals_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
