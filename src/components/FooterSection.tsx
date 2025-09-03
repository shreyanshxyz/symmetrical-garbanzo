import React from "react";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  MessageCircle,
  Clock,
  Star,
} from "lucide-react";

const FooterSection = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/9172093433?text=Hi! I want to book my seat for the Basic to Advanced Makeup Course",
      "_blank"
    );
  };

  const openMaps = () => {
    window.open("https://maps.app.goo.gl/PKKChUcSf1MyHSL47", "_blank");
  };

  return (
    <footer className="bg-gradient-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Academy Info */}
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-6 text-accent-glow">
                ✨ Makeup Mastery Academy
              </h3>
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                Transforming lives through professional makeup artistry. From
                dependent to independent in just 30 days.
              </p>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Star className="h-5 w-5 text-accent fill-current" />
                <Star className="h-5 w-5 text-accent fill-current" />
                <Star className="h-5 w-5 text-accent fill-current" />
                <Star className="h-5 w-5 text-accent fill-current" />
                <Star className="h-5 w-5 text-accent fill-current" />
                <span className="ml-2 text-sm opacity-90">
                  4.9/5 from 50+ students
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="h-5 w-5 text-accent-glow" />
                  <span>Jagatpura, Jaipur, Rajasthan</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5 text-accent-glow" />
                  <a
                    href="tel:9172093433"
                    className="hover:text-accent-glow transition-colors"
                  >
                    +91 91720-93433
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-5 w-5 text-accent-glow" />
                  <a
                    href="mailto:makeupbyarushii@gmail.com"
                    className="hover:text-accent-glow transition-colors"
                  >
                    makeupbyarushii@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Clock className="h-5 w-5 text-accent-glow" />
                  <span>Mon-Sat: 9 AM - 6 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center lg:text-right">
              <h4 className="text-2xl font-bold mb-6">Quick Actions</h4>
              <div className="space-y-4">
                <div>
                  <Button
                    onClick={openWhatsApp}
                    className="btn-gold w-full max-w-xs"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={openMaps}
                    variant="outline"
                    className="w-full max-w-xs border-white bg-white/20 text-white"
                  >
                    <MapPin className="mr-2 h-5 w-5" />
                    Get Directions
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://instagram.com/makeupmastery",
                        "_blank"
                      )
                    }
                    variant="outline"
                    className="w-full max-w-xs border-white bg-white/20 text-white"
                  >
                    <Instagram className="mr-2 h-5 w-5" />
                    Follow on Instagram
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <h4 className="text-2xl font-bold text-center mb-6">
                Find Our Academy
              </h4>
              <div className="bg-white/20 rounded-2xl p-8 text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-accent-glow" />
                <h5 className="text-xl font-semibold mb-2">
                  Makeup Mastery Academy
                </h5>
                <p className="text-lg opacity-90 mb-4">
                  Premium Location in Jagatpura, Jaipur
                  <br />
                  Easy access by bus & private transport
                </p>
                <Button onClick={openMaps} className="btn-gold">
                  <MapPin className="mr-2 h-5 w-5" />
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold mb-4 text-accent-glow">
                Your Future Starts Now!
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Don't let another day pass being dependent on others. Take
                control of your financial future today.
              </p>
              <Button
                onClick={openWhatsApp}
                className="btn-gold text-lg md:text-xl px-6 md:px-10 py-4 md:py-6 animate-pulse hover:animate-none w-full md:w-auto text-wrap"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Book Your Seat - ₹50,000 Only
              </Button>
              <div className="mt-4 text-sm opacity-75">
                🔥 Early Bird Offer Ending Soon | Limited Seats Available
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-white/20">
            <p className="opacity-75">
              © 2025 Makeup By Arushi. All rights reserved. |
              <span className="text-accent-glow">
                {" "}
                Transform Your Life in 30 Days
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
