import React, { useEffect, useRef } from 'react';

interface FlowerShowerProps {
  intensity?: 'normal' | 'burst';
}

export const FlowerShower: React.FC<FlowerShowerProps> = ({ intensity = 'normal' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    interface Petal {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      rotation: number;
      rotationSpeed: number;
      swayOffset: number;
      opacity: number;
      type: 'jasmine' | 'rose' | 'gold';
    }

    const isMobile = width < 768;
    const baseCount = isMobile ? 14 : 24;
    const count = intensity === 'burst' ? baseCount + 14 : baseCount;
    const petals: Petal[] = [];

    for (let i = 0; i < count; i++) {
      const rand = Math.random();
      const type: Petal['type'] = rand < 0.55 ? 'jasmine' : rand < 0.82 ? 'rose' : 'gold';
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: type === 'gold' ? Math.random() * 3 + 2 : Math.random() * 6 + 5,
        speedY: Math.random() * 0.55 + 0.3,
        speedX: (Math.random() - 0.5) * 0.35,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.012,
        swayOffset: Math.random() * Math.PI * 2,
        opacity: type === 'gold' ? Math.random() * 0.45 + 0.2 : Math.random() * 0.55 + 0.3,
        type,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.008 + p.swayOffset) * 0.4 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 24) {
          p.y = -24;
          p.x = Math.random() * width;
        }
        if (p.x > width + 24) p.x = -24;
        if (p.x < -24) p.x = width + 24;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'jasmine') {
          // Soft cream-white Jasmine petal
          ctx.fillStyle = '#FFFDF7';
          ctx.strokeStyle = '#E6D7BE';
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.52, p.size * 1.05, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Subtle calyx tip
          ctx.fillStyle = '#9BB380';
          ctx.beginPath();
          ctx.arc(0, p.size * 0.9, p.size * 0.18, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'rose') {
          // Soft blush/rose petal as seen in sampleUI.png
          ctx.fillStyle = '#DF8B96';
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(p.size * 0.85, -p.size * 0.5, p.size * 0.75, p.size * 0.6, 0, p.size);
          ctx.bezierCurveTo(-p.size * 0.75, p.size * 0.6, -p.size * 0.85, -p.size * 0.5, 0, -p.size);
          ctx.fill();
        } else {
          // Subtle antique gold dust fleck
          ctx.fillStyle = '#B38A45';
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.45, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
      aria-hidden="true"
    />
  );
};
