import React from "react";
import { TrendingDown, TrendingUp } from "lucide-react";
import BeforeAfterImage from "@/components/BeforeAfterImage";

const ProblemsSection = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Stop Living{" "}
            <span className="text-gradient-primary">Someone Else's Dream</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Break free from dependency and financial insecurity. Your
            transformation starts here.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problem Side */}
          <div className="space-y-8">
            <div className="card-elegant p-8 border-l-4 border-destructive">
              <div className="flex items-center mb-4">
                <TrendingDown className="h-8 w-8 text-destructive mr-3" />
                <h3 className="text-2xl font-bold text-destructive">
                  The Struggle is Real
                </h3>
              </div>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-destructive mr-3">❌</span>
                  Dependent on others for financial security
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-3">❌</span>
                  Feeling stuck with no clear career path
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-3">❌</span>
                  Low confidence and self-worth
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-3">❌</span>
                  Dreaming of financial freedom but no skills
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-3">❌</span>
                  Watching others succeed while you're left behind
                </li>
              </ul>
            </div>
          </div>

          {/* Transformation Image */}
          <div className="relative">
            <BeforeAfterImage />
          </div>

          {/* Solution Side */}
          <div className="lg:col-span-2">
            <div className="card-elegant p-8 border-l-4 border-primary bg-gradient-primary text-white">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-white mr-3" />
                <h3 className="text-2xl font-bold">
                  Your New Reality in 30 Days
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-accent-glow mr-3">✨</span>
                    Financial independence through your own skills
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-glow mr-3">✨</span>
                    Booked solid with high-paying bridal clients
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-glow mr-3">✨</span>
                    Confidence that radiates in everything you do
                  </li>
                </ul>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-accent-glow mr-3">✨</span>
                    Earning ₹30k-₹1L per bridal event
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-glow mr-3">✨</span>
                    Building your dream beauty business
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-glow mr-3">✨</span>
                    Living life on YOUR terms
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
