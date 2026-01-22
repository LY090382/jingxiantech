import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
            // Reset after 3 seconds
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <div className="bg-slate-50 min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">联系与支持</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        有关于产品规格、样品申请或技术咨询的问题？请随时联系我们，我们的工程师团队将尽快回复。
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-8">联系方式</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-5">
                                    <div className="bg-blue-50 p-3 rounded-xl">
                                        <MapPin className="h-6 w-6 text-techBlue-600" />
                                    </div>
                                    <div>
                                        <p className="text-slate-900 font-bold text-lg">公司总部</p>
                                        <p className="text-slate-500 mt-2 leading-relaxed">
                                            深圳市龙华区锦绣时代广场1栋1单元1508
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-5">
                                    <div className="bg-blue-50 p-3 rounded-xl">
                                        <Phone className="h-6 w-6 text-techBlue-600" />
                                    </div>
                                    <div>
                                        <p className="text-slate-900 font-bold text-lg">电话咨询</p>
                                        <p className="text-slate-500 mt-2 text-lg font-mono">+86 180 1878 4649</p>
                                        <p className="text-slate-400 text-sm mt-1">周一至周五, 9:00 - 18:00</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="bg-blue-50 p-3 rounded-xl">
                                        <Mail className="h-6 w-6 text-techBlue-600" />
                                    </div>
                                    <div>
                                        <p className="text-slate-900 font-bold text-lg">电子邮件</p>
                                        <p className="text-slate-500 mt-2">sunzf@jingxian-tech.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-techBlue-600 to-techBlue-800 p-8 rounded-2xl text-white shadow-xl">
                            <h3 className="text-xl font-bold mb-3">需要样品测试？</h3>
                            <p className="text-blue-100 mb-6 leading-relaxed">
                                我们为企业客户提供免费样品测试服务。请在留言中注明您的项目需求和应用场景，我们的技术支持将在 24 小时内与您联系。
                            </p>
                            <div className="h-1 w-20 bg-blue-400/50 rounded-full"></div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8">在线留言</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">姓名</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-techBlue-500 focus:ring-2 focus:ring-techBlue-500/20 transition-all placeholder:text-slate-400"
                                        placeholder="您的姓名"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">电子邮箱</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-techBlue-500 focus:ring-2 focus:ring-techBlue-500/20 transition-all placeholder:text-slate-400"
                                        placeholder="name@company.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-2">主题</label>
                                <select 
                                    id="subject" 
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-techBlue-500 focus:ring-2 focus:ring-techBlue-500/20 transition-all"
                                >
                                    <option>产品咨询</option>
                                    <option>样品申请</option>
                                    <option>技术支持</option>
                                    <option>商务合作</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">留言内容</label>
                                <textarea 
                                    id="message" 
                                    rows={4} 
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-techBlue-500 focus:ring-2 focus:ring-techBlue-500/20 transition-all placeholder:text-slate-400"
                                    placeholder="请描述您的需求..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={formStatus !== 'idle'}
                                className={`w-full flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-white shadow-lg transition-all transform hover:-translate-y-0.5 ${
                                    formStatus === 'success' 
                                        ? 'bg-techGreen-500 hover:bg-techGreen-600 shadow-techGreen-500/30' 
                                        : 'bg-slate-900 hover:bg-techBlue-600 shadow-slate-900/20 hover:shadow-techBlue-600/30'
                                }`}
                            >
                                {formStatus === 'idle' && (
                                    <>发送信息 <Send className="h-5 w-5" /></>
                                )}
                                {formStatus === 'submitting' && '发送中...'}
                                {formStatus === 'success' && '发送成功！'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;