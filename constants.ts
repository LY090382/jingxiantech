import { Product, ProductCategory, Solution, Milestone } from './types';
import { Cpu, Smartphone, Car, Factory, Zap, Shield } from 'lucide-react';

export const COMPANY_NAME = "景贤科技";

// Data extracted and synthesized from CollTech and IboxTech PDFs
export const PRODUCTS: Product[] = [
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
        id: 'industrial',
        title: '半导体与工业',
        description: '服务于5G基站、光伏逆变器及传感器封装。提供电磁屏蔽、芯片固晶及底部填充材料。',
        features: ['5G基站散热', '传感器封装', '芯片底部填充(Underfill)', '电磁屏蔽(EMI)'],
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