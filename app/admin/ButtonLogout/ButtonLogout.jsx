import { MdLogout } from 'react-icons/md'
import './ButtonLogout.scss'

export function ButtonLogout() {
  return (
    <button
      className="button-logout"
    >
      Logout <MdLogout />
    </button>
  )
}
