import {
    Gift,
    Home2,
    LampCharge,
    MonitorMobbile,
    Profile2User,
    Stickynote,
    TaskSquare,
    Video,
} from "iconsax-react";
import { NavItem } from "./model";
import { FooterLinks } from "./model";
import { SidebarItemNews } from "./model";
export const navItems: NavItem[] = [
    {
        name: "Điện thoại Galaxy",
        href: "/mobile",
        children: [
            {
                img: "https://i.ibb.co/xgZWmdq/8.jpg",
                name: "Galaxy S",
                desc: "Vi xử lý mạnh mẽ nhất Galaxy",
                href: "/galaxy-s",
            },
            {
                img: "https://i.ibb.co/xgZWmdq/8.jpg",
                name: "Galaxy A",
                desc: "Galaxy mang đột phá công nghệ đến gần bạn hơn.",
                href: "/galaxy-a",
            },
            {
                img: "https://i.ibb.co/xgZWmdq/8.jpg",
                name: "Galaxy Z",
                desc: "Linh hoạt biến hoá",
                href: "/galaxy-s",
            },
        ],
    },
    {
        name: "Galaxy Watch",
        href: "/dong-ho-thong-minh",
        children: [
            {
                img: "https://i.ibb.co/xgZWmdq/8.jpg",
                name: "Galaxy Watch",
                desc: "Đồng hồ thông minh cho các mục tiêu chăm sóc sức khoẻ hàng ngày",
                href: "/galaxy-watch5",
            },
            {
                img: "https://i.ibb.co/xgZWmdq/8.jpg",
                name: "Galaxy Watch6",
                desc: "Bắt đầu hành trình chăm sóc sức khỏe hàng ngày của bạn.",
                href: "/galaxy-watch-6",
            },
        ],
    },
    {
        name: "Galaxy Tab",
        href: "/may-tinh-bang",
        children: [
            {
                img: "https://i.ibb.co/xgZWmdq/8.jpg",
                name: "Galaxy Watch",
                desc: "Đồng hồ thông minh cho các mục tiêu chăm sóc sức khoẻ hàng ngày",
                href: "/galaxy-watch5",
            },
            {
                img: "https://i.ibb.co/xgZWmdq/8.jpg",
                name: "Galaxy Watch6",
                desc: "Bắt đầu hành trình chăm sóc sức khỏe hàng ngày của bạn.",
                href: "/galaxy-watch-6",
            },
        ],
    },
    {
        name: "Galaxy Buds",
        href: "/tai-nghe",
        children: [
            {
                img: "https://i.ibb.co/xgZWmdq/8.jpg",
                name: "Galaxy Watch",
                desc: "Đồng hồ thông minh cho các mục tiêu chăm sóc sức khoẻ hàng ngày",
                href: "/galaxy-watch5",
            },
            {
                img: "https://i.ibb.co/xgZWmdq/8.jpg",
                name: "Galaxy Watch6",
                desc: "Bắt đầu hành trình chăm sóc sức khỏe hàng ngày của bạn.",
                href: "/galaxy-watch-6",
            },
        ],
    },
    {
        name: "Phụ Kiện",
        href: "/phu-kien-sam",
        children: [
            {
                img: "https://i.ibb.co/xgZWmdq/8.jpg",
                name: "Galaxy Watch",
                desc: "Đồng hồ thông minh cho các mục tiêu chăm sóc sức khoẻ hàng ngày",
                href: "/galaxy-watch5",
            },
            {
                img: "https://i.ibb.co/xgZWmdq/8.jpg",
                name: "Galaxy Watch6",
                desc: "Bắt đầu hành trình chăm sóc sức khỏe hàng ngày của bạn.",
                href: "/galaxy-watch-6",
            },
        ],
    },
    {
        name: "Hot Sale",
        href: "/sale",
    },
    {
        name: "Tin Tức",
        href: "/home-new",
        children: [
            {
                img: "https://i.ibb.co/xgZWmdq/8.jpg",
                name: "Galaxy Watch",
                desc: "Đồng hồ thông minh cho các mục tiêu chăm sóc sức khoẻ hàng ngày",
                href: "/galaxy-watch5",
            },
            {
                img: "https://i.ibb.co/xgZWmdq/8.jpg",
                name: "Galaxy Watch6",
                desc: "Bắt đầu hành trình chăm sóc sức khỏe hàng ngày của bạn.",
                href: "/galaxy-watch-6",
            },
        ],
    },
];

export const footerLink: FooterLinks[] = [
    {
        title: "Tin tức",
        href: "/home-new",
    },
    {
        title: "Giới thiệu",
        href: "/gioi-thieu",
    },
    {
        title: "Phương thức thanh toán",
        href: "/phuong-thuc-thanh-toan",
    },
    {
        title: "Bảo mật thông tin",
        href: "/chinh-sach-bao-mat",
    },
    {
        title: "Chính sách hoạt động chung",
        href: "/chinh-sach-tra-gop",
    },
    {
        title: "Chính sách trả góp",
        href: "/chinh-sach-tra-gop",
    },
    {
        title: "Chính sách giao hàng",
        href: "/chinh-sach-ship-cod",
    },
    {
        title: "Chính sách bảo hành và đổi trả",
        href: "/chinh-sach-doi-tra",
    },
    {
        title: "Hướng dẫn thanh toán và đổi trả",
        href: "/chinh-sach-giao-dich-va-hoan-tien",
    },
    {
        title: "Hệ thống cửa hàng",
        href: "/selectstore",
    },
    {
        title: "Hotline: 1800 4886 (8h00 - 22h00)",
        href: "tel:1800 4886",
    },
    {
        title: "Email: lienhe@samcenter.vn",
        href: "mailto:lienhe@samcenter.vn",
    },
];
export const navItemNews: SidebarItemNews[] = [
    {
        icon: Home2,
        title: "Trang chủ",
        href: "/home-new",
    },
    {
        icon: Gift,
        title: "Khuyến mại",
        href: "/discount",
    },
    {
        icon: LampCharge,
        title: "Mẹo hay",
        href: "/great-tips",
    },
    {
        icon: TaskSquare,
        title: "Đánh giá sản phẩm",
        href: "/product-reviews",
    },
    {
        icon: Profile2User,
        title: "Tư vấn",
        href: "/advise",
    },
    {
        icon: Stickynote,
        title: "Tin khác",
        href: "/other-news",
    },
    {
        icon: MonitorMobbile,
        title: "Sản phẩm mới",
        href: "/new-product",
    },
    {
        icon: Video,
        title: "SamVideo",
        href: "/new-samvideo",
    },
];
