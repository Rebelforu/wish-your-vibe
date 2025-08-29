import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { WishCard, generateWishes } from "./WishCard";
import { ConfettiAnimation } from "./ConfettiAnimation";
import { ParticleSystem } from "./ParticleSystem";
import { Share2, RefreshCw, Sparkles, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import celebrationBg from "@/assets/celebration-bg.jpg";

interface CelebrationPageProps {
  name: string;
  onBack: () => void;
}

export const CelebrationPage = ({ name, onBack }: CelebrationPageProps) => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [showParticles, setShowParticles] = useState(true);
  const [visibleWishes, setVisibleWishes] = useState(4);
  const [wishes] = useState(() => generateWishes(name));

  useEffect(() => {
    // Show success toast
    toast.success(`🎉 Happy Birthday ${name}! Your celebration is ready!`, {
      duration: 4000,
    });
  }, [name]);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `🎂 ${name}'s Birthday Celebration!`,
          text: `Join me in celebrating ${name}'s special day! 🎉`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("🔗 Link copied to clipboard!");
      }
    } catch (error) {
      toast.error("Couldn't share right now, but the party continues! 🎉");
    }
  };

  const triggerConfetti = () => {
    setShowConfetti(false);
    setShowParticles(false);
    setTimeout(() => {
      setShowConfetti(true);
      setShowParticles(true);
    }, 100);
    toast.success("🎊 Epic celebration mode activated!");
  };

  const showMoreWishes = () => {
    setVisibleWishes(prev => Math.min(prev + 4, wishes.length));
    toast.success("✨ More birthday magic unlocked!");
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${celebrationBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/60" />
      
      <ConfettiAnimation isActive={showConfetti} />
      <ParticleSystem isActive={showParticles} />

      <div className="relative z-10 container mx-auto mobile-spacing py-6 sm:py-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <Button
            onClick={onBack}
            variant="outline"
            className="mb-6 glass-card neon-border border-2 hover:scale-105 transition-all duration-300 animate-neon-pulse"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Start Over
          </Button>

          <h1 className="mobile-hero font-black party-text mb-4 animate-bounce-in animate-text-glow">
            Happy Birthday {name}! 🎂
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mb-8">
            Your personalized birthday celebration awaits! ✨
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap mobile-gap justify-center">
            <Button
              onClick={triggerConfetti}
              className="btn-celebration mobile-button px-6 sm:px-8"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Epic Celebration!
            </Button>
            
            <Button
              onClick={handleShare}
              variant="outline"
              className="glass-card neon-border border-2 hover:scale-105 transition-all duration-300 mobile-button px-6 sm:px-8 animate-neon-pulse"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share the Joy
            </Button>
          </div>
        </div>

        {/* Birthday wishes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mobile-gap mb-8 sm:mb-12">
          {wishes.slice(0, visibleWishes).map((wish, index) => (
            <WishCard
              key={index}
              wish={wish.wish}
              gradient={wish.gradient}
              icon={wish.icon}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Show more wishes button */}
        {visibleWishes < wishes.length && (
          <div className="text-center">
            <Button
              onClick={showMoreWishes}
              className="btn-celebration text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 animate-pulse-glow"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Unlock More Wishes! ({wishes.length - visibleWishes} remaining)
            </Button>
          </div>
        )}

        {/* Footer message */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="glass-card neon-border rounded-2xl mobile-card max-w-2xl mx-auto animate-pulse-glow">
            <h2 className="text-2xl sm:text-3xl font-bold party-text mb-4 animate-text-glow">
              🌟 You're Absolutely Amazing! 🌟
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              {name}, we hope your special day is filled with love, laughter, and all your heart desires. 
              You deserve every bit of happiness and more! Keep shining bright! ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};