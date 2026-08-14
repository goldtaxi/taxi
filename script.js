// Подключение кошелька
document.querySelectorAll('#connectWallet, #connectWallet2, #connectWallet3').forEach(btn => {
    btn.addEventListener('click', async () => {
        try {
            if (window.solana && window.solana.isPhantom) {
                const response = await window.solana.connect();
                btn.textContent = `🟢 ${response.publicKey.toString().slice(0, 4)}...${response.publicKey.toString().slice(-4)}`;
                btn.style.background = '#00c853';
                btn.style.color = '#fff';
                console.log('Кошелек подключен:', response.publicKey.toString());
            } else {
                window.open('https://phantom.app/', '_blank');
                alert('Установи Phantom Wallet!');
            }
        } catch (error) {
            console.error('Ошибка подключения:', error);
        }
    });
});

// Копирование адреса
function copyAddress(element) {
    const text = element.textContent;
    navigator.clipboard.writeText(text).then(() => {
        const original = element.textContent;
        element.textContent = '✅ Скопировано!';
        setTimeout(() => {
            element.textContent = original;
        }, 2000);
    });
}

// Кнопка "Купить $TAXI"
document.getElementById('buyTaxi')?.addEventListener('click', () => {
    alert('🚀 Переход на страницу покупки $TAXI\n\nАдрес: 3YBgdJkNi41H4AtqNtywFdTx11H5CmDvt8qB3QHxninS\nПул: Meteora');
});

// Кнопка "Узнать больше"
document.getElementById('learnMore')?.addEventListener('click', () => {
    window.location.href = 'ecosystem.html';
});

// Кнопки "Торговать" в таблице
document.querySelectorAll('.btn-table:not(.disabled)').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('🔄 Переход к торговле токеном\n\nСкоро будет доступно на DexScreener и Meteora!');
    });
});

// Анимация для карточек при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .token-card, .exchange-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Обновление цен (симуляция)
function updatePrices() {
    const priceElements = document.querySelectorAll('.current-price, .stat-number');
    priceElements.forEach(el => {
        if (el.textContent.includes('$')) {
            const base = parseFloat(el.textContent.replace(/[$,]/g, ''));
            if (!isNaN(base)) {
                const change = (Math.random() - 0.45) * 0.05;
                const newPrice = base * (1 + change);
                el.textContent = '$' + newPrice.toFixed(6);
            }
        }
    });
}

setInterval(updatePrices, 5000);

// Консольное приветствие
console.log('🚖 $TAXI - Gold Taxi на Solana');
console.log('📊 Экосистема из 7 токенов');
console.log('🔗 Адрес: 3YBgdJkNi41H4AtqNtywFdTx11H5CmDvt8qB3QHxninS');
console.log('🌐 Сайт: https://goldtaxi.github.io/taxi/');
console.log('💪 Построено на Solana Token-2022');

// Добавляем дату в футер
document.querySelectorAll('.footer-bottom span:last-child').forEach(el => {
    el.textContent = `Built on Solana 🚀 ${new Date().getFullYear()}`;
});
