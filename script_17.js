
// НАСТРОЙКА: Добавлено "+03:00" в конец для фиксации Московского времени
const TARGET_DATE = new Date("2026-10-17T17:17:00+03:00").getTime();

const wdgaster_17Element = document.getElementById('wdgaster_17'); 

function updateTimer() {
    const now = new Date().getTime();
    const difference = TARGET_DATE - now;

    // Если дата наступила
    if (difference <= 0) {
        wdgaster_17Element.innerHTML = "But nobody came.";
        clearInterval(timerInterval);
        return;
    }

    // Расчет дней, часов, минут и секунд
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Добавляем ноль впереди для красоты
    days = days < 10 ? '0' + days : days;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Вывод текста строго внутрь вашего h2
    wdgaster_17Element.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
}

// Запуск каждую секунду
const timerInterval = setInterval(updateTimer, 1000);
updateTimer(); // Моментальный запуск при загрузке
