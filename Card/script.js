const btn = document.getElementById('btn');
const music = document.getElementById('music');

const heartEmoji = '💗';
const minSize = 5;
const maxSize = 50;
const minDuration = 5;
const maxDuration = 8;
const spawnRate = 200; 

btn.addEventListener("click", func, {once:true});

function func() {
    alert ("This song about to play reminds me of you!");
    music.play();

    function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = heartEmoji;
    
    // Random position at bottom of screen
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.bottom = '0px';
    
    // Random size
    const size = Math.random() * (maxSize - minSize) + minSize;
    heart.style.fontSize = `${size}px`;
    
    // Random animation duration
    const duration = Math.random() * (maxDuration - minDuration) + minDuration;
    heart.style.animationDuration = `${duration}s`;
    
    document.body.appendChild(heart);
    
    // Remove heart after animation completes
    setTimeout(() => heart.remove(), duration * 1000);
}

// Create hearts at regular intervals
setInterval(createHeart, spawnRate);

// Initial burst of hearts
for (let i = 0; i < 10; i++) {
    setTimeout(createHeart, i * 100);
}

}
