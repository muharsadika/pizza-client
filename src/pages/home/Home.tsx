import { Link } from 'react-router-dom';
import stylesApp from '../../assets/App.module.css';

export default function Home() {
    const buttonList = ['home', 'pizza', 'steps', 'date'];

    return (
        <div className={stylesApp.Index}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    margin: 'auto',
                }}
            >
                {buttonList.map((button) => (
                    <button
                        className={stylesApp.button}
                        key={button.toLowerCase()}
                    >
                        <Link
                            to={`/${button.toLowerCase()}`}
                            className={stylesApp.buttonText}
                        >
                            {button.charAt(0).toUpperCase() + button.slice(1)}
                        </Link>
                    </button>
                ))}
            </div>
        </div>
    );
}
