import stylesSteps from './Steps.module.css';
import { useState } from 'react';

const messages = [
    'Learn React ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
];

export default function Steps() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrevious() {
        if (step > 1) setStep((step) => step - 1);
    }

    function handleNext() {
        if (step < 3) setStep((step) => step + 1);
    }

    return (
        <>
            <button
                className={stylesSteps['close']}
                onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
                &times;
            </button>
            {isOpen && (
                <div className={stylesSteps['steps']}>
                    <div className={stylesSteps['numbers']}>
                        <div className={step >= 1 ? stylesSteps['active'] : ''}>
                            1
                        </div>
                        <div className={step >= 2 ? stylesSteps['active'] : ''}>
                            2
                        </div>
                        <div className={step >= 3 ? stylesSteps['active'] : ''}>
                            3
                        </div>
                    </div>

                    <p className={stylesSteps['message']}>
                        Step {step}: {messages[step - 1]}
                    </p>

                    <div className={stylesSteps['buttons']}>
                        <button
                            style={{
                                backgroundColor: '#7950f2',
                                color: 'white',
                            }}
                            onClick={handlePrevious}
                        >
                            Previous
                        </button>
                        <button
                            style={{
                                backgroundColor: '#7950f2',
                                color: 'white',
                            }}
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
