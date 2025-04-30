-- DropForeignKey
ALTER TABLE "Week" DROP CONSTRAINT "Week_seasonId_fkey";

-- AddForeignKey
ALTER TABLE "Week" ADD CONSTRAINT "Week_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE CASCADE ON UPDATE CASCADE;
