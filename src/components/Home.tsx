import Timeline from './Timeline';
import DarkVeil from './DarkVeil';

const Home = () => {
    return (
        <main className="relative z-10 text-white animate-in fade-in duration-1000">
            <section className="relative flex flex-col items-center justify-center min-h-screen px-4 md:px-0 overflow-hidden font-sans">
                {/* Background limited to Hero section */}
                <div className="absolute inset-0 z-[-1]">
                    <DarkVeil speed={2.5} />
                    <div className="absolute inset-0 bg-black/30" /> {/* Overlay for better text readability */}
                </div>

                <div className="container max-w-5xl mx-auto flex flex-col items-center text-center z-10 pt-20">

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight animate-in fade-in zoom-in duration-1000">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
                            Welcome to
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-200">
                            Sushmita Projects
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                        Building immersive digital experiences with modern web technologies.
                        <span className="block mt-2 text-gray-400 text-sm">Creative • Professional • Innovative</span>
                    </p>

                    {/* Hero Image - Reduced size (approx 40% of previous max-w-4xl) */}
                    <div className="relative w-full max-w-sm mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 group">
                        <img
                            src="/src/assets/hero-image.png"
                            alt="Sushmita Projects Hero"
                            className="relative w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-black relative z-20">
                <Timeline />
            </section>
        </main>
    );
};

export default Home;
