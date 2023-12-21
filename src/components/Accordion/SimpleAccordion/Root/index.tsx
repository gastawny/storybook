export interface SimpleAccordionRootProps {
  bgColor?: string
  textColor?: string
  borderColor?: string
  children: React.ReactNode
  title: React.ReactNode
}

export function Root({
  children,
  title,
  bgColor = '#000',
  textColor = '#fff',
  borderColor = '#fff',
}: SimpleAccordionRootProps) {
  return (
    <div style={{ color: textColor }} className="max-w-full flex items-center flex-col gap-4">
      {title}
      <div style={{ backgroundColor: bgColor, borderBottomColor: borderColor }}>{children}</div>
    </div>
  )
}
