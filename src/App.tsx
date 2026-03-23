import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ChevronRight, ChevronLeft, Volume2, VolumeX, BookOpen, Eye, EyeOff, ChevronUp, ChevronDown } from 'lucide-react';
import { getMysteryForToday, generateSequence, MYSTERIES } from './data';

const LatinCross = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 3v18" />
    <path d="M8 8h8" />
  </svg>
);

export default function App() {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [showPrayer, setShowPrayer] = useState(true);
  const [isHeaderMinimized, setIsHeaderMinimized] = useState(false);
  const [selectedMysteryKey, setSelectedMysteryKey] = useState<string | null>(null);
  const [rosaryCount, setRosaryCount] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const savedCount = localStorage.getItem('rosaryCount');
    if (savedCount) {
      setRosaryCount(parseInt(savedCount, 10));
    }
  }, []);

  // Determine which mystery set to use
  const defaultMystery = getMysteryForToday();
  const activeMysteryKey = selectedMysteryKey || Object.keys(MYSTERIES).find(key => MYSTERIES[key as keyof typeof MYSTERIES].name === defaultMystery.name) || 'gloriosos';
  const mysterySet = MYSTERIES[activeMysteryKey as keyof typeof MYSTERIES];
  const sequence = generateSequence(mysterySet);

  const currentStep = sequence[currentIndex];

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
        setIsAudioPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsAudioPlaying(true);
        }).catch(err => {
          console.error("Audio playback failed:", err);
        });
      }
    }
  };

  const nextStep = () => {
    if (currentIndex < sequence.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // End of Rosary, return to home
      const newCount = rosaryCount + 1;
      setRosaryCount(newCount);
      localStorage.setItem('rosaryCount', newCount.toString());
      setStarted(false);
      setCurrentIndex(0);
    }
  };

  const prevStep = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const progress = ((currentIndex + 1) / sequence.length) * 100;

  const currentImage = currentStep.image || "https://upload.wikimedia.org/wikipedia/commons/5/5b/Sassoferrato_-_Virgin_in_Prayer_-_WGA20888.jpg";

  return (
    <div className="min-h-screen bg-black text-parchment flex flex-col font-sans selection:bg-[#B0985A]/30">
      {/* Audio Element - Ambient Choir */}
      <audio 
        ref={audioRef} 
        src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Gregorian_Chant_%28ISRC_USUAN1600052%29.mp3" 
        loop 
      />

      {/* Background Image with Crossfade */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none flex items-center justify-center">
        <AnimatePresence>
          {/* Blurred background to fill screen */}
          <motion.img
            key={`blur-${currentImage}`}
            src={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover blur-2xl"
            referrerPolicy="no-referrer"
          />
          {/* Main contained image */}
          <motion.img
            key={currentImage}
            src={currentImage}
            alt="Background"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />
      </div>

      {/* Header */}
      <AnimatePresence>
        {!isHeaderMinimized ? (
          <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="p-4 md:p-6 flex justify-between items-center border-b border-[#B0985A]/20 relative z-20 bg-black/60 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <LatinCross className="text-[#B0985A] w-6 h-6" />
              <h1 className="font-serif text-xl tracking-widest text-[#B0985A] uppercase">Santo Rosário</h1>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <button 
                onClick={toggleAudio}
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-[#B0985A]"
                aria-label={isAudioPlaying ? "Mute audio" : "Play audio"}
              >
                {isAudioPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => setIsHeaderMinimized(true)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-[#B0985A]"
                aria-label="Minimize header"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
            </div>
          </motion.header>
        ) : (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="absolute top-4 right-4 z-30"
          >
            <button 
              onClick={() => setIsHeaderMinimized(false)}
              className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-[#B0985A]/20 hover:bg-white/10 transition-colors text-[#B0985A] shadow-lg"
              aria-label="Expand header"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden z-10">
        {!started ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-2xl mx-auto"
          >
            <div className="w-24 h-24 mb-8 rounded-full border border-[#B0985A]/40 flex items-center justify-center p-2 backdrop-blur-sm bg-black/20">
              <div className="w-full h-full rounded-full border border-[#B0985A]/20 flex items-center justify-center">
                <LatinCross className="w-8 h-8 text-[#B0985A]" />
              </div>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl mb-4 font-medium text-[#CDBA88]">
              {mysterySet.name}
            </h2>
            <p className="text-base md:text-lg font-light text-[#CDBA88]/80 mb-8 leading-relaxed">
              Reserve um momento de silêncio. Prepare seu coração para meditar nos mistérios da nossa Redenção.
            </p>

            {/* Mystery Selection */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {Object.entries(MYSTERIES).map(([key, mystery]) => (
                <button
                  key={key}
                  onClick={() => setSelectedMysteryKey(key)}
                  className={`px-4 py-2 rounded-full border text-sm font-serif tracking-wider transition-all ${
                    activeMysteryKey === key 
                      ? 'bg-[#B0985A]/20 border-[#B0985A] text-[#CDBA88]' 
                      : 'bg-black/40 border-[#B0985A]/30 text-[#B0985A]/70 hover:border-[#B0985A]/60 hover:text-[#B0985A]'
                  }`}
                >
                  {mystery.name.replace('Mistérios ', '')}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => {
                setStarted(true);
                if (audioRef.current && !isAudioPlaying) {
                  audioRef.current.play().then(() => {
                    setIsAudioPlaying(true);
                  }).catch(err => {
                    console.error("Audio playback failed:", err);
                  });
                }
              }}
              className="group relative px-8 py-4 bg-black/40 backdrop-blur-md overflow-hidden rounded-full border border-[#B0985A]/40 hover:border-[#B0985A] transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-[#B0985A]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative flex items-center gap-3 font-serif text-lg tracking-widest text-[#B0985A] uppercase">
                <Play className="w-5 h-5" />
                Iniciar Oração
              </span>
            </button>

            {/* Rosary Counter */}
            <div className="mt-12 flex flex-col items-center gap-2">
              <span className="text-xs font-serif tracking-widest text-[#B0985A]/60 uppercase">Terços Rezados</span>
              <span className="text-3xl font-serif text-[#CDBA88]">{rosaryCount}</span>
            </div>
          </motion.div>
        ) : (
          <div className="flex-1 flex flex-col h-full">
            {/* Progress Bar */}
            <div className="h-1 bg-black/50 w-full backdrop-blur-sm z-20 relative">
              <motion.div 
                className="h-full bg-[#B0985A]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Prayer Content */}
            <div className="flex-1 relative flex items-end justify-center p-4 md:p-8 overflow-y-auto z-10">
              <AnimatePresence mode="wait">
                {showPrayer && (
                  <motion.div
                    key={`prayer-${currentIndex}`}
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="max-w-2xl w-full flex flex-col items-center text-center backdrop-blur-md bg-black/50 p-5 md:p-6 rounded-2xl border border-[#B0985A]/30 shadow-2xl relative mb-4 md:mb-8"
                  >
                    {/* Golden border effect - subtle */}
                    <div className="absolute inset-0 border border-transparent rounded-2xl pointer-events-none" style={{ background: 'linear-gradient(to bottom right, rgba(176,152,90,0.4), rgba(176,152,90,0.05)) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                    
                    <div className="space-y-3 relative z-10 w-full">
                      <div className="space-y-1">
                        {currentStep.subtitle && (
                          <p className="font-serif tracking-widest text-[10px] md:text-xs uppercase text-[#B0985A]/80">
                            {currentStep.subtitle}
                          </p>
                        )}
                        <h2 className="font-serif text-xl md:text-2xl font-medium text-[#CDBA88]">
                          {currentStep.title}
                        </h2>
                      </div>

                      <p className="text-sm md:text-base leading-relaxed font-light text-[#B0985A] max-w-xl mx-auto whitespace-pre-wrap">
                        {currentStep.text}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="p-4 md:p-6 flex justify-between items-center border-t border-[#B0985A]/20 bg-black/60 backdrop-blur-md relative z-20">
              <button
                onClick={prevStep}
                disabled={currentIndex === 0}
                className="p-3 md:p-4 rounded-full border border-[#B0985A]/30 text-[#B0985A] hover:bg-[#B0985A]/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                aria-label="Previous prayer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex flex-col items-center max-w-[60%]">
                <div className="font-serif text-sm md:text-base tracking-widest text-[#B0985A] uppercase text-center line-clamp-1">
                  {currentStep.title}
                </div>
                <button 
                  onClick={() => setShowPrayer(!showPrayer)}
                  className="mt-2 flex items-center gap-2 text-xs md:text-sm text-[#B0985A]/70 hover:text-[#B0985A] transition-colors uppercase tracking-widest"
                >
                  {showPrayer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  <span className="hidden md:inline">{showPrayer ? "Ocultar Oração" : "Mostrar Oração"}</span>
                </button>
              </div>

              <button
                onClick={nextStep}
                className="p-3 md:p-4 rounded-full border border-[#B0985A]/30 text-[#B0985A] hover:bg-[#B0985A]/10 transition-all"
                aria-label={currentIndex === sequence.length - 1 ? "Finish Rosary" : "Next prayer"}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
