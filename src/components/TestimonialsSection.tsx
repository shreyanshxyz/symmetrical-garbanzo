import React from "react";
import { Button } from "@/components/ui/button";
import VerticalFeed from "./VerticalFeed";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: "1",
      name: "Priya Sharma",
      location: "Mumbai",
      achievement: "Booked 3 brides in her first month",
      quote:
        "I was completely dependent on my family. Now I earn more than my husband! This course changed my life.",
      rating: 5,
      image: "👩‍🦰",
      src: "/src/assets/testimonials/optimized/1.mp4",
      alt: "Priya Sharma Testimonial",
    },
    {
      id: "2",
      name: "Anjali Gupta",
      location: "Delhi",
      achievement: "Quit her job & now earns 80k/month",
      quote:
        "The business training was game-changing. I learned not just makeup but how to run a profitable business.",
      rating: 5,
      image: "👩‍🦱",
      src: "/src/assets/testimonials/optimized/2.mp4",
      alt: "Anjali Gupta Testimonial",
    },
    {
      id: "3",
      name: "Kavya Patel",
      location: "Ahmedabad",
      achievement: "Built 6-figure makeup business",
      quote:
        "From housewife to successful entrepreneur in 6 months. The support and training is incredible!",
      rating: 5,
      image: "👩",
      src: "/src/assets/testimonials/optimized/3.mp4",
      alt: "Kavya Patel Testimonial",
    },
    {
      id: "4",
      name: "Neha Singh",
      location: "Jaipur",
      achievement: "12 brides booked in 2 months",
      quote:
        "The hands-on practice and real client experience during the course made all the difference.",
      rating: 5,
      image: "👩‍🦳",
      src: "/src/assets/testimonials/optimized/4.mp4",
      alt: "Neha Singh Testimonial",
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
              className="btn-gold text-xl px-10 py-6"
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
