'use client'

import styles from './styles.module.scss'
import { useState } from 'react'

export interface SimpleAccordionItemProps {
  summary: string
  children: string
}

export function Item({ children, summary }: SimpleAccordionItemProps) {
  const [open, setOpen] = useState<{ faq: '' | 'show'; icon: '' | 'rotate' }>({
    faq: '',
    icon: '',
  })

  function handleClick() {
    setOpen(open.faq ? { faq: '', icon: '' } : { faq: 'show', icon: 'rotate' })
  }

  return (
    <div
      style={{
        backgroundColor: 'inherit',
        borderBottom: '2px solid',
        borderBottomColor: 'inherit',
      }}
    >
      <button className={styles['button']} onClick={handleClick}>
        <span>{summary}</span>
        <i className={styles['d-arrow'] + ' ' + styles[open.icon]}>
          <Arrow />
        </i>
      </button>
      <p className={styles[open.faq] + ' ' + styles['p']}>{children}</p>
    </div>
  )
}

const Arrow = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
  </svg>
)
