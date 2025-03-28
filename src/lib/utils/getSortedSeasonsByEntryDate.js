import { prisma } from '@/src/lib/prisma'

/**
 * Retrieves and returns a list of seasons sorted by the earliest entry date
 * of their associated weeks. Seasons with no associated weeks are appended
 * at the end of the list.
 *
 * This function performs the following steps:
 * 1. Groups weeks by seasonId and finds the minimum entryDate for each season.
 * 2. Extracts sorted seasonIds based on the earliest entryDate.
 * 3. Fetches all seasons that have associated weeks using the sorted seasonIds.
 * 4. Orders the fetched seasons based on the sorted seasonIds.
 * 5. Optionally, appends seasons without associated weeks to the end of the list.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of season objects,
 *                           sorted by the earliest entry date of their weeks.
 */

export async function getSortedSeasonsByEntryDate() {
  const grouped = await prisma.week.groupBy({
    by: ['seasonId'],
    _min: {
      entryDate: true,
    },
    orderBy: {
      _min: {
        entryDate: 'asc',
      },
    },
  });

  const sortedSeasonIds = grouped.map((g) => g.seasonId);

  const seasonsWithWeeks = await prisma.season.findMany({
    where: {
      id: { in: sortedSeasonIds },
    },
    include: {
      weeks: true,
    },
  });

  const sortedSeasons = sortedSeasonIds.map(
    (id) => seasonsWithWeeks.find((s) => s.id === id)
  );

  const otherSeasons = await prisma.season.findMany({
    where: {
      id: { notIn: sortedSeasonIds },
    },
    include: {
      weeks: true,
    },
  });

  return [...sortedSeasons, ...otherSeasons];
}
