import './index.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import HomePage from './pages/HomePage';
import GoalsPage from './pages/GoalsPage';
import HabitsPage from './pages/HabitsPage';
import Achievements from './pages/Achievements';
import NotFoundPage from './pages/NotFoundPage';


function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<MainLayout/>} >
                    <Route index element={<HomePage/>} />
                    <Route path='goals-page' element={<GoalsPage/>} />
                    <Route path='habits-page' element={<HabitsPage/>} />
                    <Route path='achievements' element={<Achievements/>} />
                    <Route path='*' element={<NotFoundPage/>} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
