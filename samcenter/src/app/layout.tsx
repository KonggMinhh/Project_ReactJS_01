import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header/Header";
import "./globals.scss";
import Footer from "@/components/Footer/Footer";
import CartProvider from "@/providers/CartProvider";

export const metadata: Metadata = {
    title: "SamCenter đại lý uỷ quyền SamSung tại Việt Nam.",
    description:
        "SamCenter đại lý uỷ quyền SamSung tại Việt Nam. Với kinh nghiệm và đam mê sản phẩm Samsung, SamCenter giữ vững cam kết luôn đem lại giá trị tốt nhất cho người dùng sản phẩm SamSung tại Việt Nam.",
};
const samsung = localFont({
    src: [
        // {
        //     path: "../../public/fonts/SamsungOne-400.woff",
        //     weight: "400",
        // },
        {
            path: "../../public/fonts/SamsungOne-400.woff2",
            weight: "400",
        },
        // {
        //     path: "../../public/fonts/SamsungOne-700.woff",
        //     weight: "700",
        // },
        {
            path: "../../public/fonts/SamsungOne-700.woff2",
            weight: "700",
        },
        // {
        //     path: "../../public/fonts/SamsungSharpSans-Bold.woff",
        //     weight: "700",
        // },
        {
            path: "../../public/fonts/SamsungSharpSans-Bold.woff2",
            weight: "700",
        },
    ],
    variable: "--font-samsung",
});
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${samsung.variable} scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
        >
            <body>
                <CartProvider>
                    <Header />
                    {children}
                    <Footer />
                </CartProvider>
            </body>
        </html>
    );
}
