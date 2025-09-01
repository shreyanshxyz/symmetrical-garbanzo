import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Clock,
  MessageCircle,
  Zap,
  CheckCircle,
  Gift,
  Star,
} from "lucide-react";

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/9172093433?text=Hi! I want to secure my Early Bird price of ₹50,000 for the makeup course",
      "_blank"
    );
  };

  const features = [
    "30-day intensive makeup & hairstyling course",
    "Professional certification upon completion",
    "Hands-on practice",
    "Business & marketing training included",
    "Instagram marketing masterclass",
    "AI tools for beauty business",
  ];

  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Secure Your Future</span>{" "}
            Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Limited seats available. Don't let this opportunity slip away.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-gradient-primary rounded-3xl p-8 text-white mb-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Clock className="h-12 w-12 mx-auto mb-4 animate-pulse" />
            <h3 className="text-3xl font-bold mb-2">
              ⚡ EARLY BIRD OFFER ENDS IN:
            </h3>
            <p className="text-lg opacity-90">
              Limited time pricing - Act fast!
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="card-elegant bg-white/20 backdrop-blur-sm p-4 text-center"
              >
                <div className="text-3xl font-bold text-accent-glow">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm uppercase tracking-wide opacity-90">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Regular Price */}
          <div className="card-elegant p-8 relative">
            <div className="text-center mb-6">
              <div className="text-lg text-muted-foreground mb-2">
                Regular Price
              </div>
              <div className="text-4xl font-bold text-muted-foreground line-through">
                ₹55,000
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Available after Early Bird ends
              </div>
            </div>
            <div className="opacity-50">
              <ul className="space-y-3 mb-8">
                {features.slice(0, 5).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-muted-foreground mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button disabled className="w-full py-6 text-lg">
                Not Available
              </Button>
            </div>
          </div>

          {/* Early Bird Price - Featured */}
          <div className="card-elegant p-8 relative bg-gradient-primary text-white border-4 border-accent animate-glow">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-bold text-sm flex items-center">
                <Star className="h-4 w-4 mr-1" />
                MOST POPULAR
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="text-lg opacity-90 mb-2">Early Bird Special</div>
              <div className="text-6xl font-bold text-accent-glow">₹50,000</div>
              <div className="text-lg opacity-90 mt-1">
                Save ₹5,000 - Limited Time!
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-glow mr-3 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              <Button
                onClick={openWhatsApp}
                className="btn-gold w-full py-6 text-lg group"
              >
                <MessageCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Book Your Seat Now - ₹50,000
                <Zap className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              </Button>

              <div className="text-center text-sm opacity-90">
                <Gift className="h-4 w-4 inline mr-1" />
                Includes ₹30,000 worth of bonuses
              </div>
            </div>
          </div>
        </div>

        {/* Urgency Banners */}
        <div className="mt-16 space-y-4">
          <div className="bg-destructive text-destructive-foreground rounded-2xl p-6 text-center animate-pulse">
            <div className="text-2xl font-bold mb-2">🔥 ONLY 3 SEATS LEFT!</div>
            <div className="text-lg">
              September batch starts soon - Don't miss out!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
