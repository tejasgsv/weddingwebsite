// Wedding Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cinematic entry
    initCinematicEntry();
    
    // Initialize all features after entry
    setTimeout(() => {
        initNavigation();
        initCountdown();
        initGallery();
        initRSVP();
        initMusic();
        initLanguageToggle();
        initScrollAnimations();
        initParticleEffect();
        initSocialSharing();
        initEmojiReactions();
        initDigitalGuestbook();
        initTimelineAnimations();
        initFireworks();
        initCalendarIntegration();
        initVirtualAarti();
        initLivePolls();
        initAvatarSelection();
        loadContent();
    }, 3000);
});

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Countdown Timer
function initCountdown() {
    const weddingDate = new Date(weddingConfig.weddingDate).getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        } else {
            document.getElementById('countdown').innerHTML = '<h3>The Wedding Day is Here! 🎉</h3>';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Gallery
function initGallery() {
    const gallerySlider = document.getElementById('gallerySlider');
    const galleryGrid = document.getElementById('galleryGrid');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const sliderDots = document.getElementById('sliderDots');
    
    let currentSlide = 0;
    const images = weddingConfig.media.galleryImages;
    
    // Create slider
    const sliderTrack = document.createElement('div');
    sliderTrack.className = 'slider-track';
    
    images.forEach((imageSrc, index) => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `Wedding Photo ${index + 1}`;
        img.className = 'slider-image';
        img.onerror = function() {
            this.src = `https://via.placeholder.com/800x500/D4AF37/FFFFFF?text=Wedding+Photo+${index + 1}`;
        };
        sliderTrack.appendChild(img);
    });
    
    gallerySlider.appendChild(sliderTrack);
    
    // Create dots
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });
    
    // Create gallery grid
    images.forEach((imageSrc, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `Wedding Photo ${index + 1}`;
        img.onerror = function() {
            this.src = `https://via.placeholder.com/300x300/D4AF37/FFFFFF?text=Photo+${index + 1}`;
        };
        
        galleryItem.appendChild(img);
        galleryItem.addEventListener('click', () => goToSlide(index));
        galleryGrid.appendChild(galleryItem);
    });
    
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        const translateX = -slideIndex * 100;
        sliderTrack.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === slideIndex);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % images.length;
        goToSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + images.length) % images.length;
        goToSlide(currentSlide);
    }
    
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Auto-play slider
    setInterval(nextSlide, 5000);
}

// RSVP Form
function initRSVP() {
    const rsvpForm = document.getElementById('rsvpForm');
    
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('guestName').value,
            email: document.getElementById('guestEmail').value,
            attendance: document.getElementById('attendance').value,
            guestCount: document.getElementById('guestCount').value,
            message: document.getElementById('message').value
        };
        
        // Simulate form submission
        const submitBtn = document.querySelector('.rsvp-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your RSVP! We\'ll be in touch soon.');
            rsvpForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
        
        // In a real implementation, you would send this data to a server
        console.log('RSVP Data:', formData);
    });
}

// Enhanced Music with Multiple Tracks
function initMusic() {
    const musicToggle = document.getElementById('musicToggle');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const traditionalMusic = document.getElementById('traditionalMusic');
    let isPlaying = false;
    let currentTrack = 'romantic';
    
    // Set default music sources
    backgroundMusic.src = weddingConfig.media.backgroundMusic;
    traditionalMusic.src = 'audio/garba-music.mp3';
    
    // Create music selector
    const musicSelector = document.createElement('select');
    musicSelector.innerHTML = `
        <option value="romantic">Romantic</option>
        <option value="traditional">Traditional</option>
    `;
    musicSelector.style.marginLeft = '0.5rem';
    musicSelector.addEventListener('change', switchTrack);
    
    musicToggle.parentNode.insertBefore(musicSelector, musicToggle.nextSibling);
    
    function switchTrack() {
        const wasPlaying = isPlaying;
        if (isPlaying) {
            backgroundMusic.pause();
            traditionalMusic.pause();
        }
        
        currentTrack = musicSelector.value;
        
        if (wasPlaying) {
            const activeMusic = currentTrack === 'romantic' ? backgroundMusic : traditionalMusic;
            activeMusic.play().catch(e => console.log('Audio play failed:', e));
        }
    }
    
    musicToggle.addEventListener('click', function() {
        const activeMusic = currentTrack === 'romantic' ? backgroundMusic : traditionalMusic;
        const inactiveMusic = currentTrack === 'romantic' ? traditionalMusic : backgroundMusic;
        
        if (isPlaying) {
            activeMusic.pause();
            inactiveMusic.pause();
            this.innerHTML = '<i class="fas fa-music"></i>';
            this.classList.remove('playing');
            this.classList.add('paused');
        } else {
            inactiveMusic.pause();
            activeMusic.play().catch(e => {
                console.log('Audio play failed:', e);
                alert('Please click to enable audio');
            });
            this.innerHTML = '<i class="fas fa-pause"></i>';
            this.classList.remove('paused');
            this.classList.add('playing');
        }
        isPlaying = !isPlaying;
    });
    
    // Handle audio events
    [backgroundMusic, traditionalMusic].forEach(audio => {
        audio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
        
        audio.addEventListener('error', function() {
            console.log('Audio file not found');
        });
    });
}

