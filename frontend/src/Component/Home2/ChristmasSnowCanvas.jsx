import { useEffect, useRef } from 'react';

/**
 * High-performance 2D Canvas Falling Snow Particle Engine
 * Creates realistic multi-layer depth with 120 snowflakes, soft horizontal drift, and wind physics.
 */
export default function ChristmasSnowCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate 120 snowflakes with varying size, speed, and opacity for 3D depth
    const flakes = Array.from({ length: 110 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.8 + 0.8,
      speedY: Math.random() * 1.2 + 0.5,
      speedX: Math.random() * 0.6 - 0.3,
      opacity: Math.random() * 0.7 + 0.3,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.02 + 0.005,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < flakes.length; i++) {
        const flake = flakes[i];
        flake.y += flake.speedY;
        flake.sway += flake.swaySpeed;
        flake.x += Math.sin(flake.sway) * 0.7 + flake.speedX;

        // Wrap around bottom
        if (flake.y > height + 5) {
          flake.y = -5;
          flake.x = Math.random() * width;
        }
        // Wrap around sides
        if (flake.x > width + 5) flake.x = -5;
        if (flake.x < -5) flake.x = width + 5;

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(186, 215, 240, ${flake.opacity * 0.85})`;
        ctx.shadowBlur = flake.radius > 2 ? 5 : 2;
        ctx.shadowColor = 'rgba(147, 197, 253, 0.5)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 w-full h-full"
      style={{ opacity: 0.85 }}
    />
  );
}
