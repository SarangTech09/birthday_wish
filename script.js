const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create Particle Class
class Particle {
    constructor(x, y, color, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;

        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }
}

// Generate Random Particles
function createParticles() {
    particles = [];
    for (let i = 0; i < 200; i++) {
        const size = Math.random() * 5 + 2;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        const speedX = (Math.random() - 0.5) * 2;
        const speedY = Math.random() * 2 + 1;

        particles.push(new Particle(x, y, color, size, speedX, speedY));
    }
}

// Animate Particles
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
        particle.draw();
        particle.update();
    });

    requestAnimationFrame(animate);
}

// Surprise Button Click Event
document.getElementById('surpriseButton').addEventListener('click', () => {
    createParticles();
    animate();
    alert('Enjoy your birthday surprise! 🎉');
});
