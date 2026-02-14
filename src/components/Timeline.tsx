import { GraduationCap, School, BookOpen } from 'lucide-react';

const educationData = [
    {
        institution: "Kendriya Vidyalaya AFS Bidar",
        course: "Schooling",
        status: "Completed",
        icon: School,
        description: "Foundation of my academic journey."
    },
    {
        institution: "Shree Mata Manikeshwari PU College Bidar",
        course: "Pre-University Course (PUC)",
        status: "Completed",
        icon: BookOpen,
        description: "Focused on Science and Mathematics."
    },
    {
        institution: "Guru Nanak Dev Engineering College Bidar",
        course: "B.Tech (Studying)",
        status: "In Progress",
        icon: GraduationCap,
        description: "Pursuing Bachelor of Technology."
    }
];

const Timeline = () => {
    return (
        <section id="about" className="relative w-full py-20 px-4 md:px-8 text-white z-10 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-gradient-x pb-2">
                        Education Journey
                    </h2>
                    <div className="h-1 w-48 md:w-96 mt-2 bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 animate-gradient-x drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" style={{ clipPath: 'polygon(0 50%, 50% 0, 100% 50%, 50% 100%)' }} />
                </div>

                {/* Mobile: Vertical Timeline */}
                <div className="md:hidden flex flex-col space-y-12 relative pl-8 border-l-2 border-white/10 ml-4">
                    {educationData.map((item, index) => (
                        <div key={index} className="relative group animate-in slide-in-from-left-4 duration-700" style={{ animationDelay: `${index * 200}ms` }}>
                            {/* Dot */}
                            <span className="absolute -left-[41px] top-0 bg-black p-2 rounded-full border-2 border-white/10 group-hover:border-yellow-400 transition-colors duration-300">
                                <item.icon className="w-5 h-5 text-blue-400 group-hover:text-yellow-400 transition-colors" />
                            </span>

                            {/* Card */}
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                                        {item.status}
                                    </span>
                                    <item.icon className="w-5 h-5 text-white/20" />
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">{item.institution}</h3>
                                <p className="text-gray-300 font-medium mt-1">{item.course}</p>
                                <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop: Horizontal Timeline */}
                <div className="hidden md:flex justify-between items-start relative min-h-[300px]">
                    {/* Connector Line */}
                    <div className="absolute top-6 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/20 via-white/20 to-yellow-500/20 rounded-full" />

                    {educationData.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center w-1/3 group animate-in fade-in zoom-in-50 duration-700"
                            style={{ animationDelay: `${index * 300}ms` }}
                        >
                            {/* Dot on the line */}
                            <div className="absolute top-0 w-12 h-12 rounded-full border-2 border-white/20 bg-black flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-yellow-400 shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer">
                                <item.icon className="w-5 h-5 text-blue-400 transition-colors group-hover:text-yellow-400" />
                            </div>

                            {/* Connector from dot to card */}
                            <div className="h-20 w-px bg-gradient-to-b from-white/20 to-transparent mt-6 group-hover:h-full transition-all duration-500 absolute top-6 -z-10 opacity-0 group-hover:opacity-100" />

                            {/* Content Card */}
                            <div className="mt-20 w-full px-4">
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-yellow-400/30 hover:-translate-y-2 group-hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                            {item.status}
                                        </span>
                                        <div className="h-px flex-1 bg-white/10 mx-4" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">{item.institution}</h3>
                                    <p className="text-base text-gray-300 font-medium mb-2">{item.course}</p>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
