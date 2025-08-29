import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  delay: number;
  size: number;
  shape: 'circle' | 'square' | 'triangle';
  duration: number;
}

export const ConfettiAnimation = ({ isActive }: { isActive: boolean }) => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

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
        'hsl(var(--celebration-coral))',
        'hsl(var(--celebration-orange))',
        'hsl(var(--celebration-green))'
      ];

      const shapes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];

      const newConfetti = Array.from({ length: 80 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
        size: Math.random() * 12 + 6,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        duration: Math.random() * 2 + 3
      }));

      setConfetti(newConfetti);

      // Clear confetti after animation
      const timer = setTimeout(() => {
        setConfetti([]);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isActive || confetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className={`absolute animate-confetti ${
            piece.shape === 'circle' ? 'rounded-full' : 
            piece.shape === 'triangle' ? 'triangle' : 'rounded-sm'
          }`}
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            boxShadow: `0 0 ${piece.size}px ${piece.color}50`,
            clipPath: piece.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : undefined
          }}
        />
      ))}
    </div>
  );
};