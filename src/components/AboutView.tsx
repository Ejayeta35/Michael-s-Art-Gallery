import { motion } from 'motion/react';
import { artistInfo, cvData } from '../data';
import { Mail, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

interface AboutViewProps {
  onNavToInquiry: () => void;
}

export default function AboutView({ onNavToInquiry }: AboutViewProps) {
  return (
    <div className="w-full" id="about-view">
      {/* Hero Title Section */}
      <section className="mb-16 md:mb-24 animate-fade-in" id="about-hero">
        <h1 className="font-serif text-4xl md:text-6xl text-black font-semibold mb-4 italic" id="about-title">
          The Artist
        </h1>
        <div className="w-12 h-[2px] bg-black"></div>
      </section>

      {/* Two-Column Core Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16" id="about-grid">
        
        {/* Left Column: High-fashion Editorial portrait of the artist */}
        <div className="lg:col-span-5 mb-10 lg:mb-0" id="about-left-column">
          <div className="sticky top-28 select-none">
            {/* Grayscale hover scale thumbnail */}
            <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-100 border border-neutral-100 group">
              <motion.img 
                src={artistInfo.portraitUrl}
                alt="Aurelian fine artist portrait"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Captions */}
            <div className="mt-6 border-l border-neutral-200 pl-4">
              <p className="font-sans text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
                Artist Portrait, {artistInfo.portraitYear}
              </p>
              <p className="font-serif text-sm text-neutral-500 mt-1 italic italic">
                Photographed by {artistInfo.portraitCredit}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative content - Bio, Statement, and Exhibition lists */}
        <div className="lg:col-span-7 flex flex-col gap-16 md:gap-24" id="about-right-column">
          
          {/* Biography Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
            id="about-bio"
          >
            <h2 className="font-serif text-xl md:text-2xl text-black font-semibold border-b border-neutral-200 pb-4 w-full flex items-center gap-3">
              <BookOpen size={18} className="text-neutral-400" />
              Biography
            </h2>
            <div className="space-y-5 text-neutral-600 font-sans text-sm md:text-base leading-relaxed">
              {artistInfo.biography.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.section>

          {/* Artist Statement Section Quote */}
          <motion.section 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-50 border border-neutral-100 p-8 md:p-12 relative overflow-hidden"
            id="about-statement"
          >
            {/* Structural ambient light glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/60 rounded-full blur-3xl select-none"></div>

            <p className="font-serif text-xl md:text-3xl text-black italic leading-snug relative z-10 font-semibold">
              "{artistInfo.statementQuote}"
            </p>
            
            <p className="font-sans text-neutral-500 text-xs md:text-sm mt-8 relative z-10 leading-relaxed font-normal">
              {artistInfo.statementDetail}
            </p>
          </motion.section>

          {/* Exhibition CV Section */}
          <section className="space-y-12" id="about-cv">
            <h2 className="font-serif text-xl md:text-2xl text-black font-semibold border-b border-neutral-200 pb-4 w-full flex items-center gap-3">
              <Award size={18} className="text-neutral-400" />
              Exhibition CV
            </h2>

            {/* Solo Exhibitions List */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
              id="solo-exhibitions"
            >
              <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-semibold flex items-center gap-2">
                <Calendar size={12} />
                Solo Exhibitions
              </h3>
              <ul className="space-y-4">
                {cvData.solo.map((ex, i) => (
                  <li 
                    key={i} 
                    className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-neutral-100 pb-4 hover:border-black transition-colors"
                  >
                    <span className="font-sans font-bold text-sm text-black shrink-0 w-12">{ex.year}</span>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:grow sm:items-baseline">
                      <span className="font-serif text-sm md:text-base text-black font-medium">{ex.title}</span>
                      <span className="font-sans text-xs text-neutral-400 flex items-center gap-1 mt-1 sm:mt-0">
                        <MapPin size={10} />
                        {ex.venue}, {ex.location}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Selected Group Shows List */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
              id="group-exhibitions"
            >
              <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-semibold flex items-center gap-2">
                <Calendar size={12} />
                Selected Group Shows
              </h3>
              <ul className="space-y-4">
                {cvData.group.map((ex, i) => (
                  <li 
                    key={i} 
                    className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-neutral-100 pb-4 hover:border-black transition-colors"
                  >
                    <span className="font-sans font-bold text-sm text-black shrink-0 w-12">{ex.year}</span>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:grow sm:items-baseline">
                      <span className="font-serif text-sm md:text-base text-black font-medium">{ex.title}</span>
                      <span className="font-sans text-xs text-neutral-400 flex items-center gap-1 mt-1 sm:mt-0">
                        <MapPin size={10} />
                        {ex.venue}, {ex.location}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </section>

          {/* Action Call for Acquisitions Block */}
          <motion.section 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-neutral-100"
            id="acquisitions-cta"
          >
            <button 
              onClick={onNavToInquiry}
              className="w-full md:w-auto bg-black text-white font-sans text-xs uppercase tracking-widest font-semibold px-12 py-5 hover:bg-neutral-800 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 cursor-pointer select-none"
              id="btn-acquisitions-inquiry"
            >
              <Mail size={14} />
              Inquire about Acquisitions
            </button>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
