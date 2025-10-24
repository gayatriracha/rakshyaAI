// Cybersecurity Discovery Journey - Main JavaScript
class CybersecurityAdventure {
    constructor() {
        this.isLoaded = false;
        this.particles = [];
        this.particleSystem = null;
        this.animations = {};
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.setupParticleSystem();
        this.hideLoadingScreen();
    }

    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            this.isLoaded = true;
            this.startHeroAnimations();
        });

        // Computer interaction
        const computerContainer = document.getElementById('computerContainer');
        if (computerContainer) {
            computerContainer.addEventListener('click', this.handleComputerClick.bind(this));
            computerContainer.addEventListener('mouseenter', this.handleComputerHover.bind(this));
            computerContainer.addEventListener('mouseleave', this.handleComputerLeave.bind(this));
        }

        // Child character interaction
        const childCharacter = document.getElementById('childCharacter');
        if (childCharacter) {
            childCharacter.addEventListener('click', this.handleChildClick.bind(this));
        }

        // URL input interaction
        const urlInput = document.getElementById('urlInput');
        if (urlInput) {
            urlInput.addEventListener('focus', this.handleUrlFocus.bind(this));
            urlInput.addEventListener('input', this.handleUrlInput.bind(this));
            urlInput.addEventListener('keypress', this.handleUrlKeypress.bind(this));
        }

        // Navigation
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', this.handleNavigation.bind(this));
        });
    }

    initializeAnimations() {
        // Initialize text splitting for animations
        if (typeof Splitting !== 'undefined') {
            Splitting();
        }
    }

    setupParticleSystem() {
        // P5.js particle system for magical effects
        const particleSketch = (p) => {
            let particles = [];
            let mouseX = 0;
            let mouseY = 0;

            p.setup = () => {
                const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
                canvas.parent('particles-canvas');
                
                // Initialize particles
                for (let i = 0; i < 50; i++) {
                    particles.push(new Particle(p));
                }
            };

            p.draw = () => {
                p.clear();
                
                // Update and draw particles
                for (let i = particles.length - 1; i >= 0; i--) {
                    particles[i].update(mouseX, mouseY);
                    particles[i].display();
                    
                    if (particles[i].isDead()) {
                        particles.splice(i, 1);
                        particles.push(new Particle(p));
                    }
                }
            };

            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            };

            p.mouseMoved = () => {
                mouseX = p.mouseX;
                mouseY = p.mouseY;
                
                // Add particles on mouse movement
                if (p.frameCount % 5 === 0) {
                    particles.push(new Particle(p, mouseX, mouseY));
                }
            };

            class Particle {
                constructor(p, x = null, y = null) {
                    this.p = p;
                    this.x = x || p.random(p.width);
                    this.y = y || p.random(p.height);
                    this.vx = p.random(-1, 1);
                    this.vy = p.random(-1, 1);
                    this.alpha = p.random(50, 150);
                    this.size = p.random(2, 6);
                    this.color = p.random(['#00d4ff', '#ffd700', '#68d391']);
                    this.life = 255;
                }

                update(mouseX, mouseY) {
                    // Move towards mouse if close
                    const dx = mouseX - this.x;
                    const dy = mouseY - this.y;
                    const distance = p.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        this.vx += dx * 0.001;
                        this.vy += dy * 0.001;
                    }

                    this.x += this.vx;
                    this.y += this.vy;
                    this.life -= 0.5;

                    // Wrap around edges
                    if (this.x < 0) this.x = p.width;
                    if (this.x > p.width) this.x = 0;
                    if (this.y < 0) this.y = p.height;
                    if (this.y > p.height) this.y = 0;
                }

                display() {
                    p.push();
                    p.noStroke();
                    p.fill(this.color + Math.floor(this.life / 255 * this.alpha).toString(16));
                    p.circle(this.x, this.y, this.size);
                    p.pop();
                }

                isDead() {
                    return this.life <= 0;
                }
            }
        };

        if (typeof p5 !== 'undefined') {
            this.particleSystem = new p5(particleSketch);
        }
    }

    startHeroAnimations() {
        // Animate hero title
        anime({
            targets: '.hero-title',
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 500
        });

        // Animate hero subtitle
        anime({
            targets: '.hero-subtitle',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 800
        });

        // Animate URL input container
        anime({
            targets: '.url-input-container',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 1100
        });

        // Animate CTA button
        anime({
            targets: '.cta-button',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 1400
        });

        // Animate child character
        anime({
            targets: '.child-character',
            opacity: [0, 1],
            translateX: [50, 0],
            duration: 1500,
            easing: 'easeOutExpo',
            delay: 1200
        });

        // Animate screen content
        anime({
            targets: '.screen-text',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 2000
        });

        anime({
            targets: '.url-display',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 2300
        });

        // Start story section animations after hero
        setTimeout(() => {
            this.animateStorySection();
        }, 3000);
    }

    animateStorySection() {
        // Animate story title
        anime({
            targets: '.story-title',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 1000,
            easing: 'easeOutExpo'
        });

        // Animate story text paragraphs with stagger
        anime({
            targets: '.story-text',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800,
            easing: 'easeOutExpo',
            delay: anime.stagger(300, {start: 500})
        });
    }

    handleComputerClick(event) {
        event.preventDefault();
        
        // Add click animation
        anime({
            targets: '.computer-container',
            scale: [1, 0.95, 1.05],
            duration: 300,
            easing: 'easeOutElastic(1, .8)'
        });

        // Enhance screen glow
        this.enhanceScreenGlow();
        
        // Trigger URL typing animation
        this.startUrlTyping();
    }

    handleComputerHover() {
        // Intensify screen glow on hover
        anime({
            targets: '.screen-glow',
            opacity: [0.5, 1],
            scale: [1, 1.2],
            duration: 500,
            easing: 'easeOutQuad'
        });
    }

    handleComputerLeave() {
        // Return to normal glow
        anime({
            targets: '.screen-glow',
            opacity: [1, 0.5],
            scale: [1.2, 1],
            duration: 500,
            easing: 'easeOutQuad'
        });
    }

    handleChildClick() {
        // Child character interaction
        anime({
            targets: '.child-character',
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
            duration: 600,
            easing: 'easeOutElastic(1, .8)'
        });

        // Create magical particles around child
        this.createMagicalBurst();
    }

    handleUrlFocus() {
        // Focus animation for URL input
        anime({
            targets: '.url-input-container',
            scale: [1, 1.02],
            duration: 300,
            easing: 'easeOutQuad'
        });
    }

    handleUrlInput(event) {
        const input = event.target;
        const value = input.value.toLowerCase();
        
        // Check if correct URL is being typed
        if (value.includes('rakshyaai') || value.includes('rakshya')) {
            input.style.borderColor = '#68d391';
            input.style.boxShadow = '0 0 20px rgba(104, 211, 145, 0.3)';
        } else {
            input.style.borderColor = '#ffd700';
            input.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.3)';
        }
    }

    handleUrlKeypress(event) {
        if (event.key === 'Enter') {
            this.enterDigitalWorld();
        }
    }

    enhanceScreenGlow() {
        // Create enhanced glow effect
        const glowElement = document.querySelector('.screen-glow');
        if (glowElement) {
            anime({
                targets: glowElement,
                opacity: [0.5, 1, 0.8],
                scale: [1, 1.5, 1.2],
                duration: 2000,
                easing: 'easeOutQuad'
            });
        }
    }

    startUrlTyping() {
        const urlInput = document.getElementById('urlInput');
        if (urlInput && typeof Typed !== 'undefined') {
            // Clear any existing content
            urlInput.value = '';
            
            // Start typing animation
            new Typed('#urlInput', {
                strings: ['www.rakshyaAI.com'],
                typeSpeed: 100,
                showCursor: false,
                onComplete: () => {
                    // Enable the input after typing
                    urlInput.disabled = false;
                    urlInput.focus();
                }
            });
        }
    }

    createMagicalBurst() {
        // Create a burst of magical particles
        const scene = document.querySelector('.visual-scene');
        if (!scene) return;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 6px;
                height: 6px;
                background: #ffd700;
                border-radius: 50%;
                pointer-events: none;
                left: 50%;
                top: 50%;
                z-index: 100;
            `;
            
            scene.appendChild(particle);

            anime({
                targets: particle,
                translateX: anime.random(-100, 100),
                translateY: anime.random(-100, 100),
                scale: [1, 0],
                opacity: [1, 0],
                duration: 1000,
                easing: 'easeOutQuad',
                complete: () => {
                    particle.remove();
                }
            });
        }
    }

    handleNavigation(event) {
        const href = event.target.getAttribute('href');
        
        // Add navigation animation
        anime({
            targets: event.target,
            scale: [1, 0.95, 1],
            duration: 200,
            easing: 'easeOutQuad'
        });

        // Handle navigation with smooth transition
        if (href && href !== '#') {
            event.preventDefault();
            this.navigateToPage(href);
        }
    }

    navigateToPage(href) {
        // Create transition effect
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            z-index: 10000;
            opacity: 0;
        `;
        
        document.body.appendChild(overlay);

        anime({
            targets: overlay,
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutQuad',
            complete: () => {
                window.location.href = href;
            }
        });
    }

    enterDigitalWorld() {
        const urlInput = document.getElementById('urlInput');
        const value = urlInput.value.toLowerCase();
        
        // Validate URL input
        if (value.includes('rakshyaai') || value.includes('rakshya')) {
            // Success animation
            this.showSuccessAnimation();
            
            // Navigate to digital universe after animation
            setTimeout(() => {
                this.navigateToPage('digital-universe.html');
            }, 2000);
        } else {
            // Error animation
            this.showErrorAnimation();
        }
    }

    showSuccessAnimation() {
        // Create success particles
        this.createSuccessBurst();
        
        // Animate URL input
        anime({
            targets: '.url-input',
            borderColor: '#68d391',
            boxShadow: '0 0 30px rgba(104, 211, 145, 0.5)',
            duration: 500,
            easing: 'easeOutQuad'
        });

        // Animate CTA button
        anime({
            targets: '.cta-button',
            scale: [1, 1.1, 1],
            backgroundColor: ['#ffd700', '#68d391', '#ffd700'],
            duration: 1000,
            easing: 'easeOutElastic(1, .8)'
        });
    }

    showErrorAnimation() {
        // Shake animation for incorrect input
        anime({
            targets: '.url-input-container',
            translateX: [0, -10, 10, -10, 10, 0],
            duration: 500,
            easing: 'easeOutQuad'
        });

        // Flash red
        anime({
            targets: '.url-input',
            borderColor: ['#ffd700', '#fc8181', '#ffd700'],
            duration: 1000,
            easing: 'easeOutQuad'
        });
    }

    createSuccessBurst() {
        const scene = document.querySelector('.hero-section');
        if (!scene) return;

        const colors = ['#68d391', '#ffd700', '#00d4ff'];
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particle.style.cssText = `
                position: absolute;
                width: 8px;
                height: 8px;
                background: ${color};
                border-radius: 50%;
                pointer-events: none;
                left: 50%;
                top: 50%;
                z-index: 1000;
            `;
            
            scene.appendChild(particle);

            anime({
                targets: particle,
                translateX: anime.random(-200, 200),
                translateY: anime.random(-200, 200),
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                duration: 2000,
                easing: 'easeOutQuad',
                complete: () => {
                    particle.remove();
                }
            });
        }
    }

    hideLoadingScreen() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loadingScreen');
            if (loadingScreen) {
                anime({
                    targets: loadingScreen,
                    opacity: [1, 0],
                    duration: 500,
                    easing: 'easeOutQuad',
                    complete: () => {
                        loadingScreen.style.display = 'none';
                    }
                });
            }
        }, 1500);
    }
}