// Language Toggle
function initLanguageToggle() {
    const languageToggle = document.getElementById('languageToggle');
    let currentLanguage = 'english';
    
    languageToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'english' ? 'gujarati' : 'english';
        
        // Update button text
        this.textContent = currentLanguage === 'english' ? 'ગુજરાતી' : 'English';
        
        // Update section titles
        document.querySelectorAll('[data-en]').forEach(element => {
            const englishText = element.getAttribute('data-en');
            const gujaratiText = element.getAttribute('data-gu');
            
            if (currentLanguage === 'gujarati' && gujaratiText) {
                element.textContent = gujaratiText;
            } else {
                element.textContent = englishText;
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Add animation class to elements
    document.querySelectorAll('.event-card, .countdown-item, .gallery-item').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Load Content from Config
function loadContent() {
    // Update couple names
    document.querySelector('.groom-name').textContent = weddingConfig.couple.groom;
    document.querySelector('.bride-name').textContent = weddingConfig.couple.bride;
    
    // Update love story
    document.querySelector('.love-story').textContent = weddingConfig.couple.loveStory;
    
    // Update hero background
    const hero = document.querySelector('.hero');
    hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${weddingConfig.media.heroImage}')`;
    
    // Handle hero image error
    const heroImg = new Image();
    heroImg.onload = function() {
        hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${weddingConfig.media.heroImage}')`;
    };
    heroImg.onerror = function() {
        hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://via.placeholder.com/1920x1080/D4AF37/FFFFFF?text=Chimay+%26+Priyanka')`;
    };
    heroImg.src = weddingConfig.media.heroImage;
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger hero animations with stagger
    const heroElements = document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-2, .fade-in-delay-3');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 500 + (index * 200));
    });
    
    // Add entrance animation to invitation card
    setTimeout(() => {
        const invitationCard = document.querySelector('.invitation-card');
        if (invitationCard) {
            invitationCard.style.transform = 'scale(1)';
            invitationCard.style.opacity = '1';
        }
    }, 300);
});

// Handle form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add real-time form validation
document.addEventListener('input', function(e) {
    if (e.target.type === 'email') {
        const isValid = validateEmail(e.target.value);
        e.target.style.borderColor = isValid ? '#90EE90' : '#FF6B6B';
    }
});

// Preload images for better performance
function preloadImages() {
    weddingConfig.media.galleryImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
setTimeout(preloadImages, 1000);

// Cinematic Entry Animation
function initCinematicEntry() {
    const loadingScreen = document.getElementById('loadingScreen');
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    // Start curtain reveal after 2 seconds
    setTimeout(() => {
        loadingScreen.classList.add('reveal');
        
        // Try to start music (user interaction may be required)
        backgroundMusic.play().catch(() => {
            console.log('Music autoplay blocked - user interaction required');
        });
    }, 2000);
    
    // Hide loading screen after curtain animation
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    }, 4000);
}

// Emoji Reactions
function initEmojiReactions() {
    const reactionButtons = document.querySelectorAll('.reaction-btn');
    const reactionContainer = document.getElementById('reactionContainer');
    
    reactionButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const emoji = this.getAttribute('data-emoji');
            createFloatingReaction(emoji);
        });
    });
    
    function createFloatingReaction(emoji) {
        const reaction = document.createElement('div');
        reaction.className = 'floating-reaction';
        reaction.textContent = emoji;
        reaction.style.left = Math.random() * 90 + '%';
        reaction.style.bottom = '0px';
        
        reactionContainer.appendChild(reaction);
        
        setTimeout(() => {
            reaction.remove();
        }, 3000);
    }
}

