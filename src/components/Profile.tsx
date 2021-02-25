import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/lucasparente1998.png" alt="Lucas Parente" />
            <div>
                <strong>Lucas Parente</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    level 1
                </p>
            </div>
        </div>
    )
}