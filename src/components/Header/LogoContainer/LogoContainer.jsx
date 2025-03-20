'use client'

import Link from "next/link";
import { FaSnowflake } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import './LogoContainer.scss'

export function LogoContainer() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <div className='logo-container'>
      {!isHome &&
      <Link href='/' title='Accueil'>
      <FaSnowflake />
      </Link>}
    </div>
  )

}