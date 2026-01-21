import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Smartphone, Factory, CheckCircle2, ChevronRight, Zap, Cpu, ArrowLeft, Battery, Radio, ShieldCheck, Thermometer, Wind, Watch, Laptop, Home, Monitor, Microscope, Layers, Server, Sun, Stethoscope, Train, Anchor } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { SOLUTIONS } from '../constants';

// --- NEV Detail View Component ---
const NEVDetailView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const categories = [
        {
            id: 'battery',
            title: '动力电池 (Power Battery)',
            icon: Battery,
            desc: '针对 CTP/CTC 电池包设计的导热结构胶与防火隔热材料，确保电芯在充放电过程中的热管理安全与结构强度。',
            points: [
                { title: '结构粘接', detail: '电芯与侧板、电芯与液冷板的高强度粘接 (15MPa+)。' },
                { title: '导热管理', detail: '低比重导热结构胶 (1.5-3.0 W/m·K)，平衡减重与散热。' },
                { title: '防火灌封', detail: 'UL94 V-0 级阻燃灌封材料，防止热失控蔓延。' }
            ]
        },
        {
            id: 'drive',
            title: '电驱系统 (E-Drive)',
            icon: Wind,
            desc: '为电机、电控系统提供耐油、耐高温的密封与粘接方案，提升功率密度与运行可靠性。',
            points: [
                { title: '磁钢粘接', detail: '耐高温(180℃)环氧胶，用于转子磁钢固定。' },
                { title: '法兰密封', detail: '厌氧胶与液态密封垫(FIPG)，耐ATF油腐蚀。' },
                { title: '定子灌封', detail: '高导热耐电晕灌封树脂，提升电机散热效率。' }
            ]
        },
        {
            id: 'obc',
            title: '车载电源 (OBC/DCDC)',
            icon: Zap,
            desc: '解决高功率密度下的热管理难题，提供全灌封与局部导热填缝方案。',
            points: [
                { title: '整体灌封', detail: '双组份导热硅胶灌封，防震、防水、散热一体化。' },
                { title: '导热填缝', detail: '高导热凝胶 (3.5-6.0 W/m·K)，用于发热元器件与外壳间隙。' },
                { title: '电感固定', detail: '高粘接力环氧胶或室温硫化硅胶。' }
            ]
        },
        {
            id: 'electronics',
            title: '汽车电子 (Auto Electronics)',
            icon: Radio,
            desc: '包括 ADAS、LiDAR 及域控制器的精密组装材料，满足车规级双85可靠性测试。',
            points: [
                { title: 'LiDAR 密封', detail: '低挥发雾化 UV/湿气双固化胶，保护光学组件。' },
                { title: 'PCB 防护', detail: '环保型三防漆（Conformal Coating），防潮防盐雾。' },
                { title: '传感器粘接', detail: 'Active Alignment (AA) 工艺专用低温固化胶。' }
            ]
        }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="w-full"
        >
            <button 
                onClick={onBack}
                className="flex items-center gap-2 text-slate-500 hover:text-techBlue-600 font-bold mb-8 transition-colors group"
            >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                返回应用列表
            </button>

            {/* NEV Hero */}
            <div className="relative rounded-3xl overflow-hidden mb-16 border border-slate-200 bg-slate-900 shadow-2xl">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img 
                        src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop" 
                        alt="EV Chassis" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
                
                <div className="relative z-20 p-12 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-techBlue-600/20 border border-techBlue-500/30 text-techBlue-400 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                        <Car className="h-4 w-4" />
                        Automotive Solutions
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">新能源汽车全栈解决方案</h2>
                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        随着新能源汽车向高电压（800V）、高集成度（CTP/CTC）发展，材料面临着前所未有的挑战。
                        景贤科技提供从动力电池热管理到电驱系统密封的完整材料组合，助力车企通过严苛的可靠性验证。
                    </p>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-white/80 bg-white/10 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
                            <ShieldCheck className="h-5 w-5 text-green-400" />
                            <span className="text-sm font-medium">通过 IATF16949 认证</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80 bg-white/10 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
                            <Thermometer className="h-5 w-5 text-orange-400" />
                            <span className="text-sm font-medium">-40℃ ~ 150℃ 耐温性</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.map((item, idx) => (
                    <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-techBlue-900/5 hover:border-techBlue-200 transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-6">
                            <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-techBlue-50 transition-colors">
                                <item.icon className="h-8 w-8 text-slate-700 group-hover:text-techBlue-600 transition-colors" />
                            </div>
                            <span className="font-mono text-slate-300 text-sm font-bold">0{idx + 1}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 border-b border-slate-100 pb-6 min-h-[80px]">
                            {item.desc}
                        </p>
                        
                        <ul className="space-y-4">
                            {item.points.map((point, pIdx) => (
                                <li key={pIdx} className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-techBlue-500"></div>
                                        <span className="text-slate-900 font-bold text-sm">{point.title}</span>
                                    </div>
                                    <span className="text-slate-500 text-xs pl-3.5 leading-relaxed">{point.detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Material Recommendation CTA */}
            <div className="mt-16 bg-slate-900 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">需要获取详细的技术规格书?</h3>
                    <p className="text-slate-400">下载《新能源汽车胶粘剂选型指南 2024版》，包含 TDS 与应用案例。</p>
                </div>
                <button className="whitespace-nowrap px-8 py-3 bg-techBlue-600 hover:bg-techBlue-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-techBlue-600/30">
                    下载选型手册 (PDF)
                </button>
            </div>
        </motion.div>
    );
};

// --- Consumer Detail View Component ---
const ConsumerDetailView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const categories = [
        {
            id: 'smartphone',
            title: '智能手机 (Smartphones)',
            icon: Smartphone,
            desc: '针对窄边框设计的反应型热熔胶与低温固化结构胶，提供卓越的耐冲击性与IP68级防水密封。',
            points: [
                { title: '窄边框粘接', detail: 'PUR热熔胶与低温环氧胶，适应OLED柔性屏组装。' },
                { title: '摄像头模组', detail: 'AA工艺专用UV固化胶，确保光轴精准对位。' },
                { title: '整机防水', detail: '可返修结构胶，满足IP68防水等级与跌落测试。' }
            ]
        },
        {
            id: 'wearable',
            title: '智能穿戴 (Wearables)',
            icon: Watch,
            desc: '为TWS耳机与智能手表提供生物相容性认证材料，兼顾微型化组装与人体接触安全。',
            points: [
                { title: 'TWS 耳机组装', detail: '耐耳油、耐汗液腐蚀的UV密封胶。' },
                { title: '传感器封装', detail: '低应力底部填充胶，保护心率/血氧传感器。' },
                { title: '磁吸充电', detail: '耐磨损涂层与强力磁铁粘接方案。' }
            ]
        },
        {
            id: 'laptop',
            title: '平板与笔电 (Tablets & Laptops)',
            icon: Laptop,
            desc: '大尺寸屏幕全贴合技术与高性能处理器散热方案，提升轻薄本的结构刚性与性能释放。',
            points: [
                { title: '屏幕结构胶', detail: '高初粘力丙烯酸结构胶，快速固定大尺寸面板。' },
                { title: 'CPU/GPU 散热', detail: '相变导热材料 (PCM) 与高导热凝胶，替代传统硅脂。' },
                { title: '键盘组装', detail: '背光板固定用压敏胶与UV胶。' }
            ]
        },
        {
            id: 'smarthome',
            title: '智能家居 (Smart Home)',
            icon: Home,
            desc: '服务于智能音箱、扫地机器人等IoT设备，提供长期可靠的结构粘接与电路板三防保护。',
            points: [
                { title: '结构密封', detail: '低挥发硅胶，防止气体污染精密传感器。' },
                { title: '主板防护', detail: '环保型水基三防漆，防潮防霉菌。' },
                { title: '电机固定', detail: '厌氧胶与抗震结构胶，降低运行噪音。' }
            ]
        }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="w-full"
        >
            <button 
                onClick={onBack}
                className="flex items-center gap-2 text-slate-500 hover:text-techBlue-600 font-bold mb-8 transition-colors group"
            >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                返回应用列表
            </button>

            {/* Consumer Hero */}
            <div className="relative rounded-3xl overflow-hidden mb-16 border border-slate-200 bg-white shadow-2xl">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2001&auto=format&fit=crop" 
                        alt="Consumer Electronics" 
                        className="w-full h-full object-cover opacity-90"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent z-10"></div>
                
                <div className="relative z-20 p-12 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 border border-white/30 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                        <Smartphone className="h-4 w-4" />
                        Consumer Electronics
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">消费电子精密组装方案</h2>
                    <p className="text-lg text-slate-200 leading-relaxed mb-8">
                        从折叠屏手机到微型可穿戴设备，我们的材料解决方案专注于解决更窄边框、更高集成度带来的组装与散热挑战。
                        同时满足 IP68 防水、抗跌落及环保无卤的高标准要求。
                    </p>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-white/90 bg-white/10 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
                            <ShieldCheck className="h-5 w-5 text-techBlue-400" />
                            <span className="text-sm font-medium">IP68 防水等级支持</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/90 bg-white/10 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
                            <Monitor className="h-5 w-5 text-purple-400" />
                            <span className="text-sm font-medium">精密窄边框工艺</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.map((item, idx) => (
                    <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-indigo-900/5 hover:border-indigo-200 transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-6">
                            <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-indigo-50 transition-colors">
                                <item.icon className="h-8 w-8 text-slate-700 group-hover:text-indigo-600 transition-colors" />
                            </div>
                            <span className="font-mono text-slate-300 text-sm font-bold">0{idx + 1}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 border-b border-slate-100 pb-6 min-h-[80px]">
                            {item.desc}
                        </p>
                        
                        <ul className="space-y-4">
                            {item.points.map((point, pIdx) => (
                                <li key={pIdx} className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
                                        <span className="text-slate-900 font-bold text-sm">{point.title}</span>
                                    </div>
                                    <span className="text-slate-500 text-xs pl-3.5 leading-relaxed">{point.detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-16 bg-gradient-to-r from-indigo-900 to-slate-900 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">探索更多消费电子应用案例</h3>
                    <p className="text-indigo-200">下载《2024 消费电子组装与防护材料白皮书》，获取完整解决方案。</p>
                </div>
                <button className="whitespace-nowrap px-8 py-3 bg-white text-indigo-900 font-bold rounded-lg transition-colors shadow-lg hover:bg-indigo-50">
                    下载白皮书 (PDF)
                </button>
            </div>
        </motion.div>
    );
};

// --- Semiconductor Detail View Component ---
const SemiconductorDetailView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const categories = [
        {
            id: 'flipchip',
            title: '倒装芯片 (Flip Chip)',
            icon: Cpu,
            desc: '专为倒装芯片封装设计的高性能底部填充胶 (Capillary Underfill, CUF)，具有优异的流动性与可靠性。',
            points: [
                { title: '快速流动', detail: '优化的流变特性，适应微小间隙填充，无空洞。' },
                { title: '低应力', detail: '低CTE设计，降低芯片与基板间的热失配应力。' },
                { title: '高可靠性', detail: '通过 JEDEC Level 1 吸湿敏感度测试与热循环测试。' }
            ]
        },
        {
            id: 'sip',
            title: '系统级封装 (SiP)',
            icon: Layers,
            desc: '针对高集成度 SiP 模组的成型底部填充胶 (Molding Underfill, MUF) 与电磁屏蔽材料。',
            points: [
                { title: 'EMI 屏蔽', detail: '高导电喷涂材料，提供卓越的电磁干扰屏蔽效能。' },
                { title: '窄间距填充', detail: '超细填料技术，适用于高密度器件间隙。' },
                { title: '翘曲控制', detail: '低收缩率配方，有效控制封装体翘曲。' }
            ]
        },
        {
            id: 'dieattach',
            title: '晶圆粘接 (Die Attach)',
            icon: Server,
            desc: '导电与非导电固晶胶 (Die Attach Paste)，适用于引线框架与基板封装，提供卓越的导热与导电性能。',
            points: [
                { title: '高导热', detail: '银粉填充导电胶，导热率高达 30 W/m·K 以上。' },
                { title: '点胶性能', detail: '优异的触变性，杜绝拉丝与塌陷，适合高速点胶。' },
                { title: '强粘接力', detail: '对铜、银、PPF 等多种界面具有优异的附着力。' }
            ]
        },
        {
            id: 'sensor',
            title: 'MEMS & 传感器',
            icon: Microscope,
            desc: '用于压力传感器、麦克风等 MEMS 器件的低模量粘接剂，减少应力对敏感器件性能的影响。',
            points: [
                { title: '低模量', detail: '固化后保持柔韧，不仅固定器件且不产生额外应力。' },
                { title: '化学惰性', detail: '低挥发份，避免污染敏感的 MEMS 结构。' },
                { title: '精准控制', detail: '可控的溢胶量与胶层厚度，保障器件精度。' }
            ]
        }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="w-full"
        >
            <button 
                onClick={onBack}
                className="flex items-center gap-2 text-slate-500 hover:text-techBlue-600 font-bold mb-8 transition-colors group"
            >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                返回应用列表
            </button>

            {/* Semiconductor Hero */}
            <div className="relative rounded-3xl overflow-hidden mb-16 border border-slate-200 bg-slate-900 shadow-2xl">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img 
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
                        alt="Semiconductor Wafer" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
                
                <div className="relative z-20 p-12 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-techBlue-600/20 border border-techBlue-500/30 text-techBlue-400 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                        <Cpu className="h-4 w-4" />
                        Semiconductor Packaging
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">半导体先进封装材料</h2>
                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        从传统的引线键合到先进的 2.5D/3D 封装，我们提供全系列的底部填充胶 (Underfill)、固晶胶 (Die Attach) 及封装树脂。
                        助力芯片制造突破摩尔定律，实现更高性能与更小尺寸。
                    </p>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-white/80 bg-white/10 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
                            <Microscope className="h-5 w-5 text-sky-400" />
                            <span className="text-sm font-medium">纳米级填料技术</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80 bg-white/10 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
                            <CheckCircle2 className="h-5 w-5 text-green-400" />
                            <span className="text-sm font-medium">MSL Level 1 标准</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.map((item, idx) => (
                    <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-sky-900/5 hover:border-sky-200 transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-6">
                            <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-sky-50 transition-colors">
                                <item.icon className="h-8 w-8 text-slate-700 group-hover:text-sky-600 transition-colors" />
                            </div>
                            <span className="font-mono text-slate-300 text-sm font-bold">0{idx + 1}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 border-b border-slate-100 pb-6 min-h-[80px]">
                            {item.desc}
                        </p>
                        
                        <ul className="space-y-4">
                            {item.points.map((point, pIdx) => (
                                <li key={pIdx} className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-sky-500"></div>
                                        <span className="text-slate-900 font-bold text-sm">{point.title}</span>
                                    </div>
                                    <span className="text-slate-500 text-xs pl-3.5 leading-relaxed">{point.detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            
             {/* CTA */}
             <div className="mt-16 bg-slate-900 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">获取半导体材料 TDS 表</h3>
                    <p className="text-slate-400">联系我们的应用工程师，获取针对您特定封装形式的材料推荐。</p>
                </div>
                <button className="whitespace-nowrap px-8 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-sky-600/30">
                    联系封装专家
                </button>
            </div>
        </motion.div>
    );
};

// --- Industrial Detail View Component ---
const IndustrialDetailView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const categories = [
        {
            id: 'energy',
            title: '可再生能源 (Renewable Energy)',
            icon: Sun,
            desc: '为光伏逆变器、风电叶片及储能系统提供耐候性极佳的密封粘接与灌封方案。',
            points: [
                { title: '逆变器灌封', detail: '高导热硅胶，耐老化，保障户外长期运行。' },
                { title: '组件边框密封', detail: '高粘接力硅胶，耐湿热老化，防止水汽进入。' },
                { title: '风电叶片修补', detail: '高强度结构胶，耐冲击，耐疲劳。' }
            ]
        },
        {
            id: 'medical',
            title: '医疗器械 (Medical Devices)',
            icon: Stethoscope,
            desc: '符合 ISO 10993 生物相容性认证的医用级胶粘剂，用于导管、针头及外壳组装。',
            points: [
                { title: '针头粘接', detail: '快速固化 UV 胶，高拔出力，耐灭菌处理。' },
                { title: '导管组装', detail: '柔性 UV/可见光固化胶，对难粘塑料附着力好。' },
                { title: '设备外壳', detail: '耐化学品腐蚀，耐清洗剂擦拭。' }
            ]
        },
        {
            id: 'rail',
            title: '轨道交通 (Rail Transit)',
            icon: Train,
            desc: '满足 EN45545 阻燃标准的灌封与密封材料，应用于牵引变流器与内饰粘接。',
            points: [
                { title: 'IGBT 模块', detail: '高绝缘耐高压灌封胶，防止局部放电。' },
                { title: '内饰粘接', detail: '低烟无毒结构胶，保障乘客安全。' },
                { title: '传感器防护', detail: '耐震动灌封，适应列车运行环境。' }
            ]
        },
        {
            id: 'general',
            title: '通用工业 (General Industry)',
            icon: Anchor,
            desc: '广泛应用于电机、泵、家电及重型机械的结构粘接、螺纹锁固与平面密封。',
            points: [
                { title: '结构粘接', detail: '替代机械连接，减轻重量，应力分布均匀。' },
                { title: '平面密封', detail: '厌氧型垫片胶 (FIPG)，耐油耐压，密封可靠。' },
                { title: '螺纹锁固', detail: '防止震动松脱，防止螺纹锈蚀。' }
            ]
        }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="w-full"
        >
            <button 
                onClick={onBack}
                className="flex items-center gap-2 text-slate-500 hover:text-techBlue-600 font-bold mb-8 transition-colors group"
            >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                返回应用列表
            </button>

            {/* Industrial Hero */}
            <div className="relative rounded-3xl overflow-hidden mb-16 border border-slate-200 bg-slate-800 shadow-2xl">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img 
                        src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=2055&auto=format&fit=crop" 
                        alt="Industrial Robotic Arm" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
                
                <div className="relative z-20 p-12 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-techBlue-600/20 border border-techBlue-500/30 text-techBlue-400 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                        <Factory className="h-4 w-4" />
                        General Industry & Energy
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">工业与新能源解决方案</h2>
                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        从清洁能源的高效转换到医疗器械的生命守护，我们的材料在各个工业领域发挥着关键作用。
                        提供高可靠性、耐候性及符合行业严苛标准的粘接与防护方案。
                    </p>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-white/80 bg-white/10 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
                            <Sun className="h-5 w-5 text-yellow-400" />
                            <span className="text-sm font-medium">耐候性测试认证</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80 bg-white/10 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
                            <Stethoscope className="h-5 w-5 text-pink-400" />
                            <span className="text-sm font-medium">ISO 10993 医疗级</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.map((item, idx) => (
                    <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-emerald-900/5 hover:border-emerald-200 transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-6">
                            <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-emerald-50 transition-colors">
                                <item.icon className="h-8 w-8 text-slate-700 group-hover:text-emerald-600 transition-colors" />
                            </div>
                            <span className="font-mono text-slate-300 text-sm font-bold">0{idx + 1}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 border-b border-slate-100 pb-6 min-h-[80px]">
                            {item.desc}
                        </p>
                        
                        <ul className="space-y-4">
                            {item.points.map((point, pIdx) => (
                                <li key={pIdx} className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                                        <span className="text-slate-900 font-bold text-sm">{point.title}</span>
                                    </div>
                                    <span className="text-slate-500 text-xs pl-3.5 leading-relaxed">{point.detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            
             {/* CTA */}
             <div className="mt-16 bg-gradient-to-br from-emerald-900 to-slate-900 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">寻找工业胶粘剂解决方案？</h3>
                    <p className="text-emerald-100">我们提供全面的结构粘接与密封产品线，满足您的严苛工业需求。</p>
                </div>
                <button className="whitespace-nowrap px-8 py-3 bg-white text-emerald-900 font-bold rounded-lg transition-colors shadow-lg hover:bg-emerald-50">
                    下载产品目录
                </button>
            </div>
        </motion.div>
    );
};

// --- Main Application List Component ---
const Applications: React.FC = () => {
    // 'automotive' | 'consumer' | 'semiconductor' | 'general' | null
    const [activeDetail, setActiveDetail] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            // Remove the '#' character
            const id = location.hash.replace('#', '');
            
            // Handle scrolling or view switching based on hash
            if (['automotive', 'consumer', 'semiconductor', 'general-industry'].includes(id)) {
                setActiveDetail(null); // Reset to list view first to allow scrolling to the item
                
                setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 100);
            }
        }
    }, [location]);

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
                <AnimatePresence mode="wait">
                    {activeDetail === 'automotive' ? (
                        <NEVDetailView key="nev-detail" onBack={() => setActiveDetail(null)} />
                    ) : activeDetail === 'consumer' ? (
                        <ConsumerDetailView key="consumer-detail" onBack={() => setActiveDetail(null)} />
                    ) : activeDetail === 'semiconductor' ? (
                         <SemiconductorDetailView key="semiconductor-detail" onBack={() => setActiveDetail(null)} />
                    ) : activeDetail === 'general-industry' ? (
                        <IndustrialDetailView key="industrial-detail" onBack={() => setActiveDetail(null)} />
                    ) : (
                        <div key="list" className="space-y-32">
                            {SOLUTIONS.map((solution, index) => {
                                const Icon = solution.iconName === 'Car' ? Car : 
                                            solution.iconName === 'Smartphone' ? Smartphone : 
                                            solution.iconName === 'Cpu' ? Cpu : Factory;
                                const isEven = index % 2 === 0;

                                return (
                                    <motion.div 
                                        key={solution.id}
                                        id={solution.id}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6 }}
                                        className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center scroll-mt-28`}
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
                                                        solution.id === 'semiconductor' ? 'text-sky-500' :
                                                        'text-emerald-600'
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
                                                <button 
                                                    onClick={() => {
                                                        if (solution.id === 'automotive') {
                                                            setActiveDetail('automotive');
                                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                                        } else if (solution.id === 'consumer') {
                                                            setActiveDetail('consumer');
                                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                                        } else if (solution.id === 'semiconductor') {
                                                            setActiveDetail('semiconductor');
                                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                                        } else if (solution.id === 'general-industry') {
                                                            setActiveDetail('general-industry');
                                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                                        }
                                                    }}
                                                    className="group inline-flex items-center text-slate-900 text-sm font-bold tracking-wide hover:text-techBlue-600 transition-colors"
                                                >
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
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Applications;