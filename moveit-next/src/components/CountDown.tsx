import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CountDown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function CountDown() {
    const { startNewChallenge } = useContext(ChallengesContext);

    let cycleMinutes = 0.1;
    const [time, setTime] = useState(cycleMinutes * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(cycleMinutes * 60);
    }

    useEffect(() => {
        //console.log(active);
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if(isActive && time == 0) {
            //console.log("Finalizou");
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

    return (
        <div className={styles.countDownContainer}>
            <div>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                    disabled 
                    className={styles.countdownButton} 
                >
                    Ciclo Encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button 
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`} 
                            onClick={resetCountDown}
                        >
                            Abandonar Ciclo
                        </button>
                    ) : (
                        <button 
                            type="button" 
                            className={styles.countdownButton} 
                            onClick={startCountDown}
                        >
                            Iniciar Ciclo
                        </button>
                    ) }
                </>
            )}

            
        </div>
    );
}