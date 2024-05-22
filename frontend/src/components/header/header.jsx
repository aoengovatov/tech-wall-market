import { useSelector } from "react-redux";
import { IconNavMenu, Logo } from "./components";
import { getUserRole } from "../../store/userSlice";
import { ROLE } from "../../constants";
import likeIcon from "../../assets/like-icon-sm.png";
import basketIcon from "../../assets/basket_icon-sm.png";
import userIcon from "../../assets/user-icon-sm.png";

export const Header = () => {
    const userRole = useSelector(getUserRole);

    return (
        <div className="h-[60px] w-[100%] bg-gradient-to-b from-lightGray to-transparent">
            <div className="flex items-center max-w-[1100px] h-[60px] justify-between px-[20px] m-auto mb-[10px] ">
                <Logo />
                <div className="flex">
                    {userRole !== ROLE.GUEST && (
                        <>
                            <IconNavMenu url={"/profile/favorites"} imageSrc={likeIcon} />

                            <IconNavMenu url={"/profile/basket"} imageSrc={basketIcon} />
                        </>
                    )}

                    <IconNavMenu url={"/profile"} imageSrc={userIcon} />
                </div>
            </div>
        </div>
    );
};