// Digital Guestbook
function initDigitalGuestbook() {
    const blessingInput = document.getElementById('guestBlessing');
    const addBlessingBtn = document.getElementById('addBlessing');
    const guestbookHearts = document.getElementById('guestbookHearts');
    
    addBlessingBtn.addEventListener('click', function() {
        const blessing = blessingInput.value.trim();
        if (blessing) {
            createBlessingHeart(blessing);
            blessingInput.value = '';
            
            // Show thank you message
            this.innerHTML = '<i class="fas fa-check"></i> Thank you!';
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-heart"></i> Send Blessing';
            }, 2000);
        }
    });
    
    blessingInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addBlessingBtn.click();
        }
    });
    
    function createBlessingHeart(blessing) {
        const heart = document.createElement('div');
        heart.className = 'blessing-heart';
        heart.innerHTML = '💖';
        heart.title = blessing;
        heart.style.left = Math.random() * 90 + '%';
        heart.style.bottom = '0px';
        
        guestbookHearts.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}

// Timeline Animations
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Fireworks Animation
function initFireworks() {
    const finaleSection = document.querySelector('.finale-section');
    const fireworksContainer = document.getElementById('fireworksContainer');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startFireworks();
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(finaleSection);
    
    function startFireworks() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                createFirework();
            }, i * 200);
        }
    }
    
    function createFirework() {
        const colors = ['#D4AF37', '#F8BBD9', '#90EE90', '#FFD700', '#FF69B4'];
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.background = colors[Math.floor(Math.random() * colors.length)];
        firework.style.left = Math.random() * 100 + '%';
        firework.style.top = Math.random() * 50 + '%';
        firework.style.boxShadow = `0 0 20px ${firework.style.background}`;
        
        fireworksContainer.appendChild(firework);
        
        setTimeout(() => {
            firework.remove();
        }, 2000);
    }
}

// Calendar Integration
function initCalendarIntegration() {
    window.addToGoogleCalendar = function() {
        const startDate = '20251202T180000Z';
        const endDate = '20251202T230000Z';
        const title = 'Chimay & Priyanka Wedding Reception';
        const details = 'Join us for the wedding celebration of Chimay Pandya and Priyanka Patel';
        const location = 'Novotel Ahmedabad, Iscon Cross Road, S.G. Highway, Ahmedabad, Gujarat – 380015';
        
        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
        window.open(url, '_blank');
    };
    
    window.downloadICS = function() {
        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding//Wedding Invitation//EN
BEGIN:VEVENT
UID:wedding-${Date.now()}@wedding.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:20251202T180000Z
DTEND:20251202T230000Z
SUMMARY:Chimay & Priyanka Wedding Reception
DESCRIPTION:Join us for the wedding celebration of Chimay Pandya and Priyanka Patel
LOCATION:Novotel Ahmedabad, Iscon Cross Road, S.G. Highway, Ahmedabad, Gujarat – 380015
END:VEVENT
END:VCALENDAR`;
        
        const blob = new Blob([icsContent], { type: 'text/calendar' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'chimay-priyanka-wedding.ics';
        a.click();
        URL.revokeObjectURL(url);
    };
    
    window.generateQR = function() {
        const modal = document.getElementById('qrModal');
        const qrCode = document.getElementById('qrCode');
        
        // Simple QR code using QR Server API
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(window.location.href)}`;
        qrCode.innerHTML = `<img src="${qrUrl}" alt="QR Code" style="max-width: 200px;">`;
        
        modal.style.display = 'block';
        
        // Close modal functionality
        const closeBtn = document.querySelector('.qr-close');
        closeBtn.onclick = () => modal.style.display = 'none';
        
        window.onclick = (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        };
    };
}

// Particle Effect
function initParticleEffect() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.color = Math.random() > 0.5 ? '#D4AF37' : '#F8BBD9';
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Social Sharing Functions
function initSocialSharing() {
    window.shareOnWhatsApp = function() {
        const text = `Join us for Chimay & Priyanka's Wedding on December 2nd, 2025! ${window.location.href}`;
        const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };
    
    window.shareOnFacebook = function() {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
        window.open(url, '_blank');
    };
    
    window.copyLink = function() {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Wedding invitation link copied to clipboard!');
        }).catch(() => {
            const textArea = document.createElement('textarea');
            textArea.value = window.location.href;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('Wedding invitation link copied to clipboard!');
        });
    };
}