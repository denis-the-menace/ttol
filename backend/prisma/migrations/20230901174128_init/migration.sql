-- CreateTable
CREATE TABLE "Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "topic" TEXT NOT NULL DEFAULT '',
    "subtopic" TEXT NOT NULL DEFAULT '',
    "votes" INTEGER NOT NULL DEFAULT 0,
    "lie_id" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "question_id" INTEGER NOT NULL,
    "answer_text" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "Answer_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
