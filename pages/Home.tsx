import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Layers, Zap, Globe, ShieldCheck, Microscope, Database, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
    <div className="relative overflow-hidden bg-slate-50 min-h-[90vh] flex items-center border-b border-slate-200">
        {/* Abstract Technical Background - Professional Blue/Gray */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-slate-50 to-techBlue-50/40">
             <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.05] text-slate-900"></div>
             {/* Subtle Orbs - Less neon, more corporate */}
             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-techBlue-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-techBlue-700 text-xs font-mono mb-8 font-bold tracking-wide">
                        <span className="w-2 h-2 rounded-full bg-techBlue-600 animate-pulse"></span>
                        ADVANCED MATERIALS v2.4
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                        精密工程的<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-techBlue-700 to-techBlue-500">
                            隐形力量
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
                        专为严苛环境设计。我们提供半导体封装、传感器保护及电子粘接的整体解决方案，助力下一代科技突破极限。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/products" className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-techBlue-600 hover:bg-techBlue-700 transition-all shadow-lg shadow-techBlue-600/20 relative overflow-hidden">
                            浏览产品目录
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-base font-semibold rounded-lg text-slate-700 bg-white hover:border-techBlue-500 hover:text-techBlue-700 hover:bg-slate-50 transition-all shadow-sm">
                            联系工程师
                        </Link>
                    </div>
                </motion.div>

                {/* Hero Visual - Professional Lab Style */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative aspect-square max-w-lg mx-auto">
                        <div className="absolute inset-0 bg-white/60 rounded-full border border-slate-200 backdrop-blur-xl flex items-center justify-center shadow-2xl shadow-slate-200/50">
                            <div className="absolute inset-8 border border-dashed border-slate-300 rounded-full animate-[spin_60s_linear_infinite]"></div>
                        </div>
                        
                        {/* Central Image - Crisp */}
                        <div className="absolute inset-[15%] rounded-full overflow-hidden shadow-inner border-4 border-white ring-1 ring-slate-100">
                             <img 
                                src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070&auto=format&fit=crop" 
                                alt="Chip Wafer" 
                                className="w-full h-full object-cover"
                            />
                            {/* Blue overlay tint */}
                            <div className="absolute inset-0 bg-techBlue-900/10 mix-blend-overlay"></div>
                        </div>

                        {/* Floating Cards - Minimalist White & Blue */}
                        <motion.div 
                            animate={{ y: [-15, 15, -15] }} 
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-12 -right-4 bg-white border border-slate-100 p-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] w-52"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-slate-50 rounded-lg">
                                    <Activity className="h-5 w-5 text-techBlue-600" />
                                </div>
                                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Thermal Cond.</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-2">
                                <div className="h-full bg-techBlue-500 w-[85%]"></div>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-slate-400 text-xs">Rating</span>
                                <span className="text-slate-900 font-bold font-mono text-lg">3.0 <span className="text-xs text-slate-500 font-sans">W/m·K</span></span>
                            </div>
                        </motion.div>

                        <motion.div 
                            animate={{ y: [15, -15, 15] }} 
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-16 -left-8 bg-white border border-slate-100 p-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] w-52"
                        >
                             <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-slate-50 rounded-lg">
                                    <ShieldCheck className="h-5 w-5 text-techBlue-600" />
                                </div>
                                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Reliability</span>
                            </div>
                            <div className="text-slate-900 font-bold text-sm mb-1">AEC-Q100 Compliant</div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-techBlue-500"></span>
                                <span className="text-techBlue-700 text-xs font-semibold">Verified Pass</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
);

const FeatureCard = ({ icon: Icon, title, desc, delay, stat }: { icon: any, title: string, desc: string, delay: number, stat: string }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-techBlue-500 shadow-sm hover:shadow-xl hover:shadow-techBlue-900/5 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
    >
        <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
            <Icon className="h-32 w-32 text-techBlue-900" />
        </div>
        
        <div className="relative z-10">
            <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-techBlue-600 group-hover:border-techBlue-600 group-hover:text-white text-slate-600 transition-all duration-300">
                <Icon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-techBlue-700 transition-colors">{title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm mb-8">{desc}</p>
            
            <div className="border-t border-slate-100 pt-5 mt-auto flex items-center justify-between">
                <span className="font-mono text-slate-400 text-xs uppercase tracking-wider">Spec Class</span>
                <span className="font-mono text-techBlue-700 font-bold text-lg">{stat}</span>
            </div>
        </div>
    </motion.div>
);

