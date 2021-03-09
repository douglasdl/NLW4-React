import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQG3ehztB6g2uA/profile-displayphoto-shrink_400_400/0/1532380492566?e=1619654400&v=beta&t=rApX75TcJ0XB46TcJNGtr8QC2fUyrtlRLqZKoiFV53M" alt="Douglas Dias Leal"/>
            <div>
                <strong>Douglas Dias Leal</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}