// Global function for CTA button
function enterDigitalWorld() {
    if (window.cybersecAdventure) {
        window.cybersecAdventure.enterDigitalWorld();
    }
}

// Initialize the adventure when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.cybersecAdventure = new CybersecurityAdventure();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is hidden
        anime.running.forEach(animation => animation.pause());
    } else {
        // Resume animations when page is visible
        anime.running.forEach(animation => animation.play());
    }
});

// Handle resize events
window.addEventListener('resize', () => {
    // Update particle system if needed
    if (window.cybersecAdventure && window.cybersecAdventure.particleSystem) {
        window.cybersecAdventure.particleSystem.windowResized();
    }
});

// Smooth scrolling for any internal links
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

// Add keyboard navigation support
document.addEventListener('keydown', (event) => {
    // Enter key on URL input
    if (event.key === 'Enter' && event.target.id === 'urlInput') {
        enterDigitalWorld();
    }
    
    // Escape key to reset focus
    if (event.key === 'Escape') {
        document.activeElement.blur();
    }
});

// Performance monitoring
const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure') {
            console.log(`${entry.name}: ${entry.duration}ms`);
        }
    }
});

if (typeof PerformanceObserver !== 'undefined') {
    observer.observe({ entryTypes: ['measure'] });
}

// Mark performance milestones
performance.mark('app-start');
window.addEventListener('load', () => {
    performance.mark('app-loaded');
    performance.measure('load-time', 'app-start', 'app-loaded');
});