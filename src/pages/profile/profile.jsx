import { Breadcrumbs } from "../../components";
import { ProfilePanel, WidgetItem } from "./components";

export const Profile = () => {
    return (
        <>
            <Breadcrumbs />
            <div className="mb-[20px]">
                <h1 className="ml-[10px] mb-[10px]">Профиль</h1>
                <div className="flex">
                    <ProfilePanel />
                </div>
            </div>
            <div className="mb-[30px]">
                <h1 className="ml-[10px] mb-[10px]">Виджеты</h1>
                <div className="flex flex-wrap">
                    <WidgetItem name={"favorites"} count={25} />
                </div>
            </div>
        </>
    );
};
