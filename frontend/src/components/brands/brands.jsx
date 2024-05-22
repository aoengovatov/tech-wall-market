import { MainTitle } from "../main-title/main-title";
import { BrandCard } from "./components/brand-card/brand-card";
import appleIcon from "../../assets/apple-brand-icon.png";
import samsungIcon from "../../assets/samsung-brand-icon.png";
import huaveiIcon from "../../assets/huawei-brand-icon.png";
import xiaomiIcon from "../../assets/xiaomi-brand-icon.png";

export const Brands = () => {
    return (
        <div className="mb-[30px]">
            <MainTitle>Бренды</MainTitle>
            <div className="flex w-full justify-around flex-wrap">
                <BrandCard src={appleIcon} />
                <BrandCard src={samsungIcon} />
                <BrandCard src={huaveiIcon} />
                <BrandCard src={xiaomiIcon} />
            </div>
        </div>
    );
};
