'use server'

import { prisma } from '@/src/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createWeek(data, season) {
  const weeksList = data.newWeek

  try {
    await prisma.week.createMany({
      data: weeksList.map((week) => {
        const entry = new Date(week.entryDate)
        const exit = new Date(entry.getTime() + 7 * 24 * 60 * 60 * 1000) // Ajout de 7 jours

        return {
          entryDate: entry,
          exitDate: exit,
          price: Number(week.price),
          disponibility: week.disponibility,
          seasonId: season,
        }
      }),
    })

    revalidatePath('/admin')
    revalidatePath('/location')
  } catch (error) {
    console.log(error)
  }
}

export async function checkIfWeekExists(entryDate) {
  try {
    const week = await prisma.week.findUnique({
      where: {
        entryDate: new Date(entryDate),
      },
    })
    return !!week // Retourne true si une semaine existe
  } catch (error) {
    console.log(error)
  }
}

export async function deleteWeek(weekId) {
  try {
    await prisma.week.delete({
      where: {
        id: weekId,
      },
    })
    revalidatePath('/admin')
    revalidatePath('/location')
  } catch (error) {
    console.log(error)
  }
}

export async function updateDisponibility(weekId, disponibility) {
  try {
    await prisma.week.update({
      where: {
        id: weekId,
      },
      data: {
        disponibility,
      },
    })
    revalidatePath('/admin')
    revalidatePath('/location')
  } catch (error) {
    console.log(error)
  }
}
