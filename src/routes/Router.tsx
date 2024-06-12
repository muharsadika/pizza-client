import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pizza from '../pages/pizza/Pizza';
import Home from '../pages/home/Home';
import Steps from '../pages/steps/Steps';
import Layout from '../layout/Layout';
import NotFound from '../pages/404/NotFound';
import Date from '../pages/countDate/CountDate';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/steps" element={<Steps />} />
                    <Route path="/pizza" element={<Pizza />} />
                    <Route path="/date" element={<Date />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
