export enum ProductCategory {
    ADHESIVE = 'Adhesive',
    THERMAL = 'Thermal Management',
    COATING = 'Conformal Coating',
    SEMICONDUCTOR = 'Semiconductor Packaging'
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