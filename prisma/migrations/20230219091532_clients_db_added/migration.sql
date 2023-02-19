-- CreateTable
CREATE TABLE "Clients" (
    "id" TEXT NOT NULL,
    "email_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "add1" TEXT NOT NULL,
    "add2" TEXT NOT NULL,
    "post_code" TEXT NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Clients_email_id_key" ON "Clients"("email_id");

-- AddForeignKey
ALTER TABLE "Clients" ADD CONSTRAINT "Clients_email_id_fkey" FOREIGN KEY ("email_id") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
