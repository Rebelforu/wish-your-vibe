import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Gift, Heart } from "lucide-react";

interface NameInputProps {
  onNameSubmit: (name: string) => void;
}

export const NameInput = ({ onNameSubmit }: NameInputProps) => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setIsLoading(true);
      // Add a small delay for smooth transition
      setTimeout(() => {
        onNameSubmit(name.trim());
        setIsLoading(false);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating decoration elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 animate-float">
          <Gift className="w-8 h-8 text-celebration-pink opacity-60" />
        </div>
        <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="w-6 h-6 text-celebration-purple opacity-70" />
        </div>
        <div className="absolute bottom-40 left-32 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-10 h-10 text-celebration-blue opacity-50" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <Gift className="w-7 h-7 text-celebration-yellow opacity-60" />
        </div>
      </div>

      {/* Main content */}
      <div className="glass-card neon-border rounded-3xl mobile-card max-w-2xl w-full mobile-spacing text-center animate-bounce-in">
        <div className="mb-8">
          <h1 className="mobile-hero font-black party-text mb-4 animate-text-glow">
            🎉 Birthday Magic 🎉
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
            Enter your name to unlock your personalized birthday celebration!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="What's your name?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mobile-button text-xl sm:text-2xl text-center rounded-2xl border-2 glass-card neon-border placeholder:text-muted-foreground/60 focus:ring-4 focus:ring-primary/30 transition-all duration-300 animate-neon-pulse"
              disabled={isLoading}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-neon opacity-10 pointer-events-none animate-shimmer" />
          </div>

          <Button
            type="submit"
            disabled={!name.trim() || isLoading}
            className="btn-celebration mobile-button px-8 sm:px-12 font-bold rounded-2xl w-full md:w-auto animate-pulse-glow"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3" />
                Creating Magic...
              </>
            ) : (
              <>
                <Sparkles className="mr-3 h-6 w-6" />
                Start Celebration!
              </>
            )}
          </Button>
        </form>

        <div className="mt-8 text-sm text-muted-foreground/80">
          ✨ Get ready for the most amazing birthday wishes ever! ✨
        </div>
      </div>
    </div>
  );
};