import { motion } from 'framer-motion';
import { FastForward } from 'lucide-react';

const greetings = [
    { text: "Welcome", lang: "English" },
    { text: "नमस्ते", lang: "Hindi" },
    { text: "ಸ್ವಾಗತ", lang: "Kannada" },
    { text: "স্বাগতম", lang: "Bengali" },
    { text: "స్వాగతం", lang: "Telugu" },
    { text: "வணக்கம்", lang: "Tamil" },
    { text: "स्वागत आहे", lang: "Marathi" }
];

interface WelcomeScreenProps {
    onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {


    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="relative flex flex-col items-center justify-center w-full h-full">
                <motion.button
                    onClick={onComplete}
                    className="absolute top-8 right-8 z-[110] flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white/60 hover:text-white transition-all duration-300 border border-white/10 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md group hover:border-white/20 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.15)] cursour-pointer"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="tracking-wide">SKIP</span>
                    <FastForward className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </motion.button>
                {/* Hero Image Animation */}
                <motion.div
                    className="mb-12 relative w-32 h-32 md:w-48 md:h-48"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img
                        src="/src/assets/hero-image.png"
                        alt="Sushmita Projects"
                        className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    />
                </motion.div>

                <div className="relative h-20 md:h-32 flex items-center justify-center w-full px-4">
                    {greetings.map((greeting, index) => (
                        <motion.h1
                            key={index}
                            className="absolute text-4xl md:text-7xl font-bold text-center text-transparent bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500 bg-clip-text pb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                            style={{
                                lineHeight: '1.5',
                                padding: '0.5em',
                                width: '100%',
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 1, 0] }}
                            transition={{
                                duration: 1.5,
                                times: [0, 0.2, 0.8, 1],
                                delay: index * 1.5,
                                ease: "easeInOut"
                            }}
                            onAnimationComplete={() => {
                                if (index === greetings.length - 1) {
                                    setTimeout(onComplete, 500);
                                }
                            }}
                        >
                            {greeting.text}
                        </motion.h1>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default WelcomeScreen;
