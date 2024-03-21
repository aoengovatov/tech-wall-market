import { BrandCard } from "./components/brand-card/brand-card";

export const Brands = () => {
    return (
        <div className="mb-[30px]">
            <h1 className="ml-[10px] mb-[15px]">Бренды</h1>
            <div className="flex w-full justify-around flex-wrap">
                <BrandCard src={"/src/assets/apple-brand-icon.png"} />
                <BrandCard src={"/src/assets/samsung-brand-icon.png"} />
                <BrandCard src={"/src/assets/huawei-brand-icon.png"} />
                <BrandCard src={"/src/assets/xiaomi-brand-icon.png"} />
            </div>
        </div>
    );
};
