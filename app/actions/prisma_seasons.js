'use server'

import { prisma } from '@/src/lib/prisma'
import { revalidatePath } from 'next/cache'
import { auth } from '@/auth'


export async function createSeason(formData) {
  const session = await auth()
  if (!session?.user?.email || session.user.email !== process.env.ADMIN_EMAIL) {
    return {
      error: 'Vous devez être connecté pour créer une saison',
    }
  }

  try {
    const name = formData.get('name')
    await prisma.season.create({
      data: { name },
    })
  } catch (error) {
    return {
      error: error.message,
    }
  }
  revalidatePath('/admin')
  revalidatePath('/location')
}

export async function updateSeason(id, newTitle) {
  const session = await auth()
  if (!session?.user?.email || session.user.email !== process.env.ADMIN_EMAIL) {
    return {
      error: 'Vous devez être connecté pour mettre à jour une saison',
    }
  }

  try {
    await prisma.season.update({
      where: { id },
      data: {
        name: newTitle,
      },
    })
    revalidatePath('/admin')
    revalidatePath('/location')
    return { success: true }
  } catch (error) {
    return { error: error.message }
  }
}

export async function deleteSeason(id) {
  const session = await auth()
  if (!session?.user?.email || session.user.email !== process.env.ADMIN_EMAIL) {
    return {
      error: 'Vous devez être connecté pour supprimer une saison',
    }
  }

  try {
    await prisma.season.delete({
      where: { id },
    })
  } catch (error) {
    return { error: error.message }
  }
  revalidatePath('/admin')
  revalidatePath('/location')
}
