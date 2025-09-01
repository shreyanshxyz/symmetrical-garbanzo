import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  Clock,
  Users,
  BookOpen,
  DollarSign,
  Award,
  MapPin,
} from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      icon: Clock,
      question: "How long is the course and what's the schedule?",
      answer:
        "The course is 30 days intensive program with 4-5 hours of daily hands-on training. Classes run Monday to Saturday, with Sundays for practice and portfolio building. We also offer weekend batches for working professionals.",
    },
    {
      icon: Users,
      question: "Do I need any prior experience in makeup?",
      answer:
        "Absolutely not! Our course is designed for complete beginners. We start from the very basics - skin types, color theory, tool handling - and gradually build up to advanced bridal and party makeup techniques.",
    },
    {
      icon: BookOpen,
      question: "What exactly will I learn in 30 days?",
      answer:
        "You'll master basic to advanced makeup techniques, professional hairstyling, color theory, skin preparation, bridal & party looks, business skills, client management, pricing strategies, Instagram marketing, and AI tools for business growth.",
    },
    {
      icon: DollarSign,
      question: "How much can I realistically earn after the course?",
      answer:
        "Our graduates typically earn ₹30,000-₹1,00,000 per bridal event. With 2-3 events per month, you can easily make ₹60,000-₹3,00,000 monthly. Many students recover their course fee within the first month itself.",
    },
    {
      icon: Award,
      question: "Will I get a certificate?",
      answer:
        "Yes! You'll receive a professional certification upon completion.",
    },
    {
      icon: MapPin,
      question: "Where are the classes held?",
      answer:
        "Our academy is located in Jagatpura, Jaipur. We have fully equipped makeup stations with professional lighting, mirrors, and all necessary tools. The location is easily accessible by public transport.",
    },
    // {
    //   icon: Users,
    //   question: "What if I can't attend some classes?",
    //   answer: "We provide makeup classes and recorded sessions for missed classes. You can also attend the same topic in the next batch at no extra cost. We ensure you don't miss any important learning."
    // },
    // {
    //   icon: DollarSign,
    //   question: "Are there any hidden costs or additional fees?",
    //   answer: "No hidden costs! The ₹50,000 Early Bird price includes everything - course materials, professional makeup kit worth ₹12,000, all bonuses, certification, and lifetime community access. No additional fees whatsoever."
    // }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <HelpCircle className="h-16 w-16 mx-auto mb-6 text-primary animate-float" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Frequently Asked</span>{" "}
            Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to all your questions about the course, career
            prospects, and what to expect
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elegant border-0 shadow-lg"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center gap-4 text-left">
                    <faq.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors flex-shrink-0" />
                    <span className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="ml-10 text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-3xl p-12 text-white max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-xl mb-8 opacity-90">
              Chat with us directly on WhatsApp. We're here to help you make the
              best decision for your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/9172093433?text=Hi! I have some questions about the makeup course",
                    "_blank"
                  )
                }
                className="btn-gold text-lg px-8 py-4"
              >
                💬 Chat on WhatsApp
              </button>
              <button
                onClick={() => window.open("tel:9172093433", "_blank")}
                className="btn-hero text-lg px-8 py-4 bg-white/20 hover:bg-white/30"
              >
                📞 Call Now: +91 9172093433
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
