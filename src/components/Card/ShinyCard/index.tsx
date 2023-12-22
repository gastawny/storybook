'use client'

import { MouseEvent } from 'react'
import styled, { CSSProperties } from 'styled-components'

export interface ShinyCardProps {
  children: React.ReactNode
  bgColor: CSSProperties['color']
  shinyColor: CSSProperties['color']
  height: CSSProperties['height']
  width: CSSProperties['width']
}

type ContainerProps = Omit<ShinyCardProps, 'children'>

export function ShinyCard({ children, bgColor, shinyColor, height, width }: ShinyCardProps) {
  let [x, y] = [0, 0]

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    x = e.pageX - e.currentTarget.getBoundingClientRect().left
    y = e.pageY - e.currentTarget.getBoundingClientRect().top

    e.currentTarget.style.setProperty('--x', `${x}px`)
    e.currentTarget.style.setProperty('--y', `${y}px`)
  }

  return (
    <Container bgColor={bgColor} shinyColor={shinyColor} height={height} width={width}>
      <div onMouseMove={handleMouseMove} className="card">
        <div className="children">{children}</div>
      </div>
    </Container>
  )
}

const Container = styled.div<ContainerProps>`
  position: relative;

  .card {
    position: relative;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background: ${({ bgColor }) => bgColor};
    border-radius: 20px;
    overflow: hidden;

    &:hover {
      &::before {
        opacity: 1;
      }
    }

    &::before {
      content: '';
      top: var(--y);
      left: var(--x);
      transform: translate(-50%, -50%);
      position: absolute;
      background: radial-gradient(${({ shinyColor }) => shinyColor}, transparent, transparent);
      width: ${({ height }) => multiply(height, 1.5)};
      height: ${({ height }) => multiply(height, 1.5)};
      opacity: 0;
      transition: 0.5s, top 0s, left 0s;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 2px;
      border-radius: 18px;
      background: ${({ bgColor }) => bgColor + 'e5'};
    }
  }

  .children {
    position: relative;
    padding: 2px;
    z-index: 1;
  }
`

function multiply(value: CSSProperties['width'], constant: number) {
  const match = value?.toString().match(/([\d.]+)(\D+)/)

  if (match) {
    const num = parseFloat(match[1])
    const unity = match[2]
    const newNumber = num * constant

    return `${newNumber}${unity}` satisfies CSSProperties['width']
  }

  return value
}
