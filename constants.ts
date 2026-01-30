import { Product, ProductCategory, Solution, Milestone } from './types';
import { Cpu, Smartphone, Car, Factory, Zap, Shield } from 'lucide-react';

export const COMPANY_NAME = "景贤科技";

export const ASSET_URLS = {
    favicon: 'https://stgmrbxwolivdppajhlw.supabase.co/storage/v1/object/public/website-assets/favicon.png',
    wechatQr: 'https://stgmrbxwolivdppajhlw.supabase.co/storage/v1/object/public/website-assets/wechat-qr.png'
};

// Data extracted and synthesized from CollTech, IboxTech, Satino, and Mingseal PDFs
export const PRODUCTS: Product[] = [
    // Existing Materials
    {
        id: 'n-pu-5606',
        name: 'N-PU 5606',
        category: ProductCategory.ADHESIVE,
        description: '反应型聚氨酯热熔胶，专为结构粘接设计，具有高初粘力和快速定位特性。',
        application: ['智能手机边框', '平板电脑电池折边', '家电面板'],
        specs: [
            { label: '外观', value: '白色/黑色' },
            { label: '粘度', value: '4000 cps' },
            { label: '开放时间', value: '1-3 mins' },
            { label: '硬度', value: '30-40 Shore D' }
        ]
    },
    {
        id: 'ibox-1200gf',
        name: 'IBOX-1200GF',
        category: ProductCategory.THERMAL,
        description: '高性能双组份导热灌封硅胶，兼具低粘度和高导热性，防分层技术。',
        application: ['新能源汽车OBC', '电机控制器', '充电桩模组'],
        specs: [
            { label: '导热率', value: '3.0 W/m·K' },
            { label: '混合粘度', value: '7000 mPa·s' },
            { label: '硬度', value: '30 Shore A' },
            { label: '耐温', value: '-40~150℃' }
        ]
    },
    {
        id: 'ew-6318',
        name: 'EW 6318 Series',
        category: ProductCategory.ADHESIVE,
        description: '低温固化导电胶/密封胶，专为Type-C连接器和精密电子元件设计。',
        application: ['USB-C连接器', '精密传感器', '摄像头模组'],
        specs: [
            { label: '类型', value: '环氧树脂 (Epoxy)' },
            { label: '粘度', value: '9000 cps' },
            { label: '固化条件', value: '150°C @ 15min' },
            { label: '剪切强度', value: '> 25 MPa' }
        ]
    },
    {
        id: 'ibox-300g',
        name: 'IBOX-300G',
        category: ProductCategory.THERMAL,
        description: '单组份导热凝胶，低热阻，高变形量，适合自动化点胶工艺。',
        application: ['电池模组', 'BMS系统', '电子水泵'],
        specs: [
            { label: '导热率', value: '3.0 W/m·K' },
            { label: '比重', value: '3.0' },
            { label: '挤出率', value: '16 g/min' },
            { label: '绝缘电压', value: '10 kV/mm' }
        ]
    },
    {
        id: 'pw-1446',
        name: 'PW 1446',
        category: ProductCategory.COATING,
        description: 'UV固化CIPG密封胶，具有高回弹性和耐高温高湿性能，IPX7防水等级。',
        application: ['智能手表', 'TWS耳机', '户外电子设备'],
        specs: [
            { label: '固化方式', value: 'UV固化' },
            { label: '延伸率', value: '400%' },
            { label: '硬度', value: '35 Shore A' },
            { label: '粘度', value: '46,000 mPa·s' }
        ]
    },
    {
        id: 'ibox-8009',
        name: 'IBOX-8009',
        category: ProductCategory.SEMICONDUCTOR,
        description: '单组份环氧导热粘接胶，用于车载PCBA元器件导热固定，耐老化性能优异。',
        application: ['车载电子', '功率器件', 'IGBT模块'],
        specs: [
            { label: '导热率', value: '1.5 W/m·K' },
            { label: '颜色', value: '灰色' },
            { label: '触变性', value: '高' },
            { label: '可靠性', value: '双85测试通过' }
        ]
    },

    // New Equipment Products (Derived from Mingseal/Satino PDFs)
    {
        id: 'jx-p2000',
        name: 'JX-P2000 压电喷射阀',
        category: ProductCategory.EQUIPMENT,
        description: '新一代高速非接触式喷射系统，专为中高粘度介质设计。采用一体化压电驱动，提供卓越的工艺恢复能力与稳定性。',
        application: ['半导体Underfill', '手机窄边框点胶', '精密涂覆', '银胶/红胶喷射'],
        specs: [
            { label: '最大频率', value: '1200 Hz' },
            { label: '适用粘度', value: 'Max 500,000 cps' },
            { label: '喷嘴加热', value: '集成加热模块' },
            { label: '重复精度', value: 'ADJ校准 ±0.01mm' }
        ]
    },
    {
        id: 'jx-s150',
        name: 'JX-S 精密单螺杆阀',
        category: ProductCategory.EQUIPMENT,
        description: '精密容积式单组份螺杆阀，通过定转子容积计量，完美解决粘度变化带来的出胶量不稳定问题。',
        application: ['高精度锡膏印刷', 'Mini-LED封装', '导热胶分配'],
        specs: [
            { label: '最小点胶量', value: '0.001 ml' },
            { label: '定子材质', value: 'FFKM (全氟醚)' },
            { label: '驱动方式', value: '伺服电机直驱' },
            { label: '输出压力', value: 'Max 40 Bar' }
        ]
    },
    {
        id: 'jx-d900',
        name: 'JX-D 双组份螺杆系统',
        category: ProductCategory.EQUIPMENT,
        description: '专为双组份结构胶、导热胶设计的精密混合输送系统，支持从 1:1 到 10:1 的宽范围混合比。',
        application: ['动力电池导热胶', '结构件粘接', '电子灌封'],
        specs: [
            { label: '混合精度', value: '±1%' },
            { label: '混合比', value: '1:1 ~ 10:1' },
            { label: '适用填料', value: '耐磨损陶瓷/金属' },
            { label: '功能', value: '防堵塞/自动回吸' }
        ]
    },
    {
        id: 'jx-lsb',
        name: 'JX-LSB 激光喷锡系统',
        category: ProductCategory.EQUIPMENT,
        description: '集成式激光植球装置，包含高精度锡球分送机构与激光加热模块，适用于微间ry/热敏感器件焊接。',
        application: ['摄像头模组焊接', 'CCM音圈马达', '晶圆级植球'],
        specs: [
            { label: '适用锡球', value: 'Φ0.2 ~ 1.0mm' },
            { label: '出球速度', value: '≥5 pcs/sec' },
            { label: '氮气保护', value: '支持' },
            { label: '使用寿命', value: '> 300万次' }
        ]
    },

    // New Precision Parts (Derived from Satino PDF)
    {
        id: 'jx-nzz-tc',
        name: '硬质合金精密喷嘴',
        category: ProductCategory.PRECISION,
        description: '采用进口超细晶粒钨钢加工，内孔光洁度达 Ra0.01，专门解决流体微孔堵塞与挂胶难题。',
        application: ['压电阀喷嘴', '撞针组件', '精密雾化'],
        specs: [
            { label: '最小孔径', value: '0.015 mm' },
            { label: '同心度', value: '±0.001 mm' },
            { label: '内孔粗糙度', value: 'Ra 0.01' },
            { label: '深径比', value: '可达 200:1' }
        ]
    },
    {
        id: 'jx-needle',
        name: '一体化撞针组件',
        category: ProductCategory.PRECISION,
        description: '高精度点胶阀撞针，通过独特的R角与球头研磨工艺，确保与喷嘴的100%密封贴合，杜绝滴胶。',
        application: ['喷射阀维修', '流体控制配件', '定制化针头'],
        specs: [
            { label: '材质', value: '钨钢 / 陶瓷' },
            { label: '真圆度', value: '±0.0005 mm' },
            { label: '耐磨性', value: 'HRC 90+' },
            { label: '密封性', value: '气密性检测 100%' }
        ]
    }
];

