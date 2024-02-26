import { NavPanel } from "./components";

export const Footer = () => {
    return (
        <div className="flex w-[100%] h-[340px]">
            <div className="flex justify-center w-1/2 bg-blue text-white p-[40px]">
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

            <div className="flex items-center justify-center w-1/2 overflow-hidden">
                <img
                    src="/src/assets/footer-map.png"
                    className="w-full bg-auto bg-no-repeat bg-center object-fill"
                ></img>
            </div>
        </div>
    );
};
