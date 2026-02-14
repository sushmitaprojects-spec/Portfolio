import { Github, Linkedin, Mail, X, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Footer = () => {
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [copied, setCopied] = useState(false);
    const email = "sushmitaprojects@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <footer id="contact" className="w-full bg-black py-12 border-t border-white/10 relative z-30">
                <div className="container mx-auto flex flex-col items-center justify-center gap-8">
                    <div className="flex gap-8">
                        <a
                            href="https://github.com/sushmitaprojects-spec"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 group hover:scale-110 shadow-lg hover:shadow-cyan-500/20"
                            aria-label="GitHub"
                        >
                            <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sushmita-sen1412"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 group hover:scale-110 shadow-lg hover:shadow-cyan-500/20"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                        <button
                            onClick={() => setShowEmailModal(true)}
                            className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 group hover:scale-110 shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
                            aria-label="Email"
                        >
                            <Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-gray-500 text-sm font-medium tracking-wide">
                            © {new Date().getFullYear()} Sushmita Projects. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

            <AnimatePresence>
                {showEmailModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowEmailModal(false)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-2xl py-8"
                        >
                            <button
                                onClick={() => setShowEmailModal(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex flex-col items-center gap-6">
                                <div className="p-4 bg-blue-500/10 rounded-full">
                                    <Mail className="w-8 h-8 text-blue-400" />
                                </div>

                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white mb-2">Get in touch</h3>
                                    <p className="text-gray-400">Copy the email address below to send me a message.</p>
                                </div>

                                <div className="flex items-center gap-2 w-full p-3 bg-black/50 border border-white/10 rounded-xl group/input">
                                    <input
                                        type="text"
                                        value={email}
                                        readOnly
                                        className="bg-transparent text-gray-200 flex-1 outline-none text-sm font-mono pl-2"
                                    />
                                    <button
                                        onClick={handleCopy}
                                        className="p-2 hover:bg-white/10 rounded-lg transition-colors relative"
                                        title="Copy to clipboard"
                                    >
                                        {copied ? (
                                            <Check className="w-4 h-4 text-green-400" />
                                        ) : (
                                            <Copy className="w-4 h-4 text-gray-400 group-hover/input:text-white" />
                                        )}
                                    </button>
                                </div>
                                <a
                                    href={`mailto:${email}`}
                                    className="text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors mt-2"
                                >
                                    Open in default mail app
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Footer;
