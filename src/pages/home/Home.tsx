import { Link } from 'react-router-dom';
import stylesApp from '../../assets/App.module.css';

export default function Home() {
    return (
        <div className={stylesApp.Index}>
            <div
                // className={stylesApp.App}
                style={{ display: 'flex', gap: '20px' }}
            >
                <button>
                    <Link to="/">Home</Link>
                </button>

                <button>
                    <Link to="/pizza">Pizza</Link>
                </button>

                <button>
                    <Link to="/steps">Steps</Link>
                </button>
            </div>
        </div>
    );
}
