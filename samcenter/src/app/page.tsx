import BannerCategory from "@/components/Banner/BannerCategory";
import BannerSlider from "@/components/Banner/BannerSlider";
import TopCategories from "@/components/Categories/TopCategories";

export default function Home() {
    return (
        <main>
            <BannerSlider />
            <TopCategories title="Điện thoại Galaxy" link="/mobile" />
            <BannerCategory />
            <TopCategories title="Galaxy Watch" link="/watch" />
            <BannerCategory />
            <TopCategories title="Galaxy Tab" link="/tab" />
            <TopCategories title="Galaxy Buds" link="/buds" />
            <TopCategories title="Phụ kiện" link="/phu-kien" />
            <>
                <div className="container mx-auto flex gap-5 max-sm:gap-3 flex-col">
                    <BannerCategory />
                    <BannerCategory />
                </div>
            </>
            <TopCategories title="Tin Tức" link="/home-new" />
        </main>
    );
}
