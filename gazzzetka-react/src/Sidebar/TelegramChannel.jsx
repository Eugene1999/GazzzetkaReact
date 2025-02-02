import './TelegramChannel.css';

const TelegramChannel = () => {
    // Здесь делаем имитацию отображения телеграм-канала, похожего на мобильное приложение
    const posts = Array.from({ length: 10 }, (_, i) => `Пост ${i + 1}: Lorem ipsum dolor sit amet.`);

    return (
        <div className="telegram-channel">
            <h2>Телеграм канал</h2>
            <div className="posts">
                {posts.map((post, index) => (
                    <div key={index} className="post">
                        {post}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TelegramChannel;