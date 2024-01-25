import styles from './styles.module.scss'

export interface AccordionRootProps {
  children: React.ReactNode
  title: string
}

export function Root({ children, title }: AccordionRootProps) {
  return (
    <div className={styles['container']}>
      <h1 className={styles['title']}>{title}</h1>
      {children}
    </div>
  )
}
