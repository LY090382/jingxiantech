import React from 'react';
import { Hexagon, CircuitBoard, Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 relative overflow-hidden">
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-techBlue-600 via-techBlue-400 to-techBlue-600"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative">
                                {/* Logo matches Navbar style: Dark filled hexagon with circuit board */}
                                <Hexagon className="h-10 w-10 text-techBlue-500 fill-slate-900 stroke-techBlue-500 transition-colors shadow-sm rounded-full" strokeWidth={1.5} />
                                <CircuitBoard className="h-6 w-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <span className="font-bold text-2xl text-slate-900 tracking-[0.22em] leading-none">
                                    景贤<span className="text-techBlue-600">科技</span>
                                </span>
                                <span className="text-[9px] text-slate-500 uppercase tracking-[0.14em] font-mono mt-1 font-semibold whitespace-nowrap">
                                    - JINGXIAN TECH -
                                </span>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                            全球领先的半导体与电子封装材料供应商。我们致力于通过分子层面的创新，为高科技产业提供可靠的粘接与防护方案。
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-techBlue-600 hover:border-techBlue-200 hover:shadow-md transition-all">
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-techBlue-600 hover:border-techBlue-200 hover:shadow-md transition-all">
                                <Github className="h-4 w-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-techBlue-600 hover:border-techBlue-200 hover:shadow-md transition-all">
                                <Globe className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-6 border-l-2 border-techBlue-500 pl-3">产品中心</h3>
                        <ul className="space-y-3">
                            <li><Link to="/products?category=THERMAL" className="text-slate-600 hover:text-techBlue-600 text-sm transition-colors block hover:translate-x-1 duration-200">导热界面材料</Link></li>
                            <li><Link to="/products?category=ADHESIVE" className="text-slate-600 hover:text-techBlue-600 text-sm transition-colors block hover:translate-x-1 duration-200">结构粘接胶</Link></li>
                            <li><Link to="/products?category=COATING" className="text-slate-600 hover:text-techBlue-600 text-sm transition-colors block hover:translate-x-1 duration-200">三防涂覆材料</Link></li>
                            <li><Link to="/products?category=SEMICONDUCTOR" className="text-slate-600 hover:text-techBlue-600 text-sm transition-colors block hover:translate-x-1 duration-200">半导体封装 (Underfill)</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-6 border-l-2 border-techBlue-500 pl-3">应用领域</h3>
                        <ul className="space-y-3">
                            <li><Link to="/applications#automotive" className="text-slate-600 hover:text-techBlue-600 text-sm transition-colors block hover:translate-x-1 duration-200">新能源汽车 (NEV)</Link></li>
                            <li><Link to="/applications#consumer" className="text-slate-600 hover:text-techBlue-600 text-sm transition-colors block hover:translate-x-1 duration-200">消费电子</Link></li>
                            <li><Link to="/applications#semiconductor" className="text-slate-600 hover:text-techBlue-600 text-sm transition-colors block hover:translate-x-1 duration-200">半导体封装</Link></li>
                            <li><Link to="/applications#general-industry" className="text-slate-600 hover:text-techBlue-600 text-sm transition-colors block hover:translate-x-1 duration-200">其它工业</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-6 border-l-2 border-techBlue-500 pl-3">联系我们</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-600 text-sm group">
                                <MapPin className="h-5 w-5 text-techBlue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                <span className="group-hover:text-slate-900 transition-colors">深圳市龙华区锦绣时代广场1栋1单元1508</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 text-sm group">
                                <Phone className="h-5 w-5 text-techBlue-600 shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="font-mono group-hover:text-slate-900 transition-colors">+86 180 1878 4649</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 text-sm group">
                                <Mail className="h-5 w-5 text-techBlue-600 shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="group-hover:text-slate-900 transition-colors">sunzf@jingxian-tech.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs font-medium">
                        &copy; 2026 JingXian Technology. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-slate-500 hover:text-techBlue-600 text-xs font-medium transition-colors">隐私政策</a>
                        <a href="#" className="text-slate-500 hover:text-techBlue-600 text-xs font-medium transition-colors">服务条款</a>
                        <a href="#" className="text-slate-500 hover:text-techBlue-600 text-xs font-medium transition-colors">网站地图</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;