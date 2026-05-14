import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/Home.tsx';

function App() {
    return (
        <div className="min-h-screen">
            <Navigation />

            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
