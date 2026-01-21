import React from 'react';
import { motion } from 'framer-motion';
import { Car, Smartphone, Factory, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { SOLUTIONS } from '../constants';

const Applications: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="relative py-24 bg-white border-b border-slate-200">
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-slate-50 rounded-lg shadow-sm border border-slate-100">
                            <Zap className="h-5 w-5 text-techBlue-600" />
                        </div>
                        <span className="text-techBlue-600 font-bold text-sm uppercase tracking-widest">Industry Solutions</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">全场景工程应用</h1>
                    <p className="text-xl text-slate-500 max-w-3xl border-l-4 border-techBlue-500 pl-6">
                        从精密消费电子到严苛的车规级应用，我们的材料技术赋能各行各业的创新与发展。
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="space-y-32">
                    {SOLUTIONS.map((solution, index) => {
                        const Icon = solution.iconName === 'Car' ? Car : solution.iconName === 'Smartphone' ? Smartphone : Factory;
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div 
                                key={solution.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
                            >
                                {/* Technical Drawing Style Visual */}
                                <div className="w-full lg:w-1/2 relative group">
                                    <div className="absolute inset-0 bg-techBlue-100 rounded-2xl transform rotate-2 transition-transform group-hover:rotate-4"></div>
                                    <div className="relative bg-white border border-slate-200 rounded-2xl p-2 shadow-2xl shadow-slate-200/50">
                                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100">
                                            {/* Grid on the drawing board */}
                                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:20px_20px] opacity-70"></div>
                                            
                                            {/* Stylized Icon */}
                                            <Icon className={`h-40 w-40 z-10 ${
                                                solution.id === 'automotive' ? 'text-techBlue-500' :
                                                solution.id === 'consumer' ? 'text-indigo-500' :
                                                'text-slate-600'
                                            } drop-shadow-lg opacity-90 transition-transform duration-500 group-hover:scale-105`} strokeWidth={1} />
                                            
                                            {/* Drawing Annotations */}
                                            <div className="absolute top-4 left-4 font-mono text-[10px] text-techBlue-600 font-bold bg-white/90 px-2 py-1 rounded border border-slate-100">
                                                FIG 1.0 // {solution.id.toUpperCase()}
                                            </div>
                                            
                                            {/* Decorative Circles */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-slate-200 rounded-full"></div>
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-dashed border-slate-200 rounded-full opacity-50 animate-[spin_60s_linear_infinite]"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2 space-y-8">
                                    <div className="border-b border-slate-200 pb-8">
                                        <div className="flex items-center gap-4 mb-3">
                                            <span className="font-mono text-techBlue-600 text-sm font-bold tracking-widest uppercase">Sector // 0{index + 1}</span>
                                        </div>
                                        <h2 className="text-3xl font-bold text-slate-900">{solution.title}</h2>
                                    </div>
                                    
                                    <p className="text-lg text-slate-600 leading-relaxed font-light">
                                        {solution.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                        {solution.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3 group/item">
                                                <div className="p-1 rounded-full bg-techBlue-50">
                                                    <CheckCircle2 className="h-4 w-4 text-techBlue-600" />
                                                </div>
                                                <span className="text-slate-700 text-sm font-medium group-hover/item:text-techBlue-700 transition-colors">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="pt-6">
                                        <button className="group inline-flex items-center text-slate-900 text-sm font-bold tracking-wide hover:text-techBlue-600 transition-colors">
                                            查看案例详情 
                                            <span className="ml-3 w-12 h-[2px] bg-slate-200 group-hover:bg-techBlue-600 transition-colors"></span>
                                            <ChevronRight className="h-4 w-4 -ml-1" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Applications;