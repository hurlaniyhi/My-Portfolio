import styles from '../../styles/Title.module.scss'

const Title = ({number, title}) => {
    return(
        <div className={styles.titleWrapper}>
            <p className={styles.titleText}><span className={styles.numbers}>{number}.</span>{title}</p>
            <div className={styles.titleLine}></div>
        </div>
    )
}

export default Title