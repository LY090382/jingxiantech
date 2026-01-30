export enum ProductCategory {
    THERMAL = '导热界面材料',
    ADHESIVE = '结构粘接胶',
    COATING = '三防涂覆材料',
    SEMICONDUCTOR = '半导体封装 (Underfill)',
    EQUIPMENT = '精密流体设备 (Dispensing)',
    PRECISION = '精密加工组件 (Precision Parts)'
}

export interface ProductSpec {
    label: string;
    value: string;
}

export interface Product {
    id: string;
    name: string;
    category: ProductCategory;
    description: string;
    application: string[];
    specs: ProductSpec[];
    image?: string;
}

export interface Solution {
    id: string;
    title: string;
    description: string;
    features: string[];
    iconName: string;
}

export interface Milestone {
    year: string;
    event: string;
}