export const SOLUTIONS: Solution[] = [
    {
        id: 'automotive',
        title: '新能源汽车 (NEV)',
        description: '为电池包(PACK)、车载充电机(OBC)、电机电控系统提供全方位的导热、灌封与密封解决方案，确保在恶劣环境下的高可靠性。',
        features: ['电池模组导热', '电机灌封保护', 'IGBT散热', '激光雷达密封'],
        iconName: 'Car'
    },
    {
        id: 'consumer',
        title: '消费电子',
        description: '针对智能手机、TWS耳机、智能穿戴设备的高精度粘接与防水需求，提供UV胶、反应型热熔胶及底部填充胶。',
        features: ['摄像头模组组装', '整机防水IPX8', '屏幕窄边框粘接', 'FPC补强'],
        iconName: 'Smartphone'
    },
    {
        id: 'semiconductor',
        title: '半导体封装',
        description: '针对先进封装制程，提供芯片底部填充(Underfill)、固晶胶(Die Attach)及电磁屏蔽材料，助力5G通信与AI芯片的高性能散热与防护。',
        features: ['芯片底部填充(Underfill)', '电磁屏蔽(EMI)', '传感器封装', '5G基站散热'],
        iconName: 'Cpu'
    },
    {
        id: 'general-industry',
        title: '其它工业',
        description: '广泛服务于医疗器械、可再生能源及通用工业。为关键组件提供高可靠性的粘接、密封与导热保护，确保设备长期稳定运行。',
        features: ['医疗器械组装', '可再生能源(光伏/风电)', '通用工业粘接', '户外设备防护'],
        iconName: 'Factory'
    }
];

export const MILESTONES: Milestone[] = [
    { year: '2014', event: '公司成立，聚焦电子与汽车封装材料研发。' },
    { year: '2017', event: '产品研发量产，进入主要消费电子供应链。' },
    { year: '2019', event: '获得深圳高新投战略入股，扩大生产规模。' },
    { year: '2020', event: 'CNAS认证实验室建成，服务国际客户。' },
    { year: '2023', event: '新能源汽车导热材料全面量产，通过IATF16949认证。' }
];

export const RD_STATS = [
    { name: '研发创新', value: 92, fullMark: 100 },
    { name: '制造能力', value: 85, fullMark: 100 },
    { name: '品质管控', value: 98, fullMark: 100 }, // High emphasis
    { name: '技术储备', value: 90, fullMark: 100 },
    { name: '客户响应', value: 95, fullMark: 100 }, // High emphasis
];