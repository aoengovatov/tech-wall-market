import { CardItem, CategoryPanel } from "./components";
import { Breadcrumbs, CardPrice, ButtonBlue, ButtonLike } from "../../components";

export const Catalog = () => {
    return (
        <>
            <Breadcrumbs />
            <div className="mb-[30px]">
                <h1 className="ml-[10px] mb-[10px]">Каталог</h1>
                <div className="flex">
                    <div className="flex flex-col w-3/12">
                        <CategoryPanel />
                    </div>
                    <div className="w-9/12">
                        <div className="flex flex-col ml-[10px]">
                            <CardItem />
                            <CardItem />
                            <CardItem />
                            <CardItem />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
