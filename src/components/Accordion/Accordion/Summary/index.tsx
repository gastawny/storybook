import styles from './styles.module.scss'

export interface AccordionSummaryProps {
  children: React.ReactNode
  title: string
}

export function Summary({ children, title }: AccordionSummaryProps) {
  return (
    <div className={styles['tab']}>
      <input type="radio" name="acc" id={title} />
      <label htmlFor={title}>
        <h2>01</h2>
        <h3>{title}</h3>
      </label>
      <div className={styles['content']}>{children}</div>
    </div>
  )
}
