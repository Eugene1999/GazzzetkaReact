
import './Content.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

const Channels = () => <h1>Каналы</h1>;
const Aggregator = () => <h1>Агрегатор</h1>;
const Articles = () => <h1>Статьи</h1>;

const Content = () => {
    return (
        <div className="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/channels" element={<Channels />} />
                <Route path="/aggregator" element={<Aggregator />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </div>
    );
};

export default Content;