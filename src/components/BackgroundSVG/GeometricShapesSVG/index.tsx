import { icons } from './icons'

type IconType = 'triangle' | 'circle' | 'hexa' | 'box'

interface SVGProps {
  stroke?: boolean
  colors: string[]
  width: number
  icon: IconType
  zIndex?: number
  left: string
  top: string
  hidden?: boolean
}

export function GeometricShapesSVG({
  stroke = false,
  colors,
  zIndex = 10,
  width,
  icon,
  left,
  top,
  hidden,
}: SVGProps) {
  return (
    <svg
      style={{
        position: 'absolute',
        stroke: stroke ? 'currentColor' : 'none',
        fill: stroke ? 'none' : 'currentColor',
        display: hidden ? 'none' : 'block',
        overflow: 'visible',
        color: `${colors[Math.floor(Math.random() * 10)]}${Math.floor(Math.random() * 40) + 20}`,
        zIndex,
        width,
        left,
        top,
        filter: 'blur(8px) saturate(160%)',
      }}
      viewBox={icons[icon].viewBox}
    >
      {icons[icon].shape}
    </svg>
  )
}
