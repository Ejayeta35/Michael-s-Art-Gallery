import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { ambientImages } from '../data';
import { Send, CheckCircle2, Mail, ExternalLink, Instagram, Linkedin, Globe } from 'lucide-react';

interface ContactViewProps {
  prefilledSubject: string;
  clearPrefilledSubject: () => void;
}

export default function ContactView({ prefilledSubject, clearPrefilledSubject }: ContactViewProps) {
  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(prefilledSubject || '');
  const [message, setMessage] = useState('');
  
  // Submission feedback states
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'received'>('idle');

  // Submit Handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('transmitting');

    // Simulate high-end digital transmission
    setTimeout(() => {
      setStatus('received');
      
      // Reset after status completed
      setTimeout(() => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setStatus('idle');
        clearPrefilledSubject();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="w-full" id="contact-view">
      {/* Section Header */}
      <header className="text-center mb-16 md:mb-24 animate-fade-in" id="contact-header">
        <h1 className="font-serif text-4xl md:text-6xl text-black font-semibold mb-6 tracking-tight leading-none">
          Inquiry
        </h1>
        <div className="w-12 h-[1px] bg-black mx-auto mb-10"></div>
        <p className="font-sans text-neutral-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          For exhibition inquiries, private acquisitions, or archival information, please use the form below.
        </p>
      </header>

      {/* Main Column Container */}
      <div className="max-w-4xl mx-auto" id="contact-content">
        
        {/* Contact Form with signature lines styling */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10 md:gap-12" id="inquiry-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label 
                htmlFor="input-name" 
                className="font-sans text-[10px] uppercase tracking-widest text-neutral-400 font-semibold"
              >
                Name
              </label>
              <input
                id="input-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={status !== 'idle'}
                className="signature-input font-sans text-sm md:text-base py-3 border-b border-black text-black outline-none placeholder-neutral-300 w-full"
                placeholder="Aurelia Jenkins"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label 
                htmlFor="input-email" 
                className="font-sans text-[10px] uppercase tracking-widest text-neutral-400 font-semibold"
              >
                Email
              </label>
              <input
                id="input-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status !== 'idle'}
                className="signature-input font-sans text-sm md:text-base py-3 border-b border-black text-black outline-none placeholder-neutral-300 w-full"
                placeholder="collector@example.com"
              />
            </div>

          </div>

          {/* Subject Line Input */}
          <div className="flex flex-col gap-2">
            <label 
              htmlFor="input-subject" 
              className="font-sans text-[10px] uppercase tracking-widest text-neutral-400 font-semibold"
            >
              Subject
            </label>
            <input
              id="input-subject"
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              disabled={status !== 'idle'}
              className="signature-input font-sans text-sm md:text-base py-3 border-b border-black text-black outline-none placeholder-neutral-300 w-full"
              placeholder="Private Acquisition Request"
            />
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col gap-2">
            <label 
              htmlFor="input-message" 
              className="font-sans text-[10px] uppercase tracking-widest text-neutral-400 font-semibold"
            >
              Message
            </label>
            <textarea
              id="input-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={status !== 'idle'}
              className="signature-input font-sans text-sm md:text-base py-3 border-b border-black text-black outline-none placeholder-neutral-300 w-full resize-none"
              placeholder="Provide context regarding the work you're interested in..."
            />
          </div>

          {/* CTA Transmit Button */}
          <div className="pt-6 text-center">
            <button
              type="submit"
              disabled={status !== 'idle'}
              className={`w-full md:w-auto font-sans text-[11px] font-bold uppercase tracking-widest px-16 py-5 transition-all duration-300 cursor-pointer select-none active:scale-95 ${
                status === 'transmitting'
                  ? 'bg-neutral-300 text-neutral-600 cursor-not-allowed'
                  : status === 'received'
                  ? 'bg-emerald-800 text-white font-medium'
                  : 'bg-black text-white hover:bg-neutral-800'
              }`}
              id="btn-send-message"
            >
              {status === 'transmitting' && (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-neutral-500 border-t-neutral-800 rounded-full animate-spin"></span>
                  Transmitting...
                </span>
              )}
              {status === 'received' && (
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-300" />
                  Received
                </span>
              )}
              {status === 'idle' && (
                <span className="flex items-center justify-center gap-2">
                  <Send size={12} />
                  Send Message
                </span>
              )}
            </button>
          </div>
        </form>

        {/* High-contrast Elegant Aesthetic Divider Line */}
        <div className="flex justify-center items-center py-20 opacity-10" id="contact-divider">
          <div className="w-full max-w-lg h-[1.5px] bg-black"></div>
        </div>

        {/* Direct Reach & Social Links section */}
        <section className="flex flex-col items-center text-center gap-12 mb-24" id="direct-reach-section">
          {/* Email Inquiry card */}
          <div className="flex flex-col gap-4">
            <h2 className="font-sans text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-semibold">
              Direct Reach
            </h2>
            <a 
              href="mailto:contact@aurelian.art" 
              className="font-serif text-2xl md:text-3xl text-black font-semibold hover:opacity-50 transition-opacity flex items-center justify-center gap-2"
              id="reach-email-link"
            >
              <Mail size={20} className="text-neutral-400 stroke-1" />
              contact@aurelian.art
            </a>
          </div>

          {/* Social connections */}
          <div className="flex flex-col gap-4 mt-4">
            <h2 className="font-sans text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-semibold">
              Digital Presence
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12" id="presence-links">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="referrer noopener"
                className="font-sans text-xs uppercase tracking-widest text-neutral-500 border-b border-transparent hover:border-black hover:text-black pb-1 transition-all flex items-center gap-1"
              >
                <Instagram size={11} />
                Instagram
              </a>
              <a 
                href="https://artsy.net" 
                target="_blank" 
                rel="referrer noopener"
                className="font-sans text-xs uppercase tracking-widest text-neutral-500 border-b border-transparent hover:border-black hover:text-black pb-1 transition-all flex items-center gap-1"
              >
                <Globe size={11} />
                Artsy
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="referrer noopener"
                className="font-sans text-xs uppercase tracking-widest text-neutral-500 border-b border-transparent hover:border-black hover:text-black pb-1 transition-all flex items-center gap-1"
              >
                <Linkedin size={11} />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Modern Ambient Visual Grid Row (Grayscale curated artwork scenes) */}
      <aside className="w-full overflow-hidden mb-8" id="ambient-gallery-row">
        <h3 className="text-center font-sans text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-semibold mb-8">
          Studio Views & Details
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 opacity-30 hover:opacity-75 transition-opacity duration-700 select-none">
          {ambientImages.map((imgUrl, index) => {
            // Determine custom aspect rations for masonry mockup feel
            let aspectClass = 'aspect-[3/4]';
            if (index === 1) aspectClass = 'aspect-square pt-8';
            if (index === 2) aspectClass = 'aspect-[2/3] pt-16';
            if (index === 3) aspectClass = 'aspect-video pt-4';

            return (
              <div 
                key={index} 
                className={`bg-neutral-100 overflow-hidden ${aspectClass} border border-neutral-100 group shadow-sm`}
              >
                <motion.img
                  src={imgUrl}
                  alt={`Aurelian studio perspective detail ${index + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-all duration-1000 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  onError={(e) => {
                    // Fallback representation
                    e.currentTarget.src = "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400";
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
