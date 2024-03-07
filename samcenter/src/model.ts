export interface NavItem {
    name: string;
    href: string;
    children?: childItem[];
}
interface childItem {
    img: string;
    name: string;
    desc: string;
    href: string;
}
export interface SidebarItemNews {
    icon: React.FC;
    title?: string;
    href: string;
}

export interface Products {
    _id: number;
    title: string;
    des: string;
    oldPrice: number;
    price: number;
    brand: string;
    image: string;
    isNew: boolean;
    category: string;
}
export interface SubLinksBoxProps {
    children: childItem[];
}
export interface ItemProps {
    item: Products;
}
export interface FooterLinks {
    title: string;
    href: string;
}
