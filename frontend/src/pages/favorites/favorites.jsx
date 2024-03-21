import { Breadcrumbs, ProductItem } from "../../components";

export const Favorites = () => {
    return (
        <>
            <Breadcrumbs />
            <div className="mb-[20px]">
                <h1 className="ml-[10px] mb-[10px]">Избранное</h1>
                <div className="flex flex-col ml-[10px]">
                    <ProductItem
                        likeButton={false}
                        buttonDelete={true}
                        url={"/catalog/1"}
                    />
                    <ProductItem
                        likeButton={false}
                        buttonDelete={true}
                        url={"/catalog/1"}
                    />
                    <ProductItem
                        likeButton={false}
                        buttonDelete={true}
                        url={"/catalog/1"}
                    />
                    <ProductItem
                        likeButton={false}
                        buttonDelete={true}
                        url={"/catalog/1"}
                    />
                </div>
            </div>
        </>
    );
};
