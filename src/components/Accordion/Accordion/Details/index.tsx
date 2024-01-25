export interface AccordionDetailsProps {
  children: string
}

export function Details({ children }: AccordionDetailsProps) {
  return <p className="relative py-[10px] text-[#333] z-10">{children}</p>
}
