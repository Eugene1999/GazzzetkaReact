import './RightSidebar.css';
import TelegramChannel from './TelegramChannel.jsx';
import ReleasesCalendar from './ReleasesCalendar.jsx';

const RightSidebar = () => {
    return (
        <div className="right-sidebar">
            <TelegramChannel />
            <ReleasesCalendar />
        </div>
    );
};

export default RightSidebar;