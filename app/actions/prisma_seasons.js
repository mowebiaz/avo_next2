'use server'

import { prisma } from '@/src/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createSeason(formData) {
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
    return {error: error.message}
  }

}

export async function deleteSeason(id) {
  try {
    await prisma.season.delete({
      where: { id },
    })

  } catch (error) {
    return {error: error.message}
  }
  revalidatePath('/admin')
  revalidatePath('/location')
}
