import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pizza from './pages/pizza/Pizza';
import Home from './pages/home/Home';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pizza" element={<Pizza />} />
            </Routes>
        </BrowserRouter>
    );
}
