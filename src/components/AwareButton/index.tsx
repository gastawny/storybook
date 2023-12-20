'use client'

import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

export interface AwareButtonProps {
  children: React.ReactNode
}

interface Ripple {
  id: number
  x: number
  y: number
}

export function AwareButton({ children }: AwareButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const x = e.clientX - e.currentTarget.offsetLeft
    const y = e.clientY - e.currentTarget.offsetTop

    const newRipple: Ripple = {
      id: Date.now(),
      x,
      y,
    }

    setRipples((prevRipples) => [...prevRipples, newRipple])

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter((ripple) => ripple.id !== newRipple.id))
    }, 1000)
  }

  return (
    <Button onClick={createRipple}>
      {children}
      {ripples.map((ripple) => (
        <Ripple key={ripple.id} x={ripple.x} y={ripple.y} />
      ))}
    </Button>
  )
}

const animate = keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: 0.2;
  }
  100% {
    width: 500px;
    height: 500px;
    opacity: 0;
  }
`

const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 12px 36px;
  margin: 10px;
  color: #fff;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  font-size: 18px;
  text-decoration: none;
  letter-spacing: 2px;
  overflow: hidden;
  cursor: pointer;
`

const Ripple = styled.span<{ x: number; y: number }>`
  position: absolute;
  background: #fff;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border-radius: 50%;
  animation: ${animate} 1s linear infinite;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
`
