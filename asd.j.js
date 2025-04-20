document.getElementById("info-btn").addEventListener("click", function() {
    document.getElementById("text-content").innerHTML = 
        "<p>Меня зовут Hур. Я <strong>фронтенд-разработчик</strong> из Таджикистана...</p>";
});

document.getElementById("skills-btn").addEventListener("click", function() {
    document.getElementById("text-content").innerHTML = 
        "<p>Мои навыки: HTML, CSS, JavaScript, ,...</p>";
});

document.getElementById("education-btn").addEventListener("click", function() {
    document.getElementById("text-content").innerHTML = 
        "<p>Образование:Международный университет туризма и Предпринимательства Таджикистана </p>";
});





const container = document.getElementById('falling-squares-container');
        
function createSquare() {
    const square = document.createElement('div');
    square.className = 'square';
    
    // Начальная позиция (случайная по горизонтали)
    const startX = Math.random() * container.offsetWidth;
    square.style.left = startX + 'px';
    square.style.top = '-20px';
    
    // Случайный цвет
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
    square.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Случайный размер
    const size = 10 + Math.random() * 30;
    square.style.width = size + 'px';
    square.style.height = size + 'px';
    
    // Добавляем квадратик в контейнер
    container.appendChild(square);
    
    // Анимация падения
    let posY = -size;
    const speed = 1 + Math.random() * 5;
    
    function animate() {
        posY += speed;
        square.style.top = posY + 'px';
        
        // Если квадратик упал за пределы контейнера, удаляем его
        if (posY > container.offsetHeight) {
            container.removeChild(square);
        } else {
            requestAnimationFrame(animate);
        }
    }
    
    animate();
}

// Создаем новые квадратики каждые 300 мс
setInterval(createSquare, 300);