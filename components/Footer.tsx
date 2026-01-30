import React from 'react';
import { Hexagon, CircuitBoard, Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSET_URLS } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 relative overflow-hidden">
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-techBlue-600 via-techBlue-400 to-techBlue-600"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    <div className="lg:col-span-4">
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

                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-6 border-l-2 border-techBlue-500 pl-3">产品中心</h3>
                        <ul className="space-y-3">
                            <li><Link to="/products?category=THERMAL" className="text-slate-600 hover:text-techBlue-600 text-sm transition-colors block hover:translate-x-1 duration-200">导热界面材料</Link></li>
                            <li><Link to="/products?category=ADHESIVE" className="text-slate-600 hover:text-techBlue-600 text-sm transition-colors block hover:translate-x-1 duration-200">结构粘接胶</Link></li>
                            <li><Link to="/products?category=COATING" className="text-slate-600 hover:text-techBlue-600 text-sm transition-colors block hover:translate-x-1 duration-200">三防涂覆材料</Link></li>
                            <li><Link to="/products?category=SEMICONDUCTOR" className="text-slate-600 hover:text-techBlue-600 text-sm transition-colors block hover:translate-x-1 duration-200">半导体封装 (Underfill)</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-6 border-l-2 border-techBlue-500 pl-3">应用领域</h3>
                        <ul className="space-y-3">
                            <li><Link to="/applications#automotive" className="text-slate-600 hover:text-techBlue-600 text-sm transition-colors block hover:translate-x-1 duration-200">新能源汽车 (NEV)</Link></li>
                            <li><Link to="/applications#consumer" className="text-slate-600 hover:text-techBlue-600 text-sm transition-colors block hover:translate-x-1 duration-200">消费电子</Link></li>
                            <li><Link to="/applications#semiconductor" className="text-slate-600 hover:text-techBlue-600 text-sm transition-colors block hover:translate-x-1 duration-200">半导体封装</Link></li>
                            <li><Link to="/applications#general-industry" className="text-slate-600 hover:text-techBlue-600 text-sm transition-colors block hover:translate-x-1 duration-200">其它工业</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-6 border-l-2 border-techBlue-500 pl-3">联系我们</h3>
                        <div className="flex items-start gap-4">
                            <ul className="space-y-4 flex-1 min-w-0">
                                <li className="flex items-start gap-3 text-slate-600 text-sm group">
                                    <MapPin className="h-5 w-5 text-techBlue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                    <span className="group-hover:text-slate-900 transition-colors">深圳市龙华区锦绣时代广场1栋1单元1508</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-600 text-sm group">
                                    <Phone className="h-5 w-5 text-techBlue-600 shrink-0 group-hover:scale-110 transition-transform" />
                                    <a href="tel:+8618018784649" className="font-mono group-hover:text-slate-900 transition-colors hover:underline">+86 180 1878 4649</a>
                                </li>
                                <li className="flex items-center gap-3 text-slate-600 text-sm group">
                                    <Mail className="h-5 w-5 text-techBlue-600 shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="group-hover:text-slate-900 transition-colors">sunzf@jingxian-tech.com</span>
                                </li>
                            </ul>
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-2 rounded-xl border border-green-100 flex flex-col items-center shrink-0">
                                <div className="flex items-center gap-1 mb-1.5">
                                    <svg className="w-3.5 h-3.5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
                                    </svg>
                                    <span className="text-xs font-bold text-green-700">微信</span>
                                </div>
                                <img src={ASSET_URLS.wechatQr} alt="微信二维码" width={72} height={72} className="w-[72px] h-[72px] rounded-lg shadow-sm bg-white p-0.5 object-cover block" />
                            </div>
                        </div>
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