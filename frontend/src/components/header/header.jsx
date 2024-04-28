import { useSelector } from "react-redux";
import { IconNavMenu, Logo } from "./components";
import { getUserRole } from "../../store/userSlice";
import { ROLE } from "../../constants";

export const Header = () => {
    const userRole = useSelector(getUserRole);

    return (
        <div className="h-[60px] w-[100%] bg-gradient-to-b from-lightGray to-transparent">
            <div className="flex items-center max-w-[1100px] h-[60px] justify-between px-[20px] m-auto mb-[10px] ">
                <Logo />
                <div className="flex">
                    {userRole !== ROLE.GUEST && (
                        <>
                            <IconNavMenu
                                url={"/profile/favorites"}
                                imageSrc={"/src/assets/like-icon-sm.png"}
                            />

                            <IconNavMenu
                                url={"/profile/basket"}
                                imageSrc={"/src/assets/basket_icon-sm.png"}
                            />
                        </>
                    )}

                    <IconNavMenu
                        url={"/profile"}
                        imageSrc={"/src/assets/user-icon-sm.png"}
                    />
                </div>
            </div>
        </div>
    );
};
