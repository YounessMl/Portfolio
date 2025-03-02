import React, { useRef, useEffect } from 'react';

interface Particle {
x: number;
y: number;
size: number;
speedX: number;
speedY: number;
color: string;
}

const ParticleBackground: React.FC = () => {
const canvasRef = useRef<HTMLCanvasElement>(null);
const particles = useRef<Particle[]>([]);
const animationFrameId = useRef<number | null>(null);

useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const particleCount = 100;

    canvas.width = width;
    canvas.height = height;

    const createParticles = () => {
    particles.current = [];
    for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 3 + 1;
        const speedX = Math.random() * 2 - 1;
        const speedY = Math.random() * 2 - 1;
        const color = `rgba(108, 99, 255, ${Math.random() * 0.5})`;

        particles.current.push({ x, y, size, speedX, speedY, color });
    }
    };

    const updateParticle = (particle: Particle) => {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x > width || particle.x < 0) {
        particle.speedX = -particle.speedX;
    }

    if (particle.y > height || particle.y < 0) {
        particle.speedY = -particle.speedY;
    }
    };

    const drawParticle = (particle: Particle) => {
    if (!ctx) return;
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    };

    const drawLines = () => {
    if (!ctx) return;
    for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
        const dx = particles.current[i].x - particles.current[j].x;
        const dy = particles.current[i].y - particles.current[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(108, 99, 255, ${0.2 - distance / 750})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles.current[i].x, particles.current[i].y);
            ctx.lineTo(particles.current[j].x, particles.current[j].y);
            ctx.stroke();
        }
        }
    }
    };

    const animate = () => {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    particles.current.forEach((particle) => {
        updateParticle(particle);
        drawParticle(particle);
    });

    drawLines();

    animationFrameId.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    createParticles();
    };

    createParticles();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
    if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
    }
    window.removeEventListener('resize', handleResize);
    };
}, []);

return (
    <canvas 
    ref={canvasRef} 
    className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0 
    }}
    />
);
};

export default ParticleBackground;

