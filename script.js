// Connect Wallet
document.querySelectorAll('#connectWallet, #connectWallet2, #connectWallet3').forEach(btn => {
    btn.addEventListener('click', async () => {
        try {
            if (window.solana && window.solana.isPhantom) {
                const response = await window.solana.connect();
                btn.textContent = `🟢 ${response.publicKey.toString().slice(0, 4)}...${response.publicKey.toString().slice(-4)}`;
                btn.style.background = '#00c853';
                btn.style.color = '#fff';
                console.log('Wallet connected:', response.publicKey.toString());
            } else {
                window.open('https://phantom.app/', '_blank');
                alert('Please install Phantom Wallet!');
            }
        } catch (error) {
            console.error('Connection error:', error);
        }
    });
});

// Copy Address
function copyAddress(element) {
    const text = element.textContent;
    navigator.clipboard.writeText(text).then(() => {
        const original = element.textContent;
        element.textContent = '✅ Copied!';
        setTimeout(() => {
            element.textContent = original;
        }, 2000);
    });
}

// Buy Button
document.getElementById('buyTaxi')?.addEventListener('click', () => {
    alert('🚀 Buy $TAXI\n\nAddress: 3YBgdJkNi41H4AtqNtywFdTx11H5CmDvt8qB3QHxninS\nPool: Meteora');
});

// Learn More
document.getElementById('learnMore')?.addEventListener('click', () => {
    window.location.href = 'ecosystem.html';
});

// Trade Buttons
document.querySelectorAll('.btn-table:not(.disabled)').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('🔄 Trading coming soon on DexScreener and Meteora!');
    });
});

// Scroll Animations
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

// Price Updates
function updatePrices() {
    const priceElements = document.querySelectorAll('.current-price, .stat-number');
    priceElements.forEach(el => {
        if (el.textContent.includes('$')) {
            const base = parseFloat(el.textContent.replace(/[$,]/g, ''));
            if (!isNaN(base) && base > 0) {
                const change = (Math.random() - 0.45) * 0.05;
                const newPrice = base * (1 + change);
                el.textContent = '$' + newPrice.toFixed(6);
            }
        }
    });
}

setInterval(updatePrices, 5000);

// Console
console.log('🚖 $TAXI - Gold Taxi on Solana');
console.log('📊 7 Token Ecosystem');
console.log('🔗 Address: 3YBgdJkNi41H4AtqNtywFdTx11H5CmDvt8qB3QHxninS');
console.log('🌐 https://goldtaxi.github.io/taxi/');
console.log('💪 Built on Solana Token-2022');

// Footer Year
document.querySelectorAll('.footer-bottom span:last-child').forEach(el => {
    const year = new Date().getFullYear();
    el.textContent = `Built on Solana 🚀 ${year}`;
});
