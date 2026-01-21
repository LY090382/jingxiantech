import React from 'react';
import { motion } from 'framer-motion';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { MILESTONES, RD_STATS } from '../constants';
import { Award, FlaskConical, Users, History } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <div className="bg-gradient-to-b from-blue-50 to-white py-20 border-b border-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 relative inline-block">
                        关于 景贤科技
                        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-techBlue-500 rounded-full"></span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-3xl leading-relaxed mt-4">
                        我们是一家专注于高端电子封装材料的国家高新技术企业。
                        通过整合全球技术资源，我们建立了从树脂合成、配方设计到应用测试的全链条研发能力。
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                
                {/* Stats & Chart Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                            <div className="p-2 bg-blue-50 rounded-lg border border-blue-100">
                                <FlaskConical className="text-techBlue-600 h-6 w-6" />
                            </div>
                            研发实力概览
                        </h2>
                        <div className="prose prose-slate text-slate-600 mb-10">
                            <p>
                                景贤科技拥有超过 2000 平方米的 CNAS 认证实验室，配备了国际先进的检测设备（如 DSC, TGA, 导热系数测试仪等）。
                                我们的核心技术团队由海归博士及行业专家组成，在特殊单体合成、树脂改性及纳米填料分散技术上拥有深厚积累。
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-techGreen-200 hover:shadow-md transition-all">
                                <div className="text-3xl font-bold text-techGreen-500 mb-2 font-mono">ISO</div>
                                <div className="text-slate-500 text-sm font-medium">9001 / 14001 认证</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-techBlue-200 hover:shadow-md transition-all">
                                <div className="text-3xl font-bold text-techBlue-600 mb-2 font-mono">IATF</div>
                                <div className="text-slate-500 text-sm font-medium">16949 车规认证</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-lg shadow-blue-900/5 h-[450px] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <FlaskConical className="h-48 w-48 text-techBlue-500" />
                        </div>
                        <h3 className="text-center text-techBlue-400 mb-6 text-xs font-bold uppercase tracking-widest">Enterprise Capability Score</h3>
                        <ResponsiveContainer width="100%" height="85%">
                            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={RD_STATS}>
                                <PolarGrid stroke="#e2e8f0" />
                                <PolarAngleAxis dataKey="name" tick={{ fill: '#475569', fontSize: 12, fontWeight: 600 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Radar
                                    name="JingXian"
                                    dataKey="value"
                                    stroke="#0284c7"
                                    strokeWidth={3}
                                    fill="#0ea5e9"
                                    fillOpacity={0.3}
                                />
                                <Tooltip 
                                    contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#0f172a', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    itemStyle={{ color: '#0284c7', fontWeight: 'bold' }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Timeline */}
                <div className="mb-24">
                    <h2 className="text-2xl font-bold text-slate-900 mb-12 flex items-center gap-3">
                         <div className="p-2 bg-blue-50 rounded-lg border border-blue-100">
                            <History className="text-techBlue-600 h-6 w-6" />
                        </div>
                        发展历程
                    </h2>
                    <div className="relative border-l-2 border-blue-200 ml-3 md:ml-6 space-y-12">
                        {MILESTONES.map((milestone, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 md:pl-12 group"
                            >
                                <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full border-4 border-white bg-blue-300 group-hover:bg-techBlue-600 transition-colors shadow-sm ring-1 ring-blue-100"></div>
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                                    <span className="text-techBlue-600 font-bold text-xl font-mono">{milestone.year}</span>
                                    <p className="text-slate-600 text-lg bg-white p-5 rounded-xl border border-slate-200 shadow-sm w-full group-hover:shadow-md group-hover:border-techBlue-200 transition-all">
                                        {milestone.event}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Culture/Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Award, title: "品质至上", desc: "严格遵循车规级质量管理体系，零缺陷是我们追求的目标。" },
                        { icon: FlaskConical, title: "持续创新", desc: "每年投入大量研发资金，在特殊材料合成领域不断突破。" },
                        { icon: Users, title: "客户导向", desc: "快速响应机制，为客户提供定制化配方开发与现场技术支持。" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 text-center hover:border-techBlue-400 hover:shadow-xl hover:shadow-techBlue-900/5 transition-all duration-300 group">
                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-techBlue-500 transition-colors duration-300">
                                <item.icon className="h-8 w-8 text-techBlue-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default About;