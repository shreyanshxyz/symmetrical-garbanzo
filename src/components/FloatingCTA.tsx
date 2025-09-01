import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/9172093433?text=Hi! I want to book my seat for the Basic to Advanced Makeup Course",
      "_blank"
    );
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (isDismissed || !isVisible) return null;

  return (
    <>
      {/* Mobile Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button
          onClick={openWhatsApp}
          className="btn-hero shadow-2xl animate-bounce hover:animate-none group relative"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-2 -right-2 bg-destructive text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            !
          </span>
        </button>
      </div>

      {/* Desktop Floating Widget */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <div className="bg-gradient-primary text-white rounded-2xl shadow-2xl p-6 max-w-sm animate-slide-up">
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute -top-2 -right-2 bg-white text-primary rounded-full w-8 h-8 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Content */}
          <div className="mb-4">
            <div className="text-lg font-bold mb-2 text-accent-glow">
              🔥 Last 3 Seats Available!
            </div>
            <div className="text-sm opacity-90 mb-3">
              Early Bird: ₹50,000 (Save ₹5,000)
            </div>
            <div className="text-xs opacity-75">
              September batch starts soon!
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={openWhatsApp}
            className="flex items-center btn-gold w-full py-3 text-sm font-semibold group"
          >
            <MessageCircle className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            Book Your Seat Now
          </button>

          {/* Trust Indicators */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs opacity-75">
            <span>⭐ 4.9/5 Rating</span>
            <span>•</span>
            <span>50+ Students</span>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-gradient-primary text-white p-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-bold text-accent-glow">
              Early Bird: ₹50,000
            </div>
            <div className="text-xs opacity-90">
              3 seats left • Ends in 2 days
            </div>
          </div>
          <button
            onClick={openWhatsApp}
            className="btn-gold px-6 py-3 text-sm font-semibold"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA;
