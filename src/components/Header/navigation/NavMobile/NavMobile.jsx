'use client'

import { useState, useRef } from 'react'
import { BurgerIcon } from '../../BurgerIcon/BurgerIcon'
import { routeList } from '../routeList'
import { ActiveLink } from '../NavDestkop/ActiveLink/ActiveLink'
import { useClickAway } from 'react-use'
import { FaSnowflake } from 'react-icons/fa6'
import './NavMobile.scss'
import { AnimatePresence, motion } from 'motion/react'

export function NavMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  useClickAway(ref, () => {
    setIsOpen(false)
  })

  return (
    <div
      className="mobile"
      ref={ref}
    >
      <button
        className="burger-button"
        onClick={toggleMenu}
        aria-label="Menu"
        aria-controls="navigation"
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <span className="sr-only">Menu</span>
        <BurgerIcon isOpen={isOpen} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="nav-mobile"
            id="navigation"
            aria-label="Menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul>
              <li
                key="Home"
                onClick={toggleMenu}
              >
                <ActiveLink
                  href="/"
                  activeClassName="active"
                >
                  <FaSnowflake />
                  Accueil
                </ActiveLink>
              </li>
              {routeList.map(({ name, path, icon }) => (
                <li
                  key={name}
                  onClick={toggleMenu}
                >
                  <ActiveLink
                    href={path}
                    activeClassName="active"
                  >
                    {icon}
                    {name}
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}
