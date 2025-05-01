'use server'

import { prisma } from '@/src/lib/prisma'
import { revalidatePath } from 'next/cache'
import { auth } from '@/auth'


export async function createWeek(data, season) {
  const session = await auth()
  if (!session?.user?.email || session.user.email !== process.env.ADMIN_EMAIL) {
    return {
      error: 'Vous devez être connecté pour ajouter une semaine',
    }
  }

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
  } catch (error) {
    return {
      error: error.message,
    }
  }
  revalidatePath('/admin')
  revalidatePath('/location')
}

export async function checkIfWeekExists(entryDate) {
  try {
    const week = await prisma.week.findUnique({
      where: {
        entryDate: new Date(entryDate),
      },
    })
    return !!week // Return true if week exists
  } catch (error) {
    console.log(error)
  }
}

export async function updateDisponibility(weekId, disponibility) {
  const session = await auth()
  if (!session?.user?.email || session.user.email !== process.env.ADMIN_EMAIL) {
    return {
      error: 'Vous devez être connecté pour modifier une dispo',
    }
  }
  
  try {
    await prisma.week.update({
      where: {
        id: weekId,
      },
      data: {
        disponibility,
      },
    })
  } catch (error) {
    return { error: error.message }
  }
  revalidatePath('/admin')
  revalidatePath('/location')
}

export async function deleteWeek(weekId) {
  const session = await auth()
  if (!session?.user?.email || session.user.email !== process.env.ADMIN_EMAIL) {
    return {
      error: 'Vous devez être connecté pour suprrimer une semaine',
    }
  }
  
  try {
    await prisma.week.delete({
      where: {
        id: weekId,
      },
    })

  } catch (error) {
    return { error: error.message }
  }
  revalidatePath('/admin')
  revalidatePath('/location')
}
