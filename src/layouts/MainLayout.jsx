import {useState, useEffect} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from "../components/HEADER";


const MainLayout = () => {
    const { pathname } = useLocation();
    const pageClass = (() => {
        switch(pathname) {
            case '/':
                return 'home-page';
            case '/goals-page':
                return 'goals-page';
            case '/habits-page':
                return 'habits-page';
            case '/achievements':
                return 'achievements-page';
            default:
                return '';
        }
    }) ();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Симулируем начальную загрузку, например 3 секунды
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        // Очистка таймера при размонтировании
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
        <div className="loader">
            <div className="loader__logo">
            Life<span>Tracker</span>
            </div>
            <p className="loader__quote">
            <q>Никаких убеждений. Только правда</q>
            </p>
            <div className="loader__quote-author">— S.Llirik</div>
        </div>
        );
    }

    

  return (
    <>
        <Header />
        <main className={`page ${pageClass}`}>
            <div className="container page__container">
                <Outlet/>
            </div>
        </main>
    </>
  );
};

export default MainLayout;
