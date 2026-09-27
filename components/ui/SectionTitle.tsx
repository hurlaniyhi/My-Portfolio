import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  /** Section number shown before the title, e.g. "01". */
  number: string;
  title: string;
}

/** Numbered heading with a line after it, used at the top of each section. */
export default function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        <span className={styles.number}>{number}.</span>
        {title}
      </p>
      <div className={styles.line} />
    </div>
  );
}
