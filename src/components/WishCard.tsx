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
      className="wish-card neon-border rounded-2xl mobile-card cursor-pointer group animate-bounce-in"
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => setIsLiked(!isLiked)}
    >
      <div className={`absolute inset-0 rounded-2xl opacity-20 ${gradient}`} />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl sm:text-3xl animate-float">{icon}</div>
          <button 
            className={`transition-all duration-300 ${
              isLiked ? 'text-celebration-pink scale-125 animate-heart-beat' : 'text-muted-foreground hover:text-celebration-pink hover:scale-110'
            }`}
          >
            <Heart className={`w-5 h-5 sm:w-6 sm:h-6 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>
        
        <p className="text-base sm:text-lg font-medium leading-relaxed text-foreground">
          {wish}
        </p>
        
        <div className="mt-4 flex justify-center">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-3 h-3 sm:w-4 sm:h-4 text-celebration-yellow fill-current opacity-80 animate-sparkle" 
                style={{ animationDelay: `${i * 0.2}s` }}
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
    gradient: "bg-gradient-neon",
    icon: <Gift className="w-8 h-8 text-celebration-green" />
  },
  {
    wish: `${name}, you're absolutely incredible! 🌟 On your birthday, I hope you feel as special and loved as you truly are. Here's to another year of being awesome!`,
    gradient: "bg-gradient-rainbow",
    icon: <Star className="w-8 h-8 text-celebration-yellow" />
  },
  {
    wish: `Birthday magic is in the air for ${name}! ✨ May this day sparkle with joy, bubble with laughter, and glow with all the love surrounding you!`,
    gradient: "bg-gradient-secondary",
    icon: <Sparkles className="w-8 h-8 text-celebration-blue" />
  },
  {
    wish: `Hey ${name}, it's time to celebrate YOU! 🥳 Another year older, another year bolder, another year of being absolutely amazing! Let's make this birthday unforgettable!`,
    gradient: "bg-gradient-primary",
    icon: <Gift className="w-8 h-8 text-celebration-magenta" />
  },
  {
    wish: `${name}, your birthday is like a personal holiday for everyone who loves you! 💖 May this year bring you endless opportunities, incredible adventures, and pure happiness!`,
    gradient: "bg-gradient-accent",
    icon: <Heart className="w-8 h-8 text-celebration-coral" />
  },
  {
    wish: `Cheers to ${name} on their special day! 🍰 May your birthday cake be sweet, your presents be perfect, and your year ahead be absolutely phenomenal!`,
    gradient: "bg-gradient-neon",
    icon: <Cake className="w-8 h-8 text-celebration-cyan" />
  },
  {
    wish: `${name}, you light up every room you enter! 💫 On your birthday, may that light shine even brighter and illuminate all the wonderful things coming your way!`,
    gradient: "bg-gradient-rainbow",
    icon: <Sparkles className="w-8 h-8 text-celebration-lime" />
  },
  {
    wish: `Happy Birthday to the most fantastic ${name}! 🎊 May your day be filled with surprise parties, unexpected gifts, and moments that make your heart soar!`,
    gradient: "bg-gradient-secondary",
    icon: <Star className="w-8 h-8 text-celebration-orange" />
  },
  {
    wish: `${name}, birthdays are nature's way of telling us to eat more cake! 🧁 Hope your special day is as sweet as you are and twice as fun!`,
    gradient: "bg-gradient-primary",
    icon: <Cake className="w-8 h-8 text-celebration-pink" />
  },
  {
    wish: `To the incredible ${name} - may your birthday be the start of a year filled with good luck, good health, and much happiness! 🌈 You deserve the world!`,
    gradient: "bg-gradient-accent",
    icon: <Heart className="w-8 h-8 text-celebration-purple" />
  },
  {
    wish: `${name}, another year around the sun means another year of being absolutely wonderful! 🌟 May your birthday wishes all come true in the most magical ways!`,
    gradient: "bg-gradient-neon",
    icon: <Sparkles className="w-8 h-8 text-celebration-blue" />
  },
  {
    wish: `Celebrating ${name} today and always! 🎈 Your birthday is the perfect excuse to remind you how special you are and how grateful we are to know you!`,
    gradient: "bg-gradient-rainbow",
    icon: <Gift className="w-8 h-8 text-celebration-yellow" />
  }
];