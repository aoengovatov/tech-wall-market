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
                    <WidgetItem
                        name={"favorites"}
                        count={25}
                        link={"/profile/favorites"}
                    />
                    <WidgetItem name={"basket"} count={5} link={"/profile/basket"} />
                    <WidgetItem
                        name={"my-orders"}
                        count={2}
                        link={"/profile/my-orders"}
                    />
                    <WidgetItem
                        name={"add-product"}
                        count={857}
                        link={"/profile/add-product"}
                    />
                    <WidgetItem
                        name={"categories"}
                        count={8}
                        link={"/profile/category"}
                    />
                    <WidgetItem name={"orders"} count={387} link={"/profile/orders"} />
                </div>
            </div>
        </>
    );
};
