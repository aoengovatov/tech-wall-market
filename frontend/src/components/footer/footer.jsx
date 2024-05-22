import { NavPanel } from "./components";
import mapImage from "../../assets/footer-map.png";

export const Footer = () => {
    return (
        <div className="flex flex-col w-full min-[1150px]:flex-row">
            <div className="flex justify-center w-full h-fit min-[1150px]:w-1/2 bg-blue text-white p-[20px] md:p-[40px]">
                <div className="flex flex-col justify-between max-w-[550px]">
                    <div>
                        <div className="text-white text-4xl font-bold mb-[10px]">
                            Tech<span className="text-black font-light">Wall</span>
                        </div>
                        <NavPanel />
                    </div>

                    <div className="text-xs">
                        2020-2024 © TechWall - интернет-магазин по продаже цифровых
                        устройств. Все права защищены. Доставка по всей России.
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center w-full max-h-[330px] min-[1150px]:w-1/2 overflow-hidden">
                <img
                    src={mapImage}
                    className="w-full bg-auto bg-no-repeat bg-center object-fill"
                ></img>
            </div>
        </div>
    );
};
