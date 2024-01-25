'use client'

import { useCallback, useEffect, useState } from 'react'
import { keyframes, styled } from 'styled-components'

interface ILines {
  id: number
  width: number
  left: number
  duration: number
  color: string
}

export interface IBackgroundLinesProps {
  colors: string[]
  children: React.ReactNode
}

export function BackgroundLines({ colors, children }: IBackgroundLinesProps) {
  const [lines, setLines] = useState<ILines[]>([])

  const randomIndex = useCallback((array: string[]) => Math.floor(Math.random() * array.length), [])

  const createLine = useCallback(() => {
    const lineWidth = Math.random() * 12
    const animationDuration = Math.random() * 1
    const lineColor = colors[randomIndex(colors)]

    const newLine = {
      id: Date.now(),
      width: 2 + lineWidth,
      left: Math.random() * window.innerWidth,
      duration: 2 + animationDuration,
      color: lineColor,
    }

    setLines((prevLines) => [...prevLines, newLine])
  }, [])

  const removeLine = useCallback((lineId: number) => {
    setLines((prevLines) => prevLines.filter((line) => line.id !== lineId))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      createLine()
    }, 200)

    return () => clearInterval(interval)
  }, [createLine])

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex gap-40 flex-col">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        {lines.map((line) => (
          <Line
            lineColor={line.color}
            key={line.id}
            style={{
              width: `${line.width}px`,
              left: `${line.left}px`,
              animationDuration: `${line.duration}s`,
            }}
            onAnimationEnd={() => removeLine(line.id)}
          />
        ))}
      </div>
      {children}
    </div>
  )
}

const animate = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
`

const Line = styled.div<{ lineColor: string }>`
  position: absolute;
  bottom: 0;
  width: 20px;
  aspect-ratio: 1/1;
  background: ${({ lineColor }) => lineColor};
  box-shadow: 0 0 10px ${({ lineColor }) => lineColor}, 0 0 20px ${({ lineColor }) => lineColor},
    0 0 30px ${({ lineColor }) => lineColor}, 0 0 50px ${({ lineColor }) => lineColor};
  border-radius: 50%;
  animation: ${animate} 5s linear forwards;

  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 25%;
    width: 50%;
    height: 100vh;
    opacity: 0.5;
    background: linear-gradient(${({ lineColor }) => lineColor}, transparent);
  }
`
