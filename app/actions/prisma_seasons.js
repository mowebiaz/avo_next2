'use server'

import { prisma } from '@/src/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createSeason(formData) {
  try {
    const name = formData.get('name')
    await prisma.season.create({
      data: { name },
    })
    revalidatePath('/admin')
    revalidatePath('/location')
  } catch (error) {
    console.log(error)
  }
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
  } catch (error) {
    console.log(error)
  }
}
