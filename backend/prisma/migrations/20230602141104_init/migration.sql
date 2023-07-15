-- CreateTable
CREATE TABLE "Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "topic" TEXT NOT NULL DEFAULT '',
    "subtopic" TEXT NOT NULL DEFAULT '',
    "truth1" TEXT NOT NULL DEFAULT '',
    "truth2" TEXT NOT NULL DEFAULT '',
    "lie" TEXT NOT NULL DEFAULT '',
    "votes" INTEGER NOT NULL DEFAULT 0
);
