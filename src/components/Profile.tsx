import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);


    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/lucasparente1998.png" alt="Lucas Parente" />
            <div>
                <strong>Lucas Parente</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    level {level}
                </p>
            </div>
        </div>
    )
}