import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Droplet, Thermometer, Shield, Download, FileText, Settings, PenTool, X, Check, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCategory, Product } from '../types';

// Helper function to safely get category images (kept for potential future use or other parts, though currently unused in Modal/Card)
const getCategoryImage = (category: ProductCategory): string => {
    switch (category) {
        case ProductCategory.THERMAL: 
            return 'https://images.unsplash.com/photo-1593106578502-27f32022362b?q=80&w=800&auto=format&fit=crop';
        case ProductCategory.ADHESIVE: 
            return 'https://images.unsplash.com/photo-1610450919213-924d54830386?q=80&w=800&auto=format&fit=crop';
        case ProductCategory.COATING: 
            return 'https://images.unsplash.com/photo-1625153549007-8e68442e313f?q=80&w=800&auto=format&fit=crop';
        case ProductCategory.SEMICONDUCTOR: 
            return 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=800&auto=format&fit=crop';
        case ProductCategory.EQUIPMENT: 
            return 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop';
        case ProductCategory.PRECISION: 
            return 'https://images.unsplash.com/photo-1622630282662-8438186b1f28?q=80&w=800&auto=format&fit=crop';
        default: 
            return 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop';
    }
};

// --- Modal Component ---
const ProductModal: React.FC<{ product: Product | null; onClose: () => void }> = ({ product, onClose }) => {
    const navigate = useNavigate();

    if (!product) return null;

    const handleContactClick = () => {
        onClose();
        // Pass the product name in state to pre-fill or inform the contact form
        navigate('/contact', { state: { inquiryProduct: product.name } });
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
                {/* Modal Header - No Image, purely technical style */}
                <div className="relative bg-slate-900 shrink-0 p-8 border-b border-slate-800 overflow-hidden">
                    {/* Background decorations */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-techBlue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md z-20"
                    >
                        <X className="h-5 w-5" />
                    </button>
                    
                    <div className="relative z-10">
                         <div className="flex items-center gap-3 mb-4">
                             <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-techBlue-500/30 bg-techBlue-500/20 text-techBlue-400 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                                {product.category}
                            </span>
                         </div>
                        <h2 className="text-3xl font-bold text-white tracking-tight">{product.name}</h2>
                    </div>
                </div>

                {/* Modal Content - Scrollable */}
                <div className="p-8 overflow-y-auto custom-scrollbar">
                    <div className="prose prose-slate max-w-none mb-8">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">产品概述</h3>
                        <p className="text-slate-600 leading-relaxed text-base">{product.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Specs */}
                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Settings className="h-4 w-4 text-techBlue-600" />
                                技术规格
                            </h3>
                            <div className="space-y-3">
                                {product.specs.map((spec, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-200/60 last:border-0">
                                        <span className="text-slate-500 text-sm font-medium">{spec.label}</span>
                                        <span className="text-slate-900 font-mono text-sm font-bold">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Applications */}
                        <div className="bg-white rounded-xl p-6 border border-slate-200">
                             <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Check className="h-4 w-4 text-techGreen-600" />
                                典型应用
                            </h3>
                            <ul className="space-y-2">
                                {product.application.map((app, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-techBlue-500 shrink-0"></div>
                                        {app}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CTA Footer in Modal */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100">
                        <button 
                            onClick={handleContactClick}
                            className="flex-1 bg-techBlue-600 hover:bg-techBlue-700 text-white py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-techBlue-600/20"
                        >
                            <FileText className="h-4 w-4" />
                            索取 TDS 技术参数表
                        </button>
                        <button 
                            onClick={handleContactClick}
                            className="flex-1 bg-white border border-slate-200 hover:border-techBlue-300 hover:text-techBlue-700 text-slate-700 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
                        >
                            联系销售工程师 <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Products: React.FC = () => {
    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // 根据URL参数设置初始分类
    const getInitialFilter = (): ProductCategory | 'All' => {
        if (categoryParam) {
            // Find key by value or check if it matches one of the enum values
            const values = Object.values(ProductCategory);
            // Try to match exact enum value string
            if (values.includes(categoryParam as ProductCategory)) {
                return categoryParam as ProductCategory;
            }
            // Fallback: try to find key
            const entry = Object.entries(ProductCategory).find(([key, val]) => key === categoryParam);
            if(entry) return entry[1];
        }
        return 'All';
    };

    const [filter, setFilter] = useState<ProductCategory | 'All'>(getInitialFilter());

    // 当URL参数变化时更新筛选
    useEffect(() => {
        if (categoryParam) {
             const entry = Object.entries(ProductCategory).find(([key, val]) => key === categoryParam);
             if (entry) {
                 setFilter(entry[1]);
             } else if (Object.values(ProductCategory).includes(categoryParam as ProductCategory)) {
                 setFilter(categoryParam as ProductCategory);
             }
        }
    }, [categoryParam]);

    const filteredProducts = filter === 'All'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === filter);

    const categories = ['All', ...Object.values(ProductCategory)];

    // Helper for category simplification for display
    const getShortCategoryName = (cat: string) => {
        if (cat === 'All') return '全部';
        if (cat.includes('导热')) return '导热材料';
        if (cat.includes('结构')) return '胶粘剂';
        if (cat.includes('涂覆')) return '三防漆';
        if (cat.includes('半导体')) return '半导体';
        if (cat.includes('设备')) return '流体设备';
        if (cat.includes('加工')) return '精密组件';
        return cat;
    }

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
                )}
            </AnimatePresence>

            {/* Header Section */}
            <div className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-900 border-b border-slate-800">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                        alt="Advanced Technology Background" 
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-techBlue-500/30 bg-techBlue-500/10 text-techBlue-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                        <Settings className="h-3 w-3" />
                        Advanced Materials & Equipment
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
                        产品与解决方案
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                        从高性能电子材料到微米级流体控制设备。<br className="hidden md:block" />
                        我们提供软硬结合的一站式封装工艺解决方案。
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
                {/* Tabs */}
                <div className="flex flex-wrap gap-2 justify-center mb-16 -mt-8 sticky top-24 z-30">
                    <div className="bg-white/80 backdrop-blur-lg p-2 rounded-2xl shadow-xl border border-slate-200/60 flex flex-wrap gap-1 justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat as any)}
                                className={`px-4 py-2 text-xs font-bold transition-all duration-200 rounded-xl ${filter === cat
                                    ? 'bg-techBlue-600 text-white shadow-md shadow-techBlue-500/30'
                                    : 'text-slate-600 hover:bg-slate-100'
                                    }`}
                            >
                                {getShortCategoryName(cat)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                                onViewDetails={() => setSelectedProduct(product)} 
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50">
                        <p className="text-slate-400 font-medium">暂无匹配的产品信息。</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const ProductCard: React.FC<{ product: Product; onViewDetails: () => void }> = ({ product, onViewDetails }) => {
    const getIcon = (category: ProductCategory) => {
        switch (category) {
            case ProductCategory.ADHESIVE: return <Droplet className="h-4 w-4" />;
            case ProductCategory.THERMAL: return <Thermometer className="h-4 w-4" />;
            case ProductCategory.COATING: return <Shield className="h-4 w-4" />;
            case ProductCategory.EQUIPMENT: return <Settings className="h-4 w-4" />;
            case ProductCategory.PRECISION: return <PenTool className="h-4 w-4" />;
            default: return <Filter className="h-4 w-4" />;
        }
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="group bg-white border border-slate-200 rounded-xl hover:border-techBlue-500 hover:ring-1 hover:ring-techBlue-100 hover:shadow-xl hover:shadow-techBlue-900/5 transition-all duration-300 flex flex-col relative overflow-hidden"
        >
            {/* Decorative Top Line (Kept plain/decorative line for the card as requested previously) */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-techBlue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

            <div className="p-7 flex-grow cursor-pointer" onClick={onViewDetails}>
                <div className="flex justify-between items-start mb-5">
                    <span className="inline-flex items-center gap-2 text-techBlue-700 bg-techBlue-50 border border-techBlue-100 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider group-hover:bg-techBlue-600 group-hover:text-white group-hover:border-techBlue-600 transition-colors max-w-[80%] truncate">
                        {getIcon(product.category)}
                        {product.category.split(' ')[0]} {/* Show short name */}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-techBlue-700 transition-colors">
                    {product.name}
                </h3>
                <p className="text-slate-500 text-sm mb-8 line-clamp-3 leading-relaxed">
                    {product.description}
                </p>

                {/* Specs */}
                <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-lg border border-slate-100 group-hover:border-techBlue-100 group-hover:bg-techBlue-50/30 transition-colors">
                    {product.specs.slice(0, 3).map((spec, idx) => (
                        <div key={idx} className="flex justify-between text-xs items-center">
                            <span className="text-slate-500 font-medium uppercase tracking-wide">{spec.label}</span>
                            <span className="text-slate-900 font-mono font-semibold">{spec.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-7 pb-7 mt-auto flex gap-3">
                <button 
                    onClick={onViewDetails}
                    className="flex-1 py-2.5 bg-slate-900 hover:bg-techBlue-600 text-white text-xs font-bold tracking-wide rounded-lg transition-all flex items-center justify-center shadow-lg shadow-slate-900/10 group-hover:shadow-techBlue-500/20"
                >
                    查看详情 (View Details)
                </button>
                <button className="p-2.5 border border-slate-200 text-slate-400 hover:text-techBlue-600 hover:border-techBlue-200 rounded-lg transition-colors bg-white">
                    <Download className="h-4 w-4" />
                </button>
            </div>
        </motion.div>
    );
};

export default Products;