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
            You don't need more spiritual knowledge. <br className="hidden md:block"/>
            <span className="italic text-primary">You need to actually live it.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Inner Alignment Coaching helps you release emotional reaction patterns, practice the spiritual truths in daily life, and live with deeper authenticity, clarity, and peace.
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

      {/* The Gap Section - Direct Messaging */}
      <section className="pt-24 pb-8 px-6 md:px-12 bg-white relative overflow-hidden">
        {/* Decorative - Metatron's Cube top right */}
        <div className="absolute -top-10 -right-10 w-72 h-72 opacity-[0.07] pointer-events-none text-red-500">
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.8">
            <circle cx="100" cy="100" r="90"/>
            <circle cx="100" cy="55" r="45"/>
            <circle cx="100" cy="145" r="45"/>
            <circle cx="61" cy="77" r="45"/>
            <circle cx="61" cy="122" r="45"/>
            <circle cx="139" cy="77" r="45"/>
            <circle cx="139" cy="122" r="45"/>
            <polygon points="100,20 168,60 168,140 100,180 32,140 32,60"/>
            <polygon points="100,180 168,60 32,60"/>
            <polygon points="100,20 168,140 32,140"/>
          </svg>
        </div>
        {/* Decorative - dots grid bottom left */}
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {Array.from({ length: 8 }).map((_, row) =>
              Array.from({ length: 8 }).map((_, col) => (
                <circle key={`${row}-${col}`} cx={10 + col * 26} cy={10 + row * 26} r="3" fill="#ef4444"/>
              ))
            )}
          </svg>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <FadeIn>
            <div className="space-y-8 text-lg leading-relaxed text-foreground">
              <p className="text-xl font-serif italic">You already know better.</p>
              
              <p>But in real life?<br />
              You still get triggered.<br />
              You still react.<br />
              You still take things personally.</p>
              
              <p className="font-semibold text-primary text-2xl">That's the gap.</p>
              
              <p className="font-semibold text-primary text-2xl">This work closes it.</p>

              <div className="bg-secondary/20 border border-secondary/30 p-8 rounded-2xl space-y-6">
                <p>In life, the same shit happens again and again.<br />
                Different people. Same patterns.</p>

                <div className="space-y-4 text-foreground/85">
                  <p><strong>Someone disrespects you</strong> → you react, you take it personally, you make assumptions, you suffer.</p>
                  
                  <p><strong>Someone doesn't meet your expectations</strong> → you get hurt, you suffer disappointment.</p>
                  
                  <p><strong>Someone cuts you off in traffic</strong> → you get angry, you react, your inner space is disturbed by an external event you had no control over—but you have all the control over your internal space.</p>
                </div>

                <p className="pt-4">It's automatic. You're not choosing how you respond. You're being run by patterns.</p>
                
                <p className="text-lg font-semibold text-foreground">That's why you feel stuck—even if you're "spiritual."</p>

                <p>You know the truth… but you're not living it when it matters.</p>

                <p className="text-2xl font-serif text-primary">This work changes that.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About / Intro Section */}
      <section className="pt-8 pb-8 px-6 md:px-12 bg-background relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-1/2 -translate-y-1/4">
          <img 
            src={`${import.meta.env.BASE_URL}images/abstract-nature.png`} 
            alt="Decorative organic shape" 
            className="w-96 h-96 object-contain"
          />
        </div>
        {/* Decorative - Sri Yantra-inspired triangles bottom left */}
        <div className="absolute -bottom-10 -left-10 w-72 h-72 opacity-[0.07] pointer-events-none text-red-500">
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.8">
            <circle cx="100" cy="100" r="90"/>
            <polygon points="100,20 175,148 25,148"/>
            <polygon points="100,180 25,52 175,52"/>
            <polygon points="100,35 163,135 37,135"/>
            <polygon points="100,165 37,65 163,65"/>
            <polygon points="100,50 150,122 50,122"/>
            <polygon points="100,150 50,78 150,78"/>
            <circle cx="100" cy="100" r="15"/>
          </svg>
        </div>
        {/* Decorative - Star of David geometry top left */}
        <div className="absolute top-10 left-10 w-40 h-40 opacity-[0.06] pointer-events-none text-red-500">
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.2">
            <polygon points="100,10 190,160 10,160"/>
            <polygon points="100,190 10,40 190,40"/>
            <circle cx="100" cy="100" r="95"/>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif text-center mb-16 leading-tight text-balance">
              This work will transform your relationships. <br className="hidden md:block"/>
              Not just with other people—but with yourself… improving all your interactions.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
            <FadeIn delay={0.2} className="space-y-6 text-lg text-foreground/85">
              <p>
                <strong className="text-foreground font-medium">Inner Alignment Coaching</strong> helps you break the reactionary patterns and self limiting beliefs running your life so you can finally live what you believe.
              </p>
              <p>
                My goal is to help you live the best version of yourself. I guide you through the process of inner growth. Using grounded spiritual and psychological practices, deep inner completion work, with mind–body emotional awareness.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="p-8 md:p-10 rounded-3xl bg-secondary/50 border border-secondary relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed italic">
                  "Together, we will uncover the hidden patterns that create suffering helping you realign with your true nature — so you can live with clarity, emotional balance, and a deeper control over your life."
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-8 pb-8 px-6 md:px-12 bg-white relative overflow-hidden">
        {/* Decorative Sacred Geometry - Top Left */}
        <div className="absolute -top-20 -left-20 w-80 h-80 opacity-5 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="100" fill="none" stroke="currentColor" className="text-red-500"/>
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" className="text-red-500"/>
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" className="text-red-500"/>
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" className="text-red-500"/>
            <path d="M100,20 L170,170 L30,170 Z" fill="none" stroke="currentColor" className="text-red-500"/>
          </svg>
        </div>
        
        {/* Decorative Spiral - Bottom Right - Fibonacci */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 opacity-5 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M 100 100 Q 100 90 110 90 Q 120 90 120 100 Q 120 110 110 110 Q 100 110 100 100 Q 100 95 105 95 Q 110 95 110 100 Q 110 105 105 105 Q 100 105 100 100 L 100 50 Q 100 20 130 20 Q 160 20 160 50 Q 160 80 130 80 Q 110 80 105 70 L 95 80 Q 115 95 145 95 Q 180 95 180 60 Q 180 25 145 25 Q 100 25 100 70 L 100 100 L 50 100 Q 20 100 20 130 Q 20 160 50 160 Q 80 160 85 145 L 75 140 Q 70 155 50 155 Q 30 155 30 135 Q 30 115 50 115 Q 95 115 100 140 L 100 100" 
                  fill="none" 
                  stroke="currentColor" 
                  className="text-red-500" 
                  strokeWidth="1.5"/>
          </svg>
        </div>

        {/* Decorative Element - Top Right */}
        <div className="absolute top-10 right-10 w-60 h-60 opacity-5 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="100" fill="none" stroke="currentColor" className="text-red-500" strokeWidth="1"/>
            <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" className="text-red-500" strokeWidth="0.5"/>
            <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" className="text-red-500" strokeWidth="0.5"/>
            <line x1="35" y1="35" x2="165" y2="165" stroke="currentColor" className="text-red-500" strokeWidth="0.5"/>
            <line x1="165" y1="35" x2="35" y2="165" stroke="currentColor" className="text-red-500" strokeWidth="0.5"/>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-primary font-medium tracking-widest uppercase text-lg md:text-2xl mb-3 block">The Process</span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground">This Work Helps You</h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {[
              { icon: Wind, title: "Embody Values", desc: "Embody the spiritual values you deeply believe in, bringing them into everyday reality." },
              { icon: Leaf, title: "Release the Past", desc: "Release emotional weight from the past that no longer serves your present." },
              { icon: MessageCircleHeart, title: "Stop Unconscious Patterns", desc: "This work is about stopping the unconscious patterns that control you. So instead of reacting—respond." },
              { icon: ShieldCheck, title: "Stop Reacting", desc: "Stop taking things personally and establish healthy emotional boundaries." },
              { icon: Heart, title: "Communicate clearly", desc: "Communicate with greater awareness, compassion, and integrity in all relationships." },
              { icon: SunDim, title: "Find Peace", desc: "Feel more peaceful, present, and naturally aligned in your daily life." }
            ].map((benefit, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="h-full p-4 rounded-xl bg-background border border-border hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group flex gap-3 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold mb-1 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-16 text-center max-w-3xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-foreground">
              <strong>You'll be supported—but you'll also be challenged.</strong>
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Because that's what creates real change.
            </p>
            <p className="text-lg md:text-xl text-foreground font-semibold">
              You will learn where you're out of alignment with your own values.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground italic">
              You'll gain insight into emotional and behavioral patterns, clarify what truly matters to you, and practice mind–body-emotion awareness tools that help you respond to life with greater authenticity.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* "This Is For You If" Section */}
      <section className="pt-8 pb-8 px-6 md:px-12 bg-secondary/30 relative overflow-hidden">
        {/* Decorative - Flower of Life top right */}
        <div className="absolute -top-16 -right-16 w-80 h-80 opacity-[0.08] pointer-events-none text-red-500">
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.7">
            <circle cx="100" cy="100" r="30"/>
            <circle cx="100" cy="70" r="30"/>
            <circle cx="100" cy="130" r="30"/>
            <circle cx="126" cy="85" r="30"/>
            <circle cx="126" cy="115" r="30"/>
            <circle cx="74" cy="85" r="30"/>
            <circle cx="74" cy="115" r="30"/>
            <circle cx="100" cy="100" r="60"/>
            <circle cx="100" cy="100" r="90"/>
          </svg>
        </div>
        {/* Decorative - Diamond grid bottom left */}
        <div className="absolute -bottom-10 -left-10 w-72 h-72 opacity-[0.07] pointer-events-none text-red-500">
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.8">
            <polygon points="100,10 190,100 100,190 10,100"/>
            <polygon points="100,30 170,100 100,170 30,100"/>
            <polygon points="100,50 150,100 100,150 50,100"/>
            <polygon points="100,70 130,100 100,130 70,100"/>
            <line x1="10" y1="100" x2="190" y2="100"/>
            <line x1="100" y1="10" x2="100" y2="190"/>
            <line x1="30" y1="30" x2="170" y2="170"/>
            <line x1="170" y1="30" x2="30" y2="170"/>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif text-center mb-16 text-foreground">
              This Is For You If
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-2">
            {[
              "You value spiritual growth but want something grounded and practical",
              "You're emotionally aware but feel stuck in repeating patterns of reaction",
              "You want to live with more integrity and authenticity",
              "You're ready to take responsibility for your inner experience",
              "You want guidance without judgment or dogma"
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="h-full p-4 rounded-xl bg-background border border-border hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group flex gap-3 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-base text-foreground font-medium pt-2">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Contact Section */}
      <section id="contact" className="pt-8 pb-8 px-6 md:px-12 bg-foreground text-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-primary),transparent_50%)]" />
        </div>
        {/* Decorative - Vesica Piscis top right */}
        <div className="absolute -top-20 -right-20 w-80 h-80 opacity-[0.08] pointer-events-none text-red-500">
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.8">
            <circle cx="80" cy="100" r="60"/>
            <circle cx="120" cy="100" r="60"/>
            <circle cx="100" cy="100" r="90"/>
            <ellipse cx="100" cy="100" rx="30" ry="52"/>
          </svg>
        </div>
        {/* Decorative - geometric star bottom left */}
        <div className="absolute -bottom-10 -left-10 w-64 h-64 opacity-[0.07] pointer-events-none text-red-500">
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.8">
            <polygon points="100,10 116,65 173,65 128,100 144,155 100,120 56,155 72,100 27,65 84,65"/>
            <polygon points="100,30 112,70 155,70 120,95 132,135 100,110 68,135 80,95 45,70 88,70"/>
            <circle cx="100" cy="100" r="85"/>
            <circle cx="100" cy="100" r="45"/>
          </svg>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-primary-foreground/70 mb-6">
                <Leaf className="w-5 h-5" />
                <span className="uppercase tracking-widest text-sm font-medium">Take the next step</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-primary">
                Begin Your Inner Alignment Journey
              </h2>
              <p className="text-xl text-background/95 mb-8 font-light">
                Private 1:1 sessions available.
              </p>
              <p className="text-lg text-background/85 mb-6">
                Message to learn more or schedule an introductory conversation to see if we're a good fit for this work.
              </p>
              
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 inline-block backdrop-blur-sm">
                <h4 className="font-serif text-xl mb-2 text-primary-foreground">What to expect</h4>
                <p className="text-primary-foreground/90 text-sm max-w-sm leading-relaxed">
                  A non-judgmental space to explore your inner landscape. I will give you honest truth, direct and straightforward feedback, no comforting lies. This work is for you if you are ready to be honest with yourself and willing to put in the work to introspect and be radically honest with yourself. If you do this I promise you will have incredible success in transforming your life!
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
                      href="https://calendly.com/inneralignmentembodyment/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-shadow"
                    >
                      <Calendar className="w-4 h-4" />
                      Schedule on Calendly
                    </a>
                  </motion.div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-4 pb-12 text-center text-sm bg-foreground relative overflow-hidden">
        {/* Decorative - mandala center background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none text-red-500">
          <svg viewBox="0 0 200 200" className="w-96 h-96" fill="none" stroke="currentColor" strokeWidth="0.6">
            <circle cx="100" cy="100" r="90"/>
            <circle cx="100" cy="100" r="70"/>
            <circle cx="100" cy="100" r="50"/>
            <circle cx="100" cy="100" r="30"/>
            <circle cx="100" cy="100" r="10"/>
            {[0,30,60,90,120,150,180,210,240,270,300,330].map(deg => {
              const r = deg * Math.PI / 180;
              return <line key={deg} x1={100 + 10*Math.cos(r)} y1={100 + 10*Math.sin(r)} x2={100 + 90*Math.cos(r)} y2={100 + 90*Math.sin(r)}/>;
            })}
          </svg>
        </div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="border-t border-background/20 pt-8">
            <p className="text-base text-background font-semibold mb-3">Pricing & Guarantee</p>
            <p className="leading-relaxed text-background/90">
              Your first 30 minute session is free. $60 per hour coaching. <br />
              <span className="font-semibold text-background">If you don't experience real, noticeable shifts in how you respond to situations, your triggers, and your relationships within the first 3 sessions, I'll give you your money back.</span>
            </p>
          </div>
          <div className="border-t border-background/20 pt-6">
            <p className="text-background/80">© {new Date().getFullYear()} Inner Alignment Coaching. All rights reserved.</p>
            <p className="mt-3">
              <a href="mailto:inneralignmentembodyment@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                inneralignmentembodyment@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
