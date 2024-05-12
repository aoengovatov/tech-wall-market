import { MainTitle } from "../main-title/main-title";
import { BrandCard } from "./components/brand-card/brand-card";

export const Brands = () => {
    return (
        <div className="mb-[30px]">
            <MainTitle>Бренды</MainTitle>
            <div className="flex w-full justify-around flex-wrap">
                <BrandCard src={"/src/assets/apple-brand-icon.png"} />
                <BrandCard src={"/src/assets/samsung-brand-icon.png"} />
                <BrandCard src={"/src/assets/huawei-brand-icon.png"} />
                <BrandCard src={"/src/assets/xiaomi-brand-icon.png"} />
            </div>
        </div>
    );
};
