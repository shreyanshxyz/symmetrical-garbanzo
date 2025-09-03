import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-bg-new.png";

const HeroSection = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/9172093433?text=Hi! I want to book my seat for the Basic to Advanced Makeup Course",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Professional makeup class in session"
          className="w-full h-full object-cover object-[20%_40%] md:object-[50%_35%] lg:object-[50%_30%] xl:object-[50%_25%]"
        />
        <div className="video-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-white leading-tight">
            From{" "}
            <span className="text-gradient-gold">Dependent & Insecure</span>
            <br />→ To{" "}
            <span className="text-gradient-primary">
              Financially Independent
            </span>
            <br />
            <span className="text-accent-glow">Makeup Artist in 30 Days</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
            Learn pro makeup + hairstyling + business skills and build your
            freedom career now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
            <Button
              onClick={openWhatsApp}
              className="btn-hero group text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">
                Chat on WhatsApp & Book Your Seat
              </span>
              <span className="sm:hidden">Book Your Seat</span>
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="text-white/80 text-sm sm:text-base md:text-lg text-center sm:text-left">
              <div className="font-semibold">🔥 Limited Seats Available</div>
              <div className="text-accent-glow">
                September Batch Starts Soon!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-16 sm:top-20 left-4 sm:left-6 md:left-10 animate-float hidden sm:block">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full blur-xl"></div>
      </div>
      <div
        className="absolute bottom-16 sm:bottom-20 right-4 sm:right-6 md:right-10 animate-float hidden sm:block"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-accent/20 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
