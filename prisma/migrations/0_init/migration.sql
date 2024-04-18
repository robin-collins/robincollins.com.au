-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(191) NOT NULL,
    "slug" VARCHAR(191) NOT NULL UNIQUE,
    "description" VARCHAR(191) NOT NULL,
    "content" TEXT,
    "image" VARCHAR(191) NOT NULL,
    "link_demo" VARCHAR(191),
    "link_github" VARCHAR(191),
    "stacks" VARCHAR(191) NOT NULL,
    "is_show" BOOLEAN NOT NULL DEFAULT true,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
