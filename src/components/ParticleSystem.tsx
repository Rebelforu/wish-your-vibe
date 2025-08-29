import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
}

export const ParticleSystem = ({ isActive }: { isActive: boolean }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (isActive) {
      const colors = [
        'hsl(var(--celebration-pink))',
        'hsl(var(--celebration-purple))',
        'hsl(var(--celebration-blue))',
        'hsl(var(--celebration-cyan))',
        'hsl(var(--celebration-yellow))',
        'hsl(var(--celebration-lime))',
        'hsl(var(--celebration-magenta))',
        'hsl(var(--celebration-coral))'
      ];

      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 4
      }));

      setParticles(newParticles);

      const timer = setTimeout(() => {
        setParticles([]);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isActive || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle animate-particle-float"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))}
    </div>
  );
};