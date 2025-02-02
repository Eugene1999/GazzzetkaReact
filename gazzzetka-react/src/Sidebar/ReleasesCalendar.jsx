import './ReleasesCalendar.css';


const ReleasesCalendar = () => {
  // Определяем количество дней в текущем месяце
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Допустим, запланированные релизы на следующие дни
  const plannedReleases = [3, 8, 15, 22, 27];
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="calendar">
      <h2>Календарь релизов</h2>
      <div className="calendar-grid">
        {days.map((day) => (
          <div key={day} className="calendar-day">
            {day}
            {plannedReleases.includes(day) && <span className="release-dot"></span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReleasesCalendar;