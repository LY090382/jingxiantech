import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ChevronRight, ChevronLeft, Check, Building2, Factory, Beaker, Package, FileText } from 'lucide-react';
import { supabase } from '../lib/supabase';

// 表单步骤配置
const STEPS = [
    { id: 1, title: '基本信息', icon: Building2 },
    { id: 2, title: '行业与机会', icon: Factory },
    { id: 3, title: '应用类型', icon: Beaker },
    { id: 4, title: '应用条件', icon: Package },
    { id: 5, title: '产品要求', icon: FileText },
    { id: 6, title: '用量与补充', icon: Send },
];

// 应用类型选项
const APPLICATION_TYPES = [
    '粘接 Bonding',
    '封装 Encapsulation',
    '保形涂层 Conformal Coating',
    '底部填充 Underfill',
    '增强 Reinforcement',
    '灌封 Potting',
    '热导率 Thermal Conductivity',
    '电导率 Electrical Conductivity',
    '密封 Sealing',
];

// 固化方法选项
const CURING_METHODS = [
    '加热 Heat',
    '室温 Room Temperature',
    '紫外线 UV',
    '湿气 Moisture',
];

interface FormData {
    // 基本信息
    name: string;
    company: string;
    phone: string;
    email: string;
    // 行业
    industry: string;
    industryOther: string;
    // 商业机会
    inquiryReason: string;
    currentBrand: string;
    currentIssues: string;
    newProjectProduct: string;
    // 应用类型
    applicationTypes: string[];
    // 应用条件
    bondingComponents: string;
    bondingSubstrate: string;
    surfaceTreated: string;
    dispensingMethod: string;
    dispensingLocation: string;
    // 产品要求
    componentType: string;
    resinType: string;
    curingMethods: string[];
    curingTimeTemp: string;
    performanceRequirements: string;
    flameRetardancy: string;
    reliabilityTests: string;
    certificationRequirements: string;
    // 用量
    usagePerUnit: string;
    usageAnnual: string;
    // 补充
    additionalNotes: string;
}

const initialFormData: FormData = {
    name: '',
    company: '',
    phone: '',
    email: '',
    industry: '',
    industryOther: '',
    inquiryReason: '',
    currentBrand: '',
    currentIssues: '',
    newProjectProduct: '',
    applicationTypes: [],
    bondingComponents: '',
    bondingSubstrate: '',
    surfaceTreated: '',
    dispensingMethod: '',
    dispensingLocation: '',
    componentType: '',
    resinType: '',
    curingMethods: [],
    curingTimeTemp: '',
    performanceRequirements: '',
    flameRetardancy: '',
    reliabilityTests: '',
    certificationRequirements: '',
    usagePerUnit: '',
    usageAnnual: '',
    additionalNotes: '',
};

