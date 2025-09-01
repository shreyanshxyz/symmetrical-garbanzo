import React from "react";
import {
  TrendingUp,
  Star,
  DollarSign,
  Users,
  Calendar,
  Award,
} from "lucide-react";
import earnedImage from "@/assets/earned_3.jpg";
import VerticalFeed from "./VerticalFeed";

const OutcomesSection = () => {
  const outcomes = [
    {
      icon: Calendar,
      stat: "30 Days",
      description: "To Launch Business",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      stat: "₹50k-₹1L+",
      description: "Monthly Income",
      color: "text-accent-glow",
    },
    {
      icon: Users,
      stat: "50+",
      description: "Students Transformed",
      color: "text-primary-glow",
    },
    {
      icon: Star,
      stat: "4.9/5",
      description: "Student Rating",
      color: "text-accent",
    },
  ];

  const btsVideos = [
    {
      id: "bts-1",
      name: "Live Makeup Session",
      location: "Course Studio",
      achievement: "Professional Training",
      quote:
        "Watch our expert instructors demonstrate advanced makeup techniques used in professional bridal sessions.",
      src: "/src/assets/bts/optimized/1.mp4",
      alt: "Behind the scenes makeup training session",
    },
    {
      id: "bts-2",
      name: "Student Practice",
      location: "Training Lab",
      achievement: "Hands-on Learning",
      quote:
        "See our students practicing on real clients under expert supervision during intensive training.",
      src: "/src/assets/bts/optimized/2.mp4",
      alt: "Students practicing makeup techniques",
    },
    {
      id: "bts-3",
      name: "Business Workshop",
      location: "Strategy Session",
      achievement: "Entrepreneur Training",
      quote:
        "Learn how we transform housewives into successful business owners through comprehensive business training.",
      src: "/src/assets/bts/optimized/3.mp4",
      alt: "Business strategy and entrepreneurship training",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-gradient-primary">Measurable Results</span>{" "}
            That Speak
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our students don't just learn makeup - they build thriving
            businesses and transform their lives completely.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-16">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="card-elegant p-4 md:p-6 text-center hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <outcome.icon
                  className={`h-8 w-8 md:h-12 md:w-12 ${outcome.color} mx-auto mb-3 md:mb-4 animate-float`}
                />
                <div
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold ${outcome.color} mb-2`}
                >
                  {outcome.stat}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {outcome.description}
                </div>
              </div>
            ))}
          </div>

          {/* Success Story Image */}
          <div className="relative order-first lg:order-last">
            <img
              src={earnedImage}
              alt="Successful makeup artist student showing her earnings"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:right-8 text-white">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                "I earned ₹45,000 in my first month!"
              </div>
              <div className="text-sm sm:text-base lg:text-lg opacity-90">
                - Priya Sharma, Course Graduate
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Ticker */}
        <div className="bg-gradient-primary rounded-2xl p-4 md:p-8 text-white overflow-hidden">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Real Student Success Stories
            </h3>
            <p className="text-base md:text-lg opacity-90">
              See what our graduates achieve in their first 30 days
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="card-elegant bg-white/10 backdrop-blur-sm p-4 md:p-6 text-center">
              <div className="text-xl md:text-2xl font-bold text-accent-glow mb-2">
                ₹75,000
              </div>
              <div className="text-sm opacity-90">Earned in first 6 weeks</div>
              <div className="text-xs mt-2">- Anjali, Jaipur</div>
            </div>
            <div className="card-elegant bg-white/10 backdrop-blur-sm p-4 md:p-6 text-center">
              <div className="text-xl md:text-2xl font-bold text-accent-glow mb-2">
                12 Brides
              </div>
              <div className="text-sm opacity-90">Booked in 2 months</div>
              <div className="text-xs mt-2">- Neha, Jaipur</div>
            </div>
            <div className="card-elegant bg-white/10 backdrop-blur-sm p-4 md:p-6 text-center">
              <div className="text-xl md:text-2xl font-bold text-accent-glow mb-2">
                ₹1.2L
              </div>
              <div className="text-sm opacity-90">Monthly income achieved</div>
              <div className="text-xs mt-2">- Kavya, Jaipur</div>
            </div>
          </div>
        </div>

        {/* Behind the Scenes Section */}
        <div className="mt-16 lg:mt-24">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="text-gradient-primary">Behind the Scenes</span>{" "}
              of Your Success
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the intensive training environment where housewives
              transform into professional makeup artists and successful
              entrepreneurs.
            </p>
          </div>

          {/* BTS Video Gallery */}
          <div className="mb-12">
            <VerticalFeed videos={btsVideos} />
          </div>

          {/* BTS Features */}
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h4 className="text-2xl md:text-3xl font-bold mb-4">
                What Happens Inside Our 30-Day Program
              </h4>
              <p className="text-lg opacity-90">
                Every aspect of our training is designed for real-world success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-elegant bg-white/10 backdrop-blur-sm p-6 text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h5 className="text-lg font-bold mb-2">Expert-Led Training</h5>
                <p className="text-sm opacity-90">
                  Learn from industry professionals with decades of experience
                  in bridal and event makeup
                </p>
              </div>
              <div className="card-elegant bg-white/10 backdrop-blur-sm p-6 text-center">
                <div className="text-4xl mb-4">💼</div>
                <h5 className="text-lg font-bold mb-2">Business Mastery</h5>
                <p className="text-sm opacity-90">
                  Transform from housewife to CEO with our comprehensive
                  business and marketing training
                </p>
              </div>
              <div className="card-elegant bg-white/10 backdrop-blur-sm p-6 text-center">
                <div className="text-4xl mb-4">👥</div>
                <h5 className="text-lg font-bold mb-2">
                  Real Client Experience
                </h5>
                <p className="text-sm opacity-90">
                  Practice on actual clients under supervision to build
                  confidence and expertise
                </p>
              </div>
              <div className="card-elegant bg-white/10 backdrop-blur-sm p-6 text-center">
                <div className="text-4xl mb-4">📈</div>
                <h5 className="text-lg font-bold mb-2">Career Acceleration</h5>
                <p className="text-sm opacity-90">
                  Go from zero to earning ₹50k+ monthly in just 30 days through
                  our proven system
                </p>
              </div>
              <div className="card-elegant bg-white/10 backdrop-blur-sm p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h5 className="text-lg font-bold mb-2">Sisterhood Support</h5>
                <p className="text-sm opacity-90">
                  Join a community of empowered women supporting each other's
                  entrepreneurial journey
                </p>
              </div>
              <div className="card-elegant bg-white/10 backdrop-blur-sm p-6 text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h5 className="text-lg font-bold mb-2">Success Guarantee</h5>
                <p className="text-sm opacity-90">
                  Our track record speaks for itself - 100% of graduates start
                  successful careers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
