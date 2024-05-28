import { Routes, Route as ReactRoute } from 'react-router-dom';
import Pizza from '../pages/pizza/Pizza';
import Home from '../pages/home/Home';

export default function Route() {
    return (
        <Routes>
            <ReactRoute path="/" element={<Home />} />
            <ReactRoute path="/pizza" element={<Pizza />} />
        </Routes>
    );
}
