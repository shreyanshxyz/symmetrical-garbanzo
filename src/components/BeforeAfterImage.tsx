import React from "react";
import { ArrowRight } from "lucide-react";
import beforeImage from "@/assets/before.JPG";
import afterImage from "@/assets/after.JPG";

const BeforeAfterImage = () => {
  return (
    <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg p-4">
      <div className="flex items-center justify-center gap-4">
        <div className="w-full">
          <img
            src={beforeImage}
            alt="Before"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <ArrowRight className="h-12 w-12 text-primary animate-pulse flex-shrink-0" />
        <div className="w-full">
          <img
            src={afterImage}
            alt="After"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterImage;
