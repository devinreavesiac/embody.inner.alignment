import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Leaf, 
  Wind, 
  ShieldCheck, 
  MessageCircleHeart, 
  SunDim, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Heart,
  Calendar
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function LandingPage() {
  const [contactTab, setContactTab] = useState<'message' | 'schedule'>('message');

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 flex justify-between items-center">
        <div className="font-serif text-xl md:text-2xl font-medium tracking-wide text-foreground/90 flex items-center gap-2">
          <Leaf className="w-5 h-5 text-primary" />
          <span>Inner Alignment</span>
        </div>
        <button 
          onClick={scrollToContact}
          className="text-sm font-medium text-foreground hover:text-primary transition-colors hidden sm:block"
        >
          Work With Me
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 px-6 md:px-12 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Serene landscape background" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center mt-12 md:mt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase mb-6">
              Inner Alignment Coaching
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-balance text-foreground mb-6 leading-tight"
          >
            You don't need more spiritual information. <br className="hidden md:block"/>
            <span className="italic text-primary">You need help living it.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Inner Alignment Coaching helps you release emotional patterns, stop taking things personally, and live with deeper integrity, clarity, and peace.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={scrollToContact}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium text-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-foreground/20"
            >
              <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10">Begin Your Journey</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About / Intro Section */}
      <section className="py-24 px-6 md:px-12 bg-background relative">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-1/2 -translate-y-1/4">
          <img 
            src={`${import.meta.env.BASE_URL}images/abstract-nature.png`} 
            alt="Decorative organic shape" 
            className="w-96 h-96 object-contain"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif text-center mb-16 leading-tight text-balance">
              This process is transformational for your relationships, improving all interactions you will have.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
            <FadeIn delay={0.2} className="space-y-6 text-lg text-muted-foreground">
              <p>
                <strong className="text-foreground font-medium">Inner Alignment Coaching</strong> helps you break the patterns controlling your life so you can live what you believe.
              </p>
              <p>
                My goal is to help you live the best version of yourself. I support people on their journey of inner growth and self-discovery through grounded spiritual guidance, deep inner completion work, and mind–body awareness practices.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="p-8 md:p-10 rounded-3xl bg-secondary/50 border border-secondary relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed italic">
                  "Together, we gently uncover the hidden patterns that create suffering and help you realign with your true nature — so you can live with clarity, emotional balance, and a sense of control over your life."
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 md:px-12 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">The Process</span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground">This Work Helps You</h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Wind, title: "Embody Values", desc: "Embody the spiritual values you deeply believe in, bringing them into everyday reality." },
              { icon: Leaf, title: "Release the Past", desc: "Release emotional weight from the past that no longer serves your present." },
              { icon: MessageCircleHeart, title: "Soften Judgment", desc: "Recognize and gently soften judgment patterns toward yourself and others." },
              { icon: ShieldCheck, title: "Stop Reacting", desc: "Stop taking things personally and establish healthy emotional boundaries." },
              { icon: Heart, title: "Communicate clearly", desc: "Communicate with greater awareness, compassion, and integrity in all relationships." },
              { icon: SunDim, title: "Find Peace", desc: "Feel more peaceful, present, and naturally aligned in your daily life." }
            ].map((benefit, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="h-full p-8 rounded-2xl bg-background border border-border hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-medium mb-3 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground italic">
              You'll gain insight into emotional and behavioral patterns, clarify what truly matters to you, and practice mind–body awareness tools that help you respond to life with greater presence.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* "This Is For You If" Section */}
      <section className="py-24 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif text-center mb-16 text-foreground">
              This Is For You If
            </h2>
          </FadeIn>

          <div className="space-y-6">
            {[
              "You value spiritual growth but want something grounded and practical",
              "You're emotionally aware but feel stuck in repeating patterns of reaction",
              "You want to live with more integrity and authenticity",
              "You're ready to take responsibility for your inner experience",
              "You want guidance without judgment or dogma"
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-lg md:text-xl text-foreground font-medium pt-1">
                    {text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-foreground text-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-primary),transparent_50%)]" />
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-primary-foreground/70 mb-6">
                <Leaf className="w-5 h-5" />
                <span className="uppercase tracking-widest text-sm font-medium">Take the next step</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                Begin Your Inner Alignment Journey
              </h2>
              <p className="text-xl text-background/80 mb-8 font-light">
                Private 1:1 sessions available.
              </p>
              <p className="text-lg text-background/60 mb-12">
                Message to learn more or schedule an introductory conversation to see if we're a good fit for this work.
              </p>
              
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 inline-block backdrop-blur-sm">
                <h4 className="font-serif text-xl mb-2">What to expect</h4>
                <p className="text-background/70 text-sm max-w-sm">
                  A safe, non-judgmental space to explore your inner landscape. No pressure, no obligations.
                </p>
              </div>
            </FadeIn>
          </div>
          
          <div>
            <FadeIn delay={0.2}>
              <div className="bg-background text-foreground rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden">
                {/* Tabs */}
                <div className="flex gap-2 mb-8 border-b border-border">
                  <button
                    onClick={() => setContactTab('message')}
                    className={`px-6 py-3 font-medium flex items-center gap-2 border-b-2 transition-colors ${
                      contactTab === 'message'
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <MessageCircleHeart className="w-4 h-4" />
                    Send Message
                  </button>
                  <button
                    onClick={() => setContactTab('schedule')}
                    className={`px-6 py-3 font-medium flex items-center gap-2 border-b-2 transition-colors ${
                      contactTab === 'schedule'
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule Call
                  </button>
                </div>

                {/* Contact Form Tab */}
                {contactTab === 'message' && (
                  <motion.div
                    key="message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <ContactForm />
                  </motion.div>
                )}

                {/* Calendly Tab */}
                {contactTab === 'schedule' && (
                  <motion.div
                    key="schedule"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="space-y-4"
                  >
                    <p className="text-foreground mb-4">
                      Schedule a free introductory call to explore whether we're a good fit for working together.
                    </p>
                    <a
                      href="https://calendly.com/your-username"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-shadow"
                    >
                      <Calendar className="w-4 h-4" />
                      Schedule on Calendly
                    </a>
                    <p className="text-sm text-muted-foreground mt-6">
                      You can also embed your Calendly directly here. Replace the URL above with your actual Calendly link in the code.
                    </p>
                  </motion.div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground text-sm bg-foreground text-background/60">
        <p>© {new Date().getFullYear()} Inner Alignment Coaching. All rights reserved.</p>
      </footer>
    </div>
  );
}
