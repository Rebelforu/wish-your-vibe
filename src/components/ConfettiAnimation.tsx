import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  delay: number;
  size: number;
}

export const ConfettiAnimation = ({ isActive }: { isActive: boolean }) => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (isActive) {
      const colors = [
        'hsl(var(--celebration-pink))',
        'hsl(var(--celebration-purple))',
        'hsl(var(--celebration-blue))',
        'hsl(var(--celebration-yellow))',
        'hsl(var(--celebration-green))',
        'hsl(var(--celebration-orange))'
      ];

      const newConfetti = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 3,
        size: Math.random() * 8 + 4
      }));

      setConfetti(newConfetti);

      // Clear confetti after animation
      const timer = setTimeout(() => {
        setConfetti([]);
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isActive || confetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
          }}
        />
      ))}
    </div>
  );
};