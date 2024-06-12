import { useEffect, useState } from 'react';
import styles from './CountDate.module.css';

function CountDate() {
    return (
        <div className={styles.styledDiv}>
            <Count />
        </div>
    );
}

function Count() {
    const [count, setCount] = useState<number>(0);
    const [step, setStep] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        const newDate = new Date();
        newDate.setDate(newDate.getDate() + count);
        setDate(newDate);
    }, [count]);

    return (
        <div className={styles.countContainer}>
            <div className={styles.buttonContainer}>
                <button onClick={() => setStep((count) => count - 1)}>-</button>

                <span>Step: {step}</span>

                <button onClick={() => setStep((count) => count + 1)}>+</button>
            </div>

            <div className={styles.buttonContainer}>
                <button onClick={() => setCount((count) => count - step)}>
                    -
                </button>

                <span>Count: {count}</span>

                <button onClick={() => setCount((count) => count + step)}>
                    +
                </button>
            </div>

            <div>
                <p>{date.toDateString()}</p>
            </div>

            <div
                className={styles.buttonContainer}
                style={{ marginTop: '20px' }}
            >
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

export default CountDate;
