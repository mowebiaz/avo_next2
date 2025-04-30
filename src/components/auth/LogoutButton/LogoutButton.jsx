import { signOut } from '@/auth'
import { MdLogout } from 'react-icons/md'
import './LogoutButton.scss'

export function LogoutButton() {
  return (
    <form
      className="form-logout"
      action={async () => {
        'use server'
        await signOut({ redirectTo: "/location" })
      }}
    >
      <button
        type="submit"
        className="button-logout"
      >
        Logout <MdLogout />
      </button>
    </form>
  )
}