const Home: React.FC = () => {
    return (
        <div className="bg-slate-50">
            <HeroSection />

            {/* Technical Capability Section - Clean Gray/White */}
            <section className="py-24 relative border-b border-slate-200 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-techBlue-600 font-bold text-xs uppercase tracking-widest mb-3 block">Core Competencies</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">材料科学与工程的<span className="text-techBlue-600">完美融合</span></h2>
                        </div>
                        <Link to="/applications" className="text-slate-600 hover:text-techBlue-700 font-medium flex items-center text-sm group transition-colors bg-slate-50 px-4 py-2 rounded-full border border-slate-200 hover:border-techBlue-300 hover:bg-white shadow-sm">
                            查看所有解决方案 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard 
                            icon={Cpu}
                            title="半导体封装"
                            desc="Underfill 与 Die Attach 材料，专为先进制程芯片设计，解决微观层面的应力与散热挑战。"
                            stat="PKG Level"
                            delay={0.1}
                        />
                        <FeatureCard 
                            icon={Layers}
                            title="电子胶粘剂"
                            desc="精密结构粘接与密封。从UV固化到反应型热熔胶，满足IPX8防水与抗跌落要求。"
                            stat="High Bond"
                            delay={0.2}
                        />
                        <FeatureCard 
                            icon={Zap}
                            title="热管理系统"
                            desc="高导热灌封胶与凝胶，确保IGBT、LiDAR及电池模组在极端温度下的稳定运行。"
                            stat="3.0+ W/mK"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* R&D Highlight - Updated layout with reliable image */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                 {/* Decorative background blobs */}
                 <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-techBlue-50 rounded-full blur-[100px] pointer-events-none"></div>

                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Image / Visualization Column */}
                        <div className="relative">
                            {/* Blue border frame to match screenshot style instead of just image */}
                            <div className="relative w-full rounded-2xl border-4 border-techBlue-500/20 bg-white shadow-2xl shadow-slate-200/50 overflow-hidden aspect-[4/3]">
                                <img 
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                                    alt="R&D Lab Equipment" 
                                    className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-techBlue-900/10 to-transparent"></div>
                            </div>
                            
                            {/* Overlay Stats Card - Positioned to the right of the image/box */}
                            <div className="absolute top-1/2 -right-12 -translate-y-1/2 bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 max-w-xs border border-slate-100 hidden md:block">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-techBlue-50 rounded-lg text-techBlue-600 border border-techBlue-100">
                                        <Database className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-slate-900 font-mono tracking-tight">500+</div>
                                        <div className="text-xs text-techBlue-600 uppercase font-bold tracking-wide">Formulations</div>
                                    </div>
                                </div>
                                <div className="text-sm text-slate-600 leading-relaxed">
                                    基于海量实验数据的配方库，可快速响应客户定制需求。
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-[2px] bg-techBlue-600"></div>
                                <span className="text-techBlue-600 font-bold text-sm tracking-widest uppercase">R&D Center</span>
                            </div>
                            
                            {/* Heading - Increased size and line height to prevent cutoff */}
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight pt-2">
                                从分子结构<br />
                                定义<span className="text-techBlue-600">产品性能</span>
                            </h2>
                            
                            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                                景贤科技深耕半导体与电子封装领域，致力于核心材料的自主研发与技术突破，拥有 2000m² CNAS 认证实验室。我们不只是提供胶水，而是提供基于材料科学的可靠性保障。
                            </p>
                            
                            <div className="grid grid-cols-2 gap-y-10 gap-x-12 mt-12 mb-10">
                                <div>
                                    <div className="text-4xl font-bold text-slate-900 font-mono mb-2">IATF<span className="text-slate-300 text-2xl ml-2 font-light">16949</span></div>
                                    <div className="text-sm font-medium text-slate-500">车规级质量体系认证</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-slate-900 font-mono mb-2">CNAS<span className="text-slate-300 text-2xl ml-2 font-light">L1234</span></div>
                                    <div className="text-sm font-medium text-slate-500">国家认可实验室</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-slate-900 font-mono mb-2">50<span className="text-techBlue-500 text-2xl ml-1">+</span></div>
                                    <div className="text-sm font-medium text-slate-500">核心发明专利</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-slate-900 font-mono mb-2">10k<span className="text-techBlue-500 text-2xl ml-1">m²</span></div>
                                    <div className="text-sm font-medium text-slate-500">现代化制造中心</div>
                                </div>
                            </div>

                            <div>
                                <Link to="/about" className="group text-slate-900 border-b-2 border-slate-200 pb-1 hover:border-techBlue-600 hover:text-techBlue-600 transition-all inline-flex items-center gap-2 text-sm font-bold tracking-wide">
                                    深入了解研发流程 <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                 </div>
            </section>
        </div>
    );
};

export default Home;