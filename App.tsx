import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Sparkles, Bot, ScanText, Cog } from 'lucide-react';
import { Logo } from './components/Logo';
import { Background } from './components/Background';
import { ContactItem } from './components/ContactItem';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 50 }
  }
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative flex flex-col font-sans text-white selection:bg-purple-500/30">
      <Background />

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 md:py-20 z-10 relative max-w-7xl mx-auto w-full">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center w-full max-w-4xl mx-auto"
        >
          {/* Logo Section */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-10">
            <Logo />
          </motion.div>

          {/* Coming Soon Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm shadow-[0_0_15px_rgba(124,58,237,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-xs font-bold tracking-[0.2em] text-purple-300 uppercase">Coming Soon</span>
             </div>
           </motion.div>

          {/* Main Headlines */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide mb-4 text-white"
          >
            AI BUSINESS SOLUTIONS
          </motion.h2>

          <motion.h3 
            variants={itemVariants}
            className="text-lg md:text-2xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-[length:200%_auto] animate-gradient"
          >
            BOOST YOUR COMPANY'S PERFORMANCE WITH INTELLIGENT TECHNOLOGY
          </motion.h3>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 font-light"
          >
            Nous concevons et déployons des solutions d’Intelligence Artificielle 
            concrètes, sécurisées et adaptées aux réalités métier.
          </motion.p>

          {/* Feature Pills */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 md:mb-24"
          >
            {[
              { text: "Agents IA", icon: Bot },
              { text: "Automatisation", icon: Cog },
              { text: "OCR Intelligent", icon: ScanText }
            ].map((tag, index) => (
              <motion.div
                key={tag.text}
                variants={pillVariants}
                whileHover={{ scale: 1.05, borderColor: "rgba(139, 92, 246, 0.5)" }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-purple-900/20"
              >
                <tag.icon size={18} className="text-purple-400" />
                <span className="font-medium text-purple-100">{tag.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Grid */}
          <motion.div 
            variants={itemVariants}
            className="w-full border-t border-white/10 pt-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <ContactItem 
                icon={Phone}
                label="Téléphone"
                text="+216 95 556 553"
                href="tel:+21695556553"
              />
              <ContactItem 
                icon={Mail}
                label="Email"
                text="contact@ulytechai.com"
                href="mailto:contact@ulytechai.com"
              />
              <ContactItem 
                icon={MapPin}
                label="Adresse"
                text="Immeuble Elhajri 2ème étage B06 Kairouan 3100"
                href="https://maps.google.com/?q=Immeuble+Elhajri+Kairouan+3100"
              />
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer copyright */}
      <footer className="relative z-10 py-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} UlyTech. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default App;