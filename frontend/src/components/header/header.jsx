import { IconMenu, Logo } from "./components";

export const Header = () => {
    return (
        <div className="h-[60px] w-[100%] bg-gradient-to-b from-lightGray to-transparent">
            <div className="flex items-center max-w-[1100px] h-[60px] justify-between px-[20px] m-auto mb-[10px] ">
                <Logo />
                <div className="flex">
                    <IconMenu src={"/src/assets/like-icon-sm.png"} />
                    <IconMenu src={"/src/assets/basket_icon-sm.png"} />
                    <IconMenu src={"/src/assets/user-icon-sm.png"} />
                </div>
            </div>
        </div>
    );
};
