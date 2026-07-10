document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.getElementById('carousel-track');
    const slides = carouselTrack.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const dotsContainer = document.getElementById('carousel-dots');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoPlayInterval;
    
    function createDots() {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }
    
    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        if (currentIndex < 0) currentIndex = totalSlides - 1;
        if (currentIndex >= totalSlides) currentIndex = 0;
        
        carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }
    
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 4000);
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
    });
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
    });
    
    createDots();
    startAutoPlay();
    
    const audio = document.getElementById('birthday-audio');
    const audioToggle = document.getElementById('audio-toggle');
    const audioIcon = document.getElementById('audio-icon');
    const audioText = document.getElementById('audio-text');
    const volumeSlider = document.getElementById('volume-slider');
    
    audio.volume = 0.3;
    
    audioToggle.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(e => console.log('Audio play error:', e));
            audioIcon.textContent = '🎵';
            audioText.textContent = 'Pausar';
        } else {
            audio.pause();
            audioIcon.textContent = '🔇';
            audioText.textContent = 'Play';
        }
    });
    
    volumeSlider.addEventListener('input', (e) => {
        audio.volume = e.target.value / 100;
    });
    
    const confettiContainer = document.getElementById('confetti-container');
    const confettiColors = ['#C41E3A', '#FFD700', '#FFB6C1', '#8B4513', '#FF69B4', '#FFA500'];
    
    function createConfetti() {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
                confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
                confetti.style.animationDelay = Math.random() * 5 + 's';
                
                const shapes = ['square', 'circle'];
                const shape = shapes[Math.floor(Math.random() * shapes.length)];
                if (shape === 'circle') {
                    confetti.style.borderRadius = '50%';
                }
                
                confettiContainer.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 10000);
            }, i * 200);
        }
    }
    
    setInterval(createConfetti, 10000);
    createConfetti();
    
    const floatingHearts = document.getElementById('floating-hearts');
    
    function createFloatingHeart() {
        const heart = document.createElement('span');
        heart.classList.add('floating-heart');
        heart.textContent = '💕';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.fontSize = (Math.random() * 1 + 1) + 'rem';
        floatingHearts.appendChild(heart);
        
        setTimeout(() => heart.remove(), 10000);
    }
    
    setInterval(createFloatingHeart, 800);
    
    const floatingStars = document.getElementById('floating-stars');
    
    function createFloatingStar() {
        const star = document.createElement('span');
        star.classList.add('floating-star');
        star.textContent = '⭐';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 30 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.fontSize = (Math.random() * 1.5 + 0.5) + 'rem';
        floatingStars.appendChild(star);
        
        setTimeout(() => star.remove(), 4000);
    }
    
    for (let i = 0; i < 15; i++) {
        createFloatingStar();
    }
    
    setInterval(createFloatingStar, 500);
    
    document.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(e => console.log('Audio play error:', e));
            audioIcon.textContent = '🎵';
            audioText.textContent = 'Pausar';
        }
    }, { once: true });
});
