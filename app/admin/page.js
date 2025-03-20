'use client'

import { AdminPriceTable } from './AdminPriceTable/AdminPriceTable'
import { AddWeekForm } from './AddWeekForm/AddWeekForm'
import { ButtonLogout } from './ButtonLogout/ButtonLogout'

export default function Admin() {
  return (
    <main className="admin">
      <ButtonLogout />
      <h1>Admin</h1>
      <AdminPriceTable />
      <AddWeekForm />
    </main>
  )
}
