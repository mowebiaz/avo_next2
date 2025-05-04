'use client'

import { AnimatePresence, motion } from 'motion/react'
import { LinkAria } from '@/src/components/LinkAria/LinkAria'
import './LinksContainer.scss'

export function LinksContainer({ links, selectedCategories }) {
  return (
    <motion.div
      className="cards"
      layout
      style={{ position: 'relative' }}
    >
      <AnimatePresence mode="popLayout">
        {links
          .filter((link) => selectedCategories.includes(link.category))
          .map((link) => (
            <motion.div
              key={link.name}
              layout
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              <LinkAria
                key={link.name}
                data-linkcategory={link.category}
                href={link.link}
                className="card"
                target="_blank"
                referrerPolicy="no-opener no-referrer"
              >
                {link.name}
              </LinkAria>
            </motion.div>
          ))}
      </AnimatePresence>
    </motion.div>
  )
}
