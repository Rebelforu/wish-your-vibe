import { useState } from "react";
import { Heart, Sparkles, Gift, Cake, Star } from "lucide-react";

interface WishCardProps {
  wish: string;
  gradient: string;
  icon: React.ReactNode;
  delay?: number;
}

export const WishCard = ({ wish, gradient, icon, delay = 0 }: WishCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div 
      className="wish-card rounded-2xl p-6 cursor-pointer group animate-bounce-in"
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => setIsLiked(!isLiked)}
    >
      <div className={`absolute inset-0 rounded-2xl opacity-20 ${gradient}`} />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl">{icon}</div>
          <button 
            className={`transition-all duration-300 ${
              isLiked ? 'text-celebration-pink scale-125' : 'text-muted-foreground hover:text-celebration-pink hover:scale-110'
            }`}
          >
            <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>
        
        <p className="text-lg font-medium leading-relaxed text-foreground">
          {wish}
        </p>
        
        <div className="mt-4 flex justify-center">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-4 h-4 text-celebration-yellow fill-current opacity-80" 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const generateWishes = (name: string) => [
  {
    wish: `Happy Birthday ${name}! 🎂 May your special day be filled with endless joy, laughter, and all your favorite things. You deserve all the happiness in the world!`,
    gradient: "bg-gradient-primary",
    icon: <Cake className="w-8 h-8 text-celebration-pink" />
  },
  {
    wish: `${name}, today is YOUR day to shine! ✨ May this new year of life bring you amazing adventures, beautiful memories, and dreams that come true!`,
    gradient: "bg-gradient-secondary",
    icon: <Sparkles className="w-8 h-8 text-celebration-purple" />
  },
  {
    wish: `Sending you the biggest birthday hugs, ${name}! 🤗 May your heart be full of love, your mind full of wonderful thoughts, and your year ahead full of blessings!`,
    gradient: "bg-gradient-accent",
    icon: <Heart className="w-8 h-8 text-celebration-pink" />
  },
  {
    wish: `It's party time, ${name}! 🎉 Blow out those candles and make the most amazing wish because you deserve every bit of magic life has to offer!`,
    gradient: "bg-gradient-success",
    icon: <Gift className="w-8 h-8 text-celebration-green" />
  },
  {
    wish: `${name}, you're absolutely incredible! 🌟 On your birthday, I hope you feel as special and loved as you truly are. Here's to another year of being awesome!`,
    gradient: "bg-gradient-primary",
    icon: <Star className="w-8 h-8 text-celebration-yellow" />
  },
  {
    wish: `Birthday magic is in the air for ${name}! ✨ May this day sparkle with joy, bubble with laughter, and glow with all the love surrounding you!`,
    gradient: "bg-gradient-secondary",
    icon: <Sparkles className="w-8 h-8 text-celebration-blue" />
  }
];