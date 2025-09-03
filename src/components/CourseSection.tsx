import React from "react";
import { CheckCircle, Gift, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image1 from "@/assets/course/1.jpg";
import Image2 from "@/assets/course/2.jpg";
import Image3 from "@/assets/course/3.jpg";

const CourseSection = () => {
  const roadmap = [
    {
      week: "Week 1",
      title: "Foundation & Basics",
      description: "Skin prep, color theory, basic techniques",
      image: "🎨",
    },
    {
      week: "Week 2",
      title: "Advanced Techniques",
      description: "Contouring, highlighting, eye makeup mastery",
      image: "✨",
    },
    {
      week: "Week 3",
      title: "Bridal & Party Looks",
      description: "Complete bridal makeup, party & occasion looks",
      image: "👰",
    },
    {
      week: "Week 4",
      title: "Business & Launch",
      description: "Pricing, client management, social media marketing",
      image: "💼",
    },
  ];

  const bonuses = [
    {
      title: "Professional Hairstyling Course",
      value: "₹15,000",
      description: "Complete bridal hairstyling techniques",
    },
    {
      title: "Instagram Marketing Masterclass",
      value: "₹8,000",
      description: "Build your online presence & get clients",
    },
    {
      title: "Bridal Styling",
      value: "₹5,000",
      description:
        "Learn bridal styling techniques from the best in the industry",
    },
    {
      title: "Premium Makeup Kit & Goodie Bag",
      value: "₹2,000",
      description: "Professional tools to start immediately",
    },
  ];

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/9172093433?text=Hi! I want to know more about the course curriculum and bonuses",
      "_blank"
    );
  };

  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your{" "}
            <span className="text-gradient-primary">30-Day Success Ladder</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven step-by-step system that transforms complete beginners into
            professional makeup artists
          </p>
        </div>

        {/* Course Roadmap */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-4 gap-8">
            {roadmap.map((week, index) => (
              <div
                key={index}
                className="card-elegant p-6 text-center relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-6xl mb-4">{week.image}</div>
                <div className="text-2xl font-bold text-primary mb-2">
                  {week.week}
                </div>
                <h3 className="text-xl font-semibold mb-3">{week.title}</h3>
                <p className="text-muted-foreground">{week.description}</p>

                {/* Connector Arrow */}
                {index < roadmap.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-primary"></div>
                    <div className="w-0 h-0 border-l-4 border-l-primary border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Course Images */}
        <div className="grid lg:grid-cols-3 gap-16 items-center mb-20">
          <div>
            <img
              src={Image1}
              alt="Professional makeup course materials and tools"
              className="w-full h-[400px] object-cover rounded-2xl shadow-elegant"
            />
          </div>
          <div>
            <img
              src={Image2}
              alt="Beautiful bridal makeup portfolio showcase"
              className="w-full h-[400px] object-cover rounded-2xl shadow-elegant"
            />
          </div>
          <div>
            <img
              src={Image3}
              alt="Behind the scenes from one of our classes"
              className="w-full h-[400px] object-cover rounded-2xl shadow-elegant"
            />
          </div>
        </div>

        {/* Bonuses Section */}
        <div className="bg-gradient-primary rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <Gift className="h-16 w-16 mx-auto mb-6 text-accent-glow animate-float" />
            <h3 className="text-4xl font-bold mb-4">
              EXCLUSIVE BONUSES Worth ₹30,000
            </h3>
            <p className="text-xl opacity-90">
              Get everything you need to launch your successful makeup business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="card-elegant bg-white/10 backdrop-blur-sm p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-semibold">{bonus.title}</h4>
                  <span className="text-accent-glow font-bold text-lg">
                    {bonus.value}
                  </span>
                </div>
                <p className="text-sm opacity-90">{bonus.description}</p>
                <CheckCircle className="h-6 w-6 text-accent-glow mt-3" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold mb-4">
              Total Value:{" "}
              <span className="text-accent-glow">₹30,000 FREE!</span>
            </div>
            <Button
              onClick={openWhatsApp}
              className="btn-gold text-lg md:text-xl px-6 md:px-10 py-4 md:py-6"
            >
              <Gift className="mr-3 h-6 w-6" />
              Claim Your Bonuses Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
