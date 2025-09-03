import React from "react";
import { Button } from "@/components/ui/button";
import VerticalFeed from "./VerticalFeed";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: "1",
      name: "Swati",
      location: "Jaipur",
      achievement: "",
      quote:
        "I can proudly say that I am a pro, and I am a learner from Arushi Tailang ✨🫶🏼",
      rating: 5,
      image: "👩‍🦰",
      src: "/src/assets/testimonials/optimized/1.mp4",
      alt: "Swati Testimonial",
    },
    {
      id: "2",
      name: "Deepa",
      location: "Jaipur",
      achievement: "",
      quote: "Ma’am ne choti choti cheeze bhi bohot achhe se sikhaya hai 💫🌸",
      rating: 5,
      image: "👩‍🦱",
      src: "/src/assets/testimonials/optimized/2.mp4",
      alt: "Deepa Testimonial",
    },
    {
      id: "3",
      name: "Devyani",
      location: "Jaipur",
      achievement: "",
      quote:
        "I enjoyed a lot and it was my best experience. Arushi Di is the best! ✨💫",
      rating: 5,
      image: "👩",
      src: "/src/assets/testimonials/optimized/3.mp4",
      alt: "Devyani Testimonial",
    },
    {
      id: "4",
      name: "Isha",
      location: "Jaipur",
      achievement: "",
      quote:
        "Bohot achha makeup sikhaya mujhe. Mera best experience raha. Thankyou mam ❤️🌸",
      rating: 5,
      image: "👩‍🦳",
      src: "/src/assets/testimonials/optimized/4.mp4",
      alt: "Isha Testimonial",
    },
  ];

  const btsHighlights = [
    "Live makeup sessions",
    "One-on-one guidance",
    "Students practicing advanced techniques",
    "Business strategy workshops",
    "Graduation ceremony celebrations",
  ];

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/9172093433?text=Hi! I want to speak with successful students from your course",
      "_blank"
    );
  };

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Real Stories</span> from
            Real Students
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from women who transformed
            their lives in just 30 days
          </p>
        </div>

        {/* Video Testimonials Wall */}
        <div className="mb-16">
          <VerticalFeed videos={testimonials} />
        </div>

        {/* BTS Highlights */}
        <div className="bg-gradient-primary rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">
              Behind the Scenes: Your Learning Journey
            </h3>
            <p className="text-xl opacity-90">
              See what happens inside our intensive 30-day transformation
              program
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {btsHighlights.map((highlight, index) => (
              <div
                key={index}
                className="card-elegant bg-white/10 backdrop-blur-sm p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-3">🎬</div>
                <div className="text-sm">{highlight}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={openWhatsApp}
              className="btn-gold text-lg md:text-xl px-6 md:px-10 py-4 md:py-6"
            >
              Watch More Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