const Contact: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const updateField = (field: keyof FormData, value: string | string[]) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const toggleArrayField = (field: 'applicationTypes' | 'curingMethods', value: string) => {
        setFormData(prev => {
            const arr = prev[field];
            if (arr.includes(value)) {
                return { ...prev, [field]: arr.filter(v => v !== value) };
            } else {
                return { ...prev, [field]: [...arr, value] };
            }
        });
    };

    const validateStep = (step: number): boolean => {
        switch (step) {
            case 1:
                return !!(formData.name && formData.company && formData.phone && formData.email);
            default:
                return true;
        }
    };

    const nextStep = () => {
        if (validateStep(currentStep) && currentStep < STEPS.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async () => {
        if (!validateStep(1)) {
            setCurrentStep(1);
            alert('请填写必填的基本信息');
            return;
        }

        setFormStatus('submitting');

        const data = {
            name: formData.name,
            company: formData.company,
            phone: formData.phone,
            email: formData.email,
            industry: formData.industry,
            industry_other: formData.industryOther,
            inquiry_reason: formData.inquiryReason,
            current_brand: formData.currentBrand,
            current_issues: formData.currentIssues,
            new_project_product: formData.newProjectProduct,
            application_types: formData.applicationTypes,
            bonding_components: formData.bondingComponents,
            bonding_substrate: formData.bondingSubstrate,
            surface_treated: formData.surfaceTreated,
            dispensing_method: formData.dispensingMethod,
            dispensing_location: formData.dispensingLocation,
            component_type: formData.componentType,
            resin_type: formData.resinType,
            curing_methods: formData.curingMethods,
            curing_time_temp: formData.curingTimeTemp,
            performance_requirements: formData.performanceRequirements,
            flame_retardancy: formData.flameRetardancy,
            reliability_tests: formData.reliabilityTests,
            certification_requirements: formData.certificationRequirements,
            usage_per_unit: formData.usagePerUnit,
            usage_annual: formData.usageAnnual,
            additional_notes: formData.additionalNotes,
        };

        try {
            const { error } = await supabase
                .from('customer_inquiries')
                .insert([data]);

            if (error) throw error;

            setFormStatus('success');
            setFormData(initialFormData);
            setCurrentStep(1);
        } catch (error) {
            console.error('提交失败:', error);
            setFormStatus('error');
        }
    };

    // 输入框样式
    const inputClass = "w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-techBlue-500 focus:ring-2 focus:ring-techBlue-500/20 transition-all placeholder:text-slate-400";
    const labelClass = "block text-sm font-bold text-slate-700 mb-2";
    const selectClass = "w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-techBlue-500 focus:ring-2 focus:ring-techBlue-500/20 transition-all";

    // 渲染步骤指示器
    const renderStepIndicator = () => (
        <div className="flex items-center justify-center mb-8 overflow-x-auto pb-2">
            {STEPS.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;
                return (
                    <div key={step.id} className="flex items-center">
                        <button
                            onClick={() => setCurrentStep(step.id)}
                            className={`flex flex-col items-center min-w-[80px] transition-all ${isActive ? 'text-techBlue-600' : isCompleted ? 'text-techGreen-500' : 'text-slate-400'
                                }`}
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 transition-all ${isActive ? 'bg-techBlue-600 text-white' : isCompleted ? 'bg-techGreen-500 text-white' : 'bg-slate-200'
                                }`}>
                                {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                            </div>
                            <span className="text-xs font-medium hidden sm:block">{step.title}</span>
                        </button>
                        {index < STEPS.length - 1 && (
                            <div className={`w-8 h-0.5 mx-1 ${isCompleted ? 'bg-techGreen-500' : 'bg-slate-200'}`} />
                        )}
                    </div>
                );
            })}
        </div>
    );

    // 渲染步骤1: 基本信息
    const renderStep1 = () => (
        <div className="space-y-6">
            <h4 className="text-lg font-bold text-slate-800 mb-4">基本信息 Basic Information</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className={labelClass}>姓名 Name <span className="text-red-500">*</span></label>
                    <input type="text" className={inputClass} placeholder="您的姓名"
                        value={formData.name} onChange={e => updateField('name', e.target.value)} required />
                </div>
                <div>
                    <label className={labelClass}>公司名称 Company <span className="text-red-500">*</span></label>
                    <input type="text" className={inputClass} placeholder="您的公司"
                        value={formData.company} onChange={e => updateField('company', e.target.value)} required />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className={labelClass}>电话号码 Phone <span className="text-red-500">*</span></label>
                    <input type="tel" className={inputClass} placeholder="+86 138 0000 0000"
                        value={formData.phone} onChange={e => updateField('phone', e.target.value)} required />
                </div>
                <div>
                    <label className={labelClass}>电子邮箱 Email <span className="text-red-500">*</span></label>
                    <input type="email" className={inputClass} placeholder="name@company.com"
                        value={formData.email} onChange={e => updateField('email', e.target.value)} required />
                </div>
            </div>
        </div>
    );

    // 渲染步骤2: 行业与商业机会
    const renderStep2 = () => (
        <div className="space-y-6">
            <h4 className="text-lg font-bold text-slate-800 mb-4">行业与商业机会 Industry & Business Opportunity</h4>

            <div>
                <label className={labelClass}>所属行业 Industry</label>
                <select className={selectClass} value={formData.industry} onChange={e => updateField('industry', e.target.value)}>
                    <option value="">请选择...</option>
                    <option value="消费电子">消费电子 Consumer Electronics</option>
                    <option value="汽车">汽车 Automotive</option>
                    <option value="工业">工业 Industrial</option>
                    <option value="医疗">医疗 Medical</option>
                    <option value="其他">其他 Others</option>
                </select>
            </div>

            {formData.industry === '其他' && (
                <div>
                    <label className={labelClass}>请说明行业 Please specify</label>
                    <input type="text" className={inputClass} placeholder="请输入您的行业"
                        value={formData.industryOther} onChange={e => updateField('industryOther', e.target.value)} />
                </div>
            )}

            <div>
                <label className={labelClass}>咨询原因 Inquiry Reason</label>
                <select className={selectClass} value={formData.inquiryReason} onChange={e => updateField('inquiryReason', e.target.value)}>
                    <option value="">请选择...</option>
                    <option value="现有产品问题">现有产品问题 Problems with current products</option>
                    <option value="成本削减">成本削减 Cost reduction</option>
                    <option value="新项目">新项目 New project</option>
                    <option value="其他">其他 Others</option>
                </select>
            </div>

            <div>
                <label className={labelClass}>当前使用的品牌及型号 Current brand and model</label>
                <input type="text" className={inputClass} placeholder="如适用,请填写"
                    value={formData.currentBrand} onChange={e => updateField('currentBrand', e.target.value)} />
            </div>

            <div>
                <label className={labelClass}>现有产品问题描述 Issues with existing product</label>
                <textarea className={inputClass} rows={3} placeholder="请描述您遇到的问题..."
                    value={formData.currentIssues} onChange={e => updateField('currentIssues', e.target.value)} />
            </div>

            {formData.inquiryReason === '新项目' && (
                <div>
                    <label className={labelClass}>新项目终端产品 End product for new project</label>
                    <input type="text" className={inputClass} placeholder="终端产品是什么?"
                        value={formData.newProjectProduct} onChange={e => updateField('newProjectProduct', e.target.value)} />
                </div>
            )}
        </div>
    );

    // 渲染步骤3: 应用类型
    const renderStep3 = () => (
        <div className="space-y-6">
            <h4 className="text-lg font-bold text-slate-800 mb-4">应用类型 Application Type</h4>
            <p className="text-slate-500 text-sm mb-4">请选择所有适用的应用类型 (可多选)</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {APPLICATION_TYPES.map(type => (
                    <label key={type} className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${formData.applicationTypes.includes(type)
                            ? 'border-techBlue-500 bg-techBlue-50 text-techBlue-700'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}>
                        <input
                            type="checkbox"
                            checked={formData.applicationTypes.includes(type)}
                            onChange={() => toggleArrayField('applicationTypes', type)}
                            className="w-4 h-4 text-techBlue-600 rounded focus:ring-techBlue-500"
                        />
                        <span className="text-sm font-medium">{type}</span>
                    </label>
                ))}
            </div>
        </div>
    );

    // 渲染步骤4: 应用条件
    const renderStep4 = () => (
        <div className="space-y-6">
            <h4 className="text-lg font-bold text-slate-800 mb-4">应用条件与要求 Application Conditions</h4>

            <div>
                <label className={labelClass}>粘合组件 Bonding components</label>
                <input type="text" className={inputClass} placeholder="正在粘合的组件是什么?"
                    value={formData.bondingComponents} onChange={e => updateField('bondingComponents', e.target.value)} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className={labelClass}>粘合基材 Bonding substrate</label>
                    <input type="text" className={inputClass} placeholder="基材类型"
                        value={formData.bondingSubstrate} onChange={e => updateField('bondingSubstrate', e.target.value)} />
                </div>
                <div>
                    <label className={labelClass}>是否经过表面处理 Surface treated?</label>
                    <select className={selectClass} value={formData.surfaceTreated} onChange={e => updateField('surfaceTreated', e.target.value)}>
                        <option value="">请选择...</option>
                        <option value="是">是 Yes</option>
                        <option value="否">否 No</option>
                        <option value="不确定">不确定 Not sure</option>
                    </select>
                </div>
            </div>

            <div>
                <label className={labelClass}>分配方法 Dispensing method</label>
                <select className={selectClass} value={formData.dispensingMethod} onChange={e => updateField('dispensingMethod', e.target.value)}>
                    <option value="">请选择...</option>
                    <option value="气压分配">气压分配 Air pressure dispensing</option>
                    <option value="螺杆泵">螺杆泵 Screw pump</option>
                    <option value="喷射">喷射 Jetting</option>
                    <option value="模板/丝网印刷">模板/丝网印刷 Stencil/Screen printing</option>
                    <option value="其他">其他 Others</option>
                </select>
            </div>

            <div>
                <label className={labelClass}>布胶位置/区域描述 Dispensing location</label>
                <textarea className={inputClass} rows={3} placeholder="请描述布胶的位置或区域..."
                    value={formData.dispensingLocation} onChange={e => updateField('dispensingLocation', e.target.value)} />
            </div>
        </div>
    );

    // 渲染步骤5: 产品要求
    const renderStep5 = () => (
        <div className="space-y-6">
            <h4 className="text-lg font-bold text-slate-800 mb-4">产品要求 Product Requirements</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className={labelClass}>组分类型 Component type</label>
                    <select className={selectClass} value={formData.componentType} onChange={e => updateField('componentType', e.target.value)}>
                        <option value="">请选择...</option>
                        <option value="单组分">单组分 One-component</option>
                        <option value="双组分">双组分 Two-component</option>
                    </select>
                </div>
                <div>
                    <label className={labelClass}>树脂类型 Resin type</label>
                    <select className={selectClass} value={formData.resinType} onChange={e => updateField('resinType', e.target.value)}>
                        <option value="">请选择...</option>
                        <option value="环氧树脂">环氧树脂 Epoxy</option>
                        <option value="丙烯酸树脂">丙烯酸树脂 Acrylic</option>
                        <option value="硅树脂">硅树脂 Silicone</option>
                        <option value="聚氨酯">聚氨酯 Polyurethane</option>
                        <option value="不确定">不确定 Not sure</option>
                    </select>
                </div>
            </div>

            <div>
                <label className={labelClass}>固化方法 Curing method (可多选)</label>
                <div className="flex flex-wrap gap-3 mt-2">
                    {CURING_METHODS.map(method => (
                        <label key={method} className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-all ${formData.curingMethods.includes(method)
                                ? 'border-techBlue-500 bg-techBlue-50 text-techBlue-700'
                                : 'border-slate-200 bg-white hover:border-slate-300'
                            }`}>
                            <input
                                type="checkbox"
                                checked={formData.curingMethods.includes(method)}
                                onChange={() => toggleArrayField('curingMethods', method)}
                                className="w-4 h-4 text-techBlue-600 rounded focus:ring-techBlue-500"
                            />
                            <span className="text-sm font-medium">{method}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <label className={labelClass}>固化时间与最高温度 Curing time & max temperature</label>
                <input type="text" className={inputClass} placeholder="如: 30分钟 @ 150°C"
                    value={formData.curingTimeTemp} onChange={e => updateField('curingTimeTemp', e.target.value)} />
            </div>

            <div>
                <label className={labelClass}>固化后性能要求 Performance requirements</label>
                <textarea className={inputClass} rows={3} placeholder="如粘接强度、硬度等要求..."
                    value={formData.performanceRequirements} onChange={e => updateField('performanceRequirements', e.target.value)} />
            </div>

            <div>
                <label className={labelClass}>阻燃要求 Flame retardancy</label>
                <select className={selectClass} value={formData.flameRetardancy} onChange={e => updateField('flameRetardancy', e.target.value)}>
                    <option value="">请选择...</option>
                    <option value="有要求">有要求 Yes</option>
                    <option value="无要求">无要求 No</option>
                    <option value="不确定">不确定 Not sure</option>
                </select>
            </div>

            <div>
                <label className={labelClass}>可靠性测试要求 Reliability tests</label>
                <textarea className={inputClass} rows={3} placeholder="测试类型、持续时间及评估标准..."
                    value={formData.reliabilityTests} onChange={e => updateField('reliabilityTests', e.target.value)} />
            </div>

            <div>
                <label className={labelClass}>认证要求 Certification requirements</label>
                <textarea className={inputClass} rows={3} placeholder="材料认证及环保要求..."
                    value={formData.certificationRequirements} onChange={e => updateField('certificationRequirements', e.target.value)} />
            </div>
        </div>
    );

    // 渲染步骤6: 用量与补充
    const renderStep6 = () => (
        <div className="space-y-6">
            <h4 className="text-lg font-bold text-slate-800 mb-4">预计用量与补充信息 Estimated Usage & Additional Info</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className={labelClass}>单位用量 Usage per unit</label>
                    <input type="text" className={inputClass} placeholder="每单位产品用量 (如: 0.5g/件)"
                        value={formData.usagePerUnit} onChange={e => updateField('usagePerUnit', e.target.value)} />
                </div>
                <div>
                    <label className={labelClass}>年度用量 Annual usage</label>
                    <input type="text" className={inputClass} placeholder="预计年度总用量 (如: 500kg/年)"
                        value={formData.usageAnnual} onChange={e => updateField('usageAnnual', e.target.value)} />
                </div>
            </div>

            <div>
                <label className={labelClass}>其他补充说明 Additional notes</label>
                <textarea className={inputClass} rows={4} placeholder="如有其他需要说明的信息,请在此填写..."
                    value={formData.additionalNotes} onChange={e => updateField('additionalNotes', e.target.value)} />
            </div>

            {/* 提交摘要 */}
            <div className="bg-slate-50 rounded-xl p-6 mt-6">
                <h5 className="font-bold text-slate-800 mb-3">提交摘要 Summary</h5>
                <div className="grid grid-cols-2 gap-2 text-sm">
                    <div><span className="text-slate-500">姓名:</span> {formData.name || '-'}</div>
                    <div><span className="text-slate-500">公司:</span> {formData.company || '-'}</div>
                    <div><span className="text-slate-500">行业:</span> {formData.industry || '-'}</div>
                    <div><span className="text-slate-500">应用类型:</span> {formData.applicationTypes.length > 0 ? formData.applicationTypes.length + '项' : '-'}</div>
                </div>
            </div>
        </div>
    );

    // 渲染当前步骤内容
    const renderCurrentStep = () => {
        switch (currentStep) {
            case 1: return renderStep1();
            case 2: return renderStep2();
            case 3: return renderStep3();
            case 4: return renderStep4();
            case 5: return renderStep5();
            case 6: return renderStep6();
            default: return null;
        }
    };

    // 成功状态
    if (formStatus === 'success') {
        return (
            <div className="bg-slate-50 min-h-screen py-20">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="bg-white p-12 rounded-2xl border border-slate-200 shadow-xl text-center">
                        <div className="w-20 h-20 bg-techGreen-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="w-10 h-10 text-techGreen-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">提交成功!</h2>
                        <p className="text-slate-500 mb-8">感谢您的咨询,我们的技术团队将在24小时内与您联系。</p>
                        <button onClick={() => setFormStatus('idle')} className="bg-techBlue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-techBlue-700 transition-all">
                            返回表单
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">产品咨询 Product Inquiry</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        请填写以下信息,我们的技术团队将根据您的需求提供专业的解决方案。
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* 左侧联系信息 */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">联系方式</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-xl">
                                        <MapPin className="h-5 w-5 text-techBlue-600" />
                                    </div>
                                    <div>
                                        <p className="text-slate-900 font-bold">公司总部</p>
                                        <p className="text-slate-500 text-sm mt-1">深圳市龙华区锦绣时代广场1栋1单元1508</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-xl">
                                        <Phone className="h-5 w-5 text-techBlue-600" />
                                    </div>
                                    <div>
                                        <p className="text-slate-900 font-bold">电话咨询</p>
                                        <p className="text-slate-500 text-sm mt-1">+86 180 1878 4649</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-xl">
                                        <Mail className="h-5 w-5 text-techBlue-600" />
                                    </div>
                                    <div>
                                        <p className="text-slate-900 font-bold">电子邮件</p>
                                        <p className="text-slate-500 text-sm mt-1">sunzf@jingxian-tech.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-techBlue-600 to-techBlue-800 p-6 rounded-2xl text-white">
                            <h3 className="text-lg font-bold mb-2">需要样品测试？</h3>
                            <p className="text-blue-100 text-sm leading-relaxed">
                                我们为企业客户提供免费样品测试服务。请在表单中注明您的需求。
                            </p>
                        </div>
                    </div>

                    {/* 右侧表单 */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
                        {renderStepIndicator()}

                        <div>
                            {renderCurrentStep()}
                        </div>

                        {/* 导航按钮 */}
                        <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
                            <button
                                onClick={prevStep}
                                disabled={currentStep === 1}
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${currentStep === 1
                                        ? 'text-slate-300 cursor-not-allowed'
                                        : 'text-slate-600 hover:bg-slate-100'
                                    }`}
                            >
                                <ChevronLeft className="w-5 h-5" /> 上一步
                            </button>

                            {currentStep < STEPS.length ? (
                                <button
                                    onClick={nextStep}
                                    disabled={!validateStep(currentStep)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${validateStep(currentStep)
                                            ? 'bg-techBlue-600 text-white hover:bg-techBlue-700'
                                            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                        }`}
                                >
                                    下一步 <ChevronRight className="w-5 h-5" />
                                </button>
                            ) : (
                                <button
                                    onClick={handleSubmit}
                                    disabled={formStatus === 'submitting'}
                                    className="flex items-center gap-2 px-8 py-3 rounded-lg font-bold bg-techGreen-500 text-white hover:bg-techGreen-600 transition-all shadow-lg"
                                >
                                    {formStatus === 'submitting' ? '提交中...' : '提交咨询'} <Send className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;