import styles from './header.module.css'

export const Header = () => {
    return (
        <div className={styles.containerHeader}>
            <div className={styles.containerTitleHeader}>
                <h2>App de tareas</h2>
            </div>
        </div>
    )
}
