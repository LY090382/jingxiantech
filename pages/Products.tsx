import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Droplet, Thermometer, Shield, Download, FileText } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCategory, Product } from '../types';

const Products: React.FC = () => {
    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');

    // 根据URL参数设置初始分类
    const getInitialFilter = (): ProductCategory | 'All' => {
        if (categoryParam && categoryParam in ProductCategory) {
            return ProductCategory[categoryParam as keyof typeof ProductCategory];
        }
        return 'All';
    };

    const [filter, setFilter] = useState<ProductCategory | 'All'>(getInitialFilter());

    // 当URL参数变化时更新筛选
    useEffect(() => {
        if (categoryParam && categoryParam in ProductCategory) {
            setFilter(ProductCategory[categoryParam as keyof typeof ProductCategory]);
        }
    }, [categoryParam]);

    const filteredProducts = filter === 'All'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === filter);

    const categories = ['All', ...Object.values(ProductCategory)];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header Section - Chemistry/Lab Theme with Consistent Light Styling */}
            <div className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-50 border-b border-slate-200">
                {/* Background Image - Chemistry Laboratory */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop"
                        alt="Chemistry Laboratory Glassware"
                        className="w-full h-full object-cover opacity-60"
                    />
                    {/* Gradient Overlay - Fades into the slate-50 background of the page */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/70 to-white/30"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight drop-shadow-sm">
                        产品中心
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                        源自顶尖化学实验室的材料配方。<br className="hidden md:block" />
                        为您提供半导体封装、导热与结构粘接的专业解决方案。
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
                {/* Tabs */}
                <div className="flex flex-wrap gap-3 justify-center mb-16 -mt-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat as any)}
                            className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-200 rounded-full border shadow-lg backdrop-blur-md ${filter === cat
                                ? 'bg-techBlue-600 text-white border-techBlue-600 ring-4 ring-techBlue-600/20'
                                : 'bg-white/90 text-slate-600 border-white hover:bg-white hover:text-techBlue-700'
                                }`}
                        >
                            {cat === 'All' ? '全部产品' : cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50">
                        <p className="text-slate-400 font-medium">No matching materials found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const getIcon = (category: ProductCategory) => {
        switch (category) {
            case ProductCategory.ADHESIVE: return <Droplet className="h-4 w-4" />;
            case ProductCategory.THERMAL: return <Thermometer className="h-4 w-4" />;
            case ProductCategory.COATING: return <Shield className="h-4 w-4" />;
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
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-techBlue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="p-7 flex-grow">
                <div className="flex justify-between items-start mb-5">
                    <span className="inline-flex items-center gap-2 text-techBlue-700 bg-techBlue-50 border border-techBlue-100 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider group-hover:bg-techBlue-600 group-hover:text-white group-hover:border-techBlue-600 transition-colors">
                        {getIcon(product.category)}
                        {product.id}
                    </span>
                    <FileText className="h-5 w-5 text-slate-300 group-hover:text-techBlue-500 transition-colors" />
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
                <button className="flex-1 py-2.5 bg-slate-900 hover:bg-techBlue-600 text-white text-xs font-bold tracking-wide rounded-lg transition-all flex items-center justify-center shadow-lg shadow-slate-900/10 group-hover:shadow-techBlue-500/20">
                    View Details
                </button>
                <button className="p-2.5 border border-slate-200 text-slate-400 hover:text-techBlue-600 hover:border-techBlue-200 rounded-lg transition-colors bg-white">
                    <Download className="h-4 w-4" />
                </button>
            </div>
        </motion.div>
    );
};

export default Products;