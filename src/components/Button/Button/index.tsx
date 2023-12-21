'use client'

import { CSSProperties, ComponentProps, useState } from 'react'
import styles from './styles.module.scss'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: styles['styledButton'],
  variants: {
    isClicked: {
      true: styles['click'],
    },
  },
})

export type IButtonProps = ComponentProps<'button'> &
  Omit<VariantProps<typeof button>, 'isClicked'> & {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    children: string
    bgColor: string
    primaryColor: string
    secondaryColor: string
    border: string
  }

export function Button({
  children,
  onClick,
  className,
  bgColor,
  primaryColor,
  secondaryColor,
  border,
}: IButtonProps) {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick(event)
    setIsClicked(!isClicked)
    setTimeout(() => setIsClicked(false), 400)
  }

  const dynamicColors = {
    '--bgColor': bgColor,
    '--primary': primaryColor,
    '--secondary': secondaryColor,
    '--border': border,
  } as CSSProperties

  return (
    <button
      style={dynamicColors}
      onClick={handleClick}
      className={button({ isClicked, className })}
    >
      <span>{children}</span>
      <i></i>
    </button>
  )
}
