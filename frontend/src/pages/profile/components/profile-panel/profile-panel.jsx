import { ProfileItem } from "../profile-item/profile-item";
import { ButtonBlue } from "../../../../components";

export const ProfilePanel = () => {
    return (
        <div className="w-[300px]">
            <div className="flex flex-col w-full bg-lightGray p-[20px] rounded-xl">
                <div className="mb-[10px]">
                    <ProfileItem title={"имя"} value={"Иван"} />
                    <ProfileItem title={"фамилия"} value={"Иванов"} />
                    <ProfileItem title={"логин"} value={"vanya_1987"} />
                    <ProfileItem title={"пароль"} value={"*****13"} />
                </div>

                <ButtonBlue>редактировать</ButtonBlue>
            </div>
        </div>
    );
